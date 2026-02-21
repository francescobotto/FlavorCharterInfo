import * as d3 from "d3";
import { FlavorOrder, PropertiesMap } from "../constants/flavors";

const ratings = ["0", "1", "2", "3", "4", "5", "Mean"];

// Utility function: returns "white" or "black" depending on cell color brightness
function getContrastColor(color) {
  let r, g, b;

  if (color.startsWith("rgb")) {
    const values = color
      .replace(/rgba?\(|\)|\s/g, "")
      .split(",")
      .map(Number);
    [r, g, b] = values;
  } else if (color.startsWith("#")) {
    const c = color.slice(1);
    r = parseInt(c.substring(0, 2), 16);
    g = parseInt(c.substring(2, 4), 16);
    b = parseInt(c.substring(4, 6), 16);
  } else {
    return "black";
  }

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}

export default function FlavorHeatmap({ distribution = {}, meanValues = {} }) {
  const cellSize = 50;

  const margin = { top: 100, right: 40, bottom: 40, left: 120 };

  const gridWidth = FlavorOrder.length * cellSize;
  const gridHeight = ratings.length * cellSize;

  const width = gridWidth + margin.left + margin.right;
  const height = gridHeight + margin.top + margin.bottom;

  const matrix = ratings.map((r) =>
    FlavorOrder.map((flavor) => {
      if (r === "Mean") return meanValues[PropertiesMap[flavor]] ?? 0;
      return distribution?.[PropertiesMap[flavor]]?.[r]?.count ?? 0;
    }),
  );

  const allValues = matrix.flat();

  const colorScale = d3
    .scaleSequential()
    .domain([0, d3.max(allValues)])
    .interpolator(d3.interpolateBlues);

  return (
    <svg width={width} height={height}>
      {FlavorOrder.map((flavor, j) => {
        const x = margin.left + j * cellSize + cellSize / 2;
        const y = margin.top - 10;

        return (
          <text key={flavor} x={x} y={y} fontSize="12" fontWeight="600" textAnchor="start" transform={`rotate(-45, ${x}, ${y})`}>
            {flavor}
          </text>
        );
      })}

      {ratings.map((r, i) => (
        <text
          key={r}
          x={margin.left - 15}
          y={margin.top + i * cellSize + cellSize / 2}
          fontSize="13"
          fontWeight="600"
          textAnchor="end"
          alignmentBaseline="middle"
        >
          {r}
        </text>
      ))}

      {matrix.map((row, i) =>
        row.map((value, j) => {
          const cellColor = ratings[i] === "Mean" ? "none" : colorScale(value);
          const textColor = ratings[i] === "Mean" ? "black" : getContrastColor(cellColor);

          return (
            <g key={`${i}-${j}`}>
              <rect x={margin.left + j * cellSize} y={margin.top + i * cellSize} width={cellSize} height={cellSize} fill={cellColor} stroke="white" />

              <text
                x={margin.left + j * cellSize + cellSize / 2}
                y={margin.top + i * cellSize + cellSize / 2}
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="12"
                fontWeight="600"
                fill={textColor}
              >
                {ratings[i] === "Mean" ? value.toFixed(2) : value}
              </text>
            </g>
          );
        }),
      )}

      <text x={margin.left + gridWidth / 2} y={margin.top - 60} fontSize="14" fontWeight="700" textAnchor="middle">
        Flavor Dimensions
      </text>

      <text
        x={margin.left / 2 + 30}
        y={margin.top + gridHeight / 2}
        fontSize="14"
        fontWeight="700"
        textAnchor="middle"
        alignmentBaseline="middle"
        transform={`rotate(-90, ${margin.left / 2} , ${margin.top + gridHeight / 2})`}
      >
        Rating
      </text>
    </svg>
  );
}
