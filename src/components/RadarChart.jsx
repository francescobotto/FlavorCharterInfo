import React from "react";
import * as d3 from "d3";
import * as d3Shape from "d3-shape";

const MAX_CHART_SIZE = 200;
const extraMargin = 30;
export const COLORS = {
  Sweet: "#FF7043",
  Sour: "#FFA726",
  Salty: "#ecc74e",
  Bitter: "#4FC3F7",
  Savory: "#81C784",
  Astringent: "#E57373",
  Fatty: "#9575CD",
  Aromatic: "#BA68C8",
  Piquant: "#FF8A65",
  Texture: "#A1887F",
};

export default function RadarChart({
  data = [], // es. [2, 3, 4, ...]
  labels = [], // es. ["Sweet", "Sour", ...]
  levels = 5,
  maxValue = 5,
}) {
  const size = MAX_CHART_SIZE;
  const radius = size / 2;
  const totalSize = size + extraMargin * 2;
  const viewBox = `-${radius + extraMargin} -${
    radius + extraMargin
  } ${totalSize} ${totalSize}`;

  const totalDimensions = labels.length;
  const sliceAngle = totalDimensions ? (2 * Math.PI) / totalDimensions : 0;
  const wedgeGap = 0.03;

  const scaleRadius = d3.scaleLinear().domain([0, maxValue]).range([0, radius]);

  function buildArcPath(startAngle, endAngle, innerR, outerR) {
    return d3Shape
      .arc()
      .innerRadius(innerR)
      .outerRadius(outerR)
      .startAngle(startAngle)
      .endAngle(endAngle)();
  }

  // Tooltip div
  const tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "radar_tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("pointer-events", "none")
    .style("background", "white")
    .style("padding", "6px 10px")
    .style("border", "1px solid #ccc")
    .style("border-radius", "4px")
    .style("font-size", "12px")
    .style("white-space", "nowrap")
    .style("box-shadow", "0 2px 6px rgba(0, 0, 0, 0.15)")
    .style("z-index", 1000);

  function renderDimensionArcs() {
    return data.flatMap((entry, i) => {
      const value = entry?.value;
      const stdDev = entry?.stdDev;
      if (value === null || value === undefined) return null;
      const roundedValue = Math.round(value);
      const angleStart = i * sliceAngle + wedgeGap / 2;
      const angleEnd = (i + 1) * sliceAngle - wedgeGap / 2;
      const dimensionRadius = scaleRadius(roundedValue);
      const fillColor = COLORS[labels[i]] || "#999";

      const arcs = [];
      const numFullArcs = roundedValue;
      for (let levelIndex = 0; levelIndex < numFullArcs; levelIndex++) {
        const ringStart = (levelIndex / levels) * radius;
        const ringEnd = ((levelIndex + 1) / levels) * radius;
        const clampedEnd = Math.min(ringEnd, dimensionRadius);

        if (clampedEnd > ringStart) {
          const pathData = buildArcPath(
            angleStart,
            angleEnd,
            ringStart,
            clampedEnd
          );
          arcs.push(
            <path
              key={`arc-${i}-${levelIndex}`}
              d={pathData}
              fill={fillColor}
              fillOpacity={0.8}
              stroke="#fff"
              strokeWidth={1}
              onMouseEnter={(event) => {
                tooltip
                  .style("visibility", "visible")
                  .html(
                    `${labels[i]}: ${value.toFixed(1)} ± ${
                      stdDev?.toFixed(1) ?? 0
                    }`
                  );
              }}
              onMouseMove={(event) => {
                tooltip
                  .style("top", `${event.pageY + 10}px`)
                  .style("left", `${event.pageX + 10}px`);
              }}
              onMouseLeave={() => {
                tooltip.style("visibility", "hidden");
              }}
            />
          );
        }
      }
      return arcs;
    });
  }

  function renderCurvedLabels() {
    const labelRadius = radius + 5;

    return labels.map((label, i) => {
      const angleStart = (i + 1) * sliceAngle - wedgeGap;
      const angleEnd = i * sliceAngle + wedgeGap;
      const labelRadius = radius + 5;

      const arcPath = buildArcPath(
        angleEnd,
        angleStart,
        labelRadius,
        labelRadius
      );
      const arcId = `labelArc-${i}`;

      return (
        <React.Fragment key={`label-${i}`}>
          <defs>
            <path id={arcId} d={arcPath} fill="none" />
          </defs>
          <text fontSize="10" fill="#333">
            <textPath href={`#${arcId}`} startOffset="30%" textAnchor="middle">
              {label}
            </textPath>
          </text>
        </React.Fragment>
      );
    });
  }

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <svg width={totalSize} height={totalSize} viewBox={viewBox}>
        {Array.from({ length: levels }, (_, idx) => {
          const r = ((idx + 1) / levels) * radius;
          const circlePath = d3Shape
            .arc()
            .innerRadius(r)
            .outerRadius(r)
            .startAngle(0)
            .endAngle(2 * Math.PI)();
          return (
            <path
              key={`grid-${idx}`}
              d={circlePath}
              stroke="#999"
              strokeOpacity={0.2}
              fill="none"
            />
          );
        })}

        {renderDimensionArcs()}
        {renderCurvedLabels()}
      </svg>
    </div>
  );
}
