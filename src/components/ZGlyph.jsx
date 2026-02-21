import React from "react";
import * as d3 from "d3";
import * as d3Shape from "d3-shape";

import { FlavorOrder, PropertiesMap } from "../constants/flavors";

const MAX_CHART_SIZE = 230;
const extraMargin = 20;

export default function ZGlyph({ baselineMean, baselineStDev, compareMean }) {
  const labels = FlavorOrder;

  const size = MAX_CHART_SIZE;
  const radius = size / 2;
  const levels = 5;
  const maxValue = 5;
  const totalDimensions = FlavorOrder.length;
  const sliceAngle = totalDimensions ? (2 * Math.PI) / totalDimensions : 0;
  const wedgeGap = 0; // Differenge!! No gap needed between dimension

  const scaleRadius = d3.scaleLinear().domain([0, maxValue]).range([0, radius]);

  function buildArcPath(startAngle, endAngle, innerR, outerR) {
    return d3Shape.arc().innerRadius(innerR).outerRadius(outerR).startAngle(startAngle).endAngle(endAngle)();
  }

  function renderCurvedLabels() {
    const labelRadius = radius + 5;
    return labels.map((label, i) => {
      const angleStart = (i + 1) * sliceAngle - wedgeGap;
      const angleEnd = i * sliceAngle + wedgeGap;
      const arcPath = buildArcPath(angleEnd - 0.1, angleStart + 0.1, labelRadius, labelRadius);
      const arcId = `labelArc-${i}`;
      return (
        <React.Fragment key={`label-${i}`}>
          <defs>
            <path id={arcId} d={arcPath} fill="none" />
          </defs>
          <text fontSize="12" fill="#333">
            <textPath href={`#${arcId}`} startOffset="30%" textAnchor="middle">
              {label}
            </textPath>
          </text>
        </React.Fragment>
      );
    });
  }

  function renderZPoints() {
    const baselineLevel = 4; // baseline = 4th circle
    const minLevel = 3; // lowest for negative deviations
    const maxLevel = 5; // highest for positive deviations

    const levelRadius = (lvl) => (lvl / levels) * radius;

    const maxDeviation = 3; // normalizer: assume +/-3 deviation = full range

    return FlavorOrder.map((key, i) => {
      const base = baselineMean[PropertiesMap[key]] ?? 0;
      const comp = compareMean ? (compareMean[PropertiesMap[key]] ?? 0) : 0;
      const sd = baselineStDev[PropertiesMap[key]] ?? 1;
      const z = sd !== 0 ? (comp - base) / sd : 0;

      const clamped = Math.max(-maxDeviation, Math.min(maxDeviation, z));
      const t = clamped / maxDeviation;

      const targetLevel = baselineLevel + t * 1;
      const finalLevel = Math.max(minLevel, Math.min(maxLevel, targetLevel));

      const r = levelRadius(finalLevel);

      const angle = i * sliceAngle + sliceAngle / 2 + 11;

      const x = r * Math.cos(angle);
      const y = r * Math.sin(angle);

      return <circle key={`zpoint-${i}`} cx={x} cy={y} r={3} fill={t >= 0 ? "#d9534f" : "#0275d8"} />;
    });
  }

  function renderZCurve() {
    const baselineLevel = 4;
    const minLevel = 3;
    const maxLevel = 5;

    const levelRadius = (lvl) => (lvl / levels) * radius;
    const maxDeviation = 3;

    const points = FlavorOrder.map((key, i) => {
      const base = baselineMean[PropertiesMap[key]] ?? 0;
      const comp = compareMean ? (compareMean[PropertiesMap[key]] ?? 0) : 0;
      const sd = baselineStDev[PropertiesMap[key]] ?? 1;
      const z = sd !== 0 ? (comp - base) / sd : 0;

      const clamped = Math.max(-maxDeviation, Math.min(maxDeviation, z));
      const t = clamped / maxDeviation;
      const targetLevel = baselineLevel + t * 1;
      const finalLevel = Math.max(minLevel, Math.min(maxLevel, targetLevel));
      const r = levelRadius(finalLevel);
      const angle = i * sliceAngle + sliceAngle / 2 + 11;

      return [r * Math.cos(angle), r * Math.sin(angle)];
    });

    const lineGen = d3.line().curve(d3.curveCardinalClosed.tension(0.1));

    const pathData = lineGen(points);

    return <path d={pathData} fill="none" stroke="#444" strokeWidth={1} opacity={0.9} />;
  }

  // --- NEW: Area fill between curve and baseline ---
  function renderZFill() {
    const baselineLevel = 4;
    const baselineR = (baselineLevel / levels) * radius;
    const maxDeviation = 3;

    const levelRadius = (lvl) => (lvl / levels) * radius;

    const segments = FlavorOrder.map((key, i) => {
      const base = baselineMean[PropertiesMap[key]] ?? 0;
      const comp = compareMean ? (compareMean[PropertiesMap[key]] ?? 0) : 0;
      const sd = baselineStDev[PropertiesMap[key]] ?? 1;
      const z = sd !== 0 ? (comp - base) / sd : 0;

      const clamped = Math.max(-maxDeviation, Math.min(maxDeviation, z));
      const t = clamped / maxDeviation;

      const finalLevel = baselineLevel + t;
      const r = levelRadius(finalLevel);

      const angle = i * sliceAngle + sliceAngle / 2;

      return { angle, r };
    });

    // Build radial areas
    const area = d3
      .areaRadial()
      .curve(d3.curveCardinalClosed.tension(0.1))
      .angle((d) => d.angle);

    const positivePath = area.innerRadius(baselineR).outerRadius((d) => Math.max(d.r, baselineR))(segments);

    const negativePath = area.innerRadius((d) => Math.min(d.r, baselineR)).outerRadius(baselineR)(segments);

    return (
      <>
        <path d={positivePath} fill="rgba(220,60,60,0.25)" stroke="none" />
        <path d={negativePath} fill="rgba(50,100,220,0.25)" stroke="none" />
      </>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <svg
        width={size + extraMargin * 2}
        height={size + extraMargin * 2}
        viewBox={`-${radius + extraMargin} -${radius + extraMargin} ${size + extraMargin * 2} ${size + extraMargin * 2}`}
      >
        {/* Cerchi concentrici */}
        {Array.from({ length: levels }, (_, idx) => {
          if (idx < 2) return null; // skip first two inner circles
          const r = ((idx + 1) / levels) * radius;
          const circlePath = d3Shape
            .arc()
            .innerRadius(r)
            .outerRadius(r)
            .startAngle(0)
            .endAngle(2 * Math.PI)();
          return <path key={`grid-${idx}`} d={circlePath} stroke="#999" strokeOpacity={0.2} fill="none" />;
        })}
        {renderZFill()}
        {renderZCurve()}
        {renderZPoints()}
        {renderCurvedLabels()}
      </svg>
    </div>
  );
}
