import * as d3 from "d3";
import * as d3Shape from "d3-shape";

import { FlavorOrder, PropertiesMap } from "../constants/flavors";

const MAX_CHART_SIZE = 230;
const extraMargin = 20;

export default function OutlierRadarChart({ outliers = {}, showOutliers = false, distribution = {}, meanValues = {} }) {
  const keys = FlavorOrder;

  const labels = FlavorOrder;

  const size = MAX_CHART_SIZE;
  const radius = size / 2;
  const levels = 6;
  const totalDimensions = labels.length;
  const sliceAngle = totalDimensions ? (2 * Math.PI) / totalDimensions : 0;
  const wedgeGap = 0.03;

  const scaleRadius = d3.scaleLinear().domain([0, levels]).range([0, radius]);

  // Tooltip identical to PlotChart
  const tooltip3 = d3
    .select("body")
    .append("div")
    .attr("class", "plotchart-tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background", "white")
    .style("padding", "6px 10px")
    .style("border", "1px solid #ccc")
    .style("border-radius", "4px")
    .style("font-size", "12px")
    .style("white-space", "nowrap")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
    .style("z-index", 1000);

  function buildArcPath(startAngle, endAngle, innerR, outerR) {
    return d3Shape.arc().innerRadius(innerR).outerRadius(outerR).startAngle(startAngle).endAngle(endAngle)();
  }

  function renderDistributionArcs() {
    return keys.flatMap((key, i) => {
      const dist = distribution[PropertiesMap[key]] || {};
      const outLevels = outliers[PropertiesMap[key]] || [];

      const numericLevels = Object.entries(dist).filter(([level]) => !isNaN(Number(level)));

      const total = numericLevels.reduce((sum, [, entry]) => sum + (entry?.count ?? 0), 0);

      const angleStart = i * sliceAngle + wedgeGap / 2;
      const angleEnd = (i + 1) * sliceAngle - wedgeGap / 2;

      return numericLevels.map(([level, entry]) => {
        const countVal = entry?.count ?? 0;
        const opacity = total > 0 ? countVal / total : 0;

        const ringStart = scaleRadius(Number(level));
        const ringEnd = scaleRadius(Number(level) + 1);

        const isOutlier = showOutliers && outLevels.includes(Number(level));
        const color = isOutlier ? "#0044ff" : "#FFA500";

        const pathData = buildArcPath(angleStart, angleEnd, ringStart, ringEnd);

        return (
          <path
            key={`${key}-${level}`}
            d={pathData}
            fill={color}
            fillOpacity={opacity}
            stroke="#F8F9FA"
            strokeWidth={1}
            onMouseOver={() => {
              const mean = meanValues[PropertiesMap[key]] ?? 0;

              const votesLines = numericLevels.map(([lvl, ent]) => `${lvl}: ${ent.count ?? 0} votes`).join("<br>");

              tooltip3.style("visibility", "visible").html(
                `<strong>${key}</strong><br>
           Mean: ${mean.toFixed(2)}<br>
           ${votesLines}`,
              );
            }}
            onMouseMove={(event) => {
              tooltip3.style("left", event.pageX + 12 + "px").style("top", event.pageY + 12 + "px");
            }}
            onMouseLeave={() => {
              tooltip3.style("visibility", "hidden");
            }}
            style={{ cursor: "pointer" }}
          />
        );
      });
    });
  }

  function renderCurvedLabels() {
    const labelRadius = radius + 5;

    return labels.map((label, i) => {
      const angleOffset = 0.1;
      const angleStart = (i + 1) * sliceAngle - wedgeGap - angleOffset;
      const angleEnd = i * sliceAngle + wedgeGap;

      const arcPath = buildArcPath(angleEnd - 0.1, angleStart + 0.1, labelRadius, labelRadius);
      const arcId = `labelArc-${i}`;

      return (
        <g key={`label-${i}`}>
          <defs>
            <path id={arcId} d={arcPath} fill="none" />
          </defs>
          <text fontSize="12" fill="#333">
            <textPath href={`#${arcId}`} startOffset="30%" textAnchor="middle">
              {label}
            </textPath>
          </text>
        </g>
      );
    });
  }

  function renderOutline() {
    const pathElements = [];

    keys.forEach((key, i) => {
      const mean = (meanValues[PropertiesMap[key]] ?? 0) + 1;
      const r = scaleRadius(mean);
      const angleStart = i * sliceAngle;
      const angleEnd = (i + 1) * sliceAngle;

      const arcPath = d3Shape.arc().innerRadius(r).outerRadius(r).startAngle(angleStart).endAngle(angleEnd)();

      pathElements.push(<path key={`arc-${i}`} d={arcPath} stroke="red" strokeWidth={2} fill="none" />);
      // Linea verticale che collega la fine di questo arco all'inizio del successivo
      const nextKey = keys[(i + 1) % keys.length];
      const nextMean = (meanValues[PropertiesMap[nextKey]] ?? 0) + 1;
      const rNext = scaleRadius(nextMean);
      const angleOffset = 11;
      const dividerAngle = (i + 1) * sliceAngle + angleOffset; // divisione precisa tra dimensioni

      // Punto finale dell'arco corrente (al bordo della dimensione i)
      const x1 = r * Math.cos(dividerAngle);
      const y1 = r * Math.sin(dividerAngle);

      // Punto iniziale dell'arco successivo (stesso angolo, ma raggio diverso)
      const x2 = rNext * Math.cos(dividerAngle);
      const y2 = rNext * Math.sin(dividerAngle);

      pathElements.push(<line key={`divider-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="red" strokeWidth={2} />);
    });

    return <g>{pathElements}</g>;
  }

  return (
    <div style={{ textAlign: "center", padding: "0px", backgroundColor: "#F8F9FA" }}>
      <svg
        width={size + extraMargin * 2}
        height={size + extraMargin * 2}
        viewBox={`-${radius + extraMargin} -${radius + extraMargin} ${size + extraMargin * 2} ${size + extraMargin * 2}`}
      >
        {renderDistributionArcs()}
        {Array.from({ length: levels }, (_, idx) => {
          const r = ((idx + 1) / levels) * radius;
          const circlePath = d3Shape
            .arc()
            .innerRadius(r)
            .outerRadius(r)
            .startAngle(0)
            .endAngle(2 * Math.PI)();
          return <path key={`grid-${idx}`} d={circlePath} stroke="#999" strokeOpacity={0.2} fill="none" />;
        })}
        {renderOutline()}
        {renderCurvedLabels()}
      </svg>
    </div>
  );
}
