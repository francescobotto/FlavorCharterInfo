import { useEffect, useRef } from "react";
import * as d3 from "d3";

function Progress({ current = 31, target = 100, size = 120 }) {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove(); // Clear before redraw

    const radius = size / 2;
    const thickness = 10;
    const value = current / target;

    const arc = d3
      .arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius)
      .startAngle(0)
      .endAngle(2 * Math.PI * value);

    const bgArc = d3
      .arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius)
      .startAngle(0)
      .endAngle(2 * Math.PI);

    const g = svg
      .attr("width", size)
      .attr("height", size)
      .append("g")
      .attr("transform", `translate(${radius}, ${radius})`);

    // Background circle
    g.append("path").attr("d", bgArc).attr("fill", "#e0e0e0");

    // Progress arc
    g.append("path").attr("d", arc).attr("fill", "#D50032");

    // Center text
    g.append("text")
      .text(current)
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .style("font-size", "1.5rem")
      .style("font-weight", "bold");
  }, [current, target, size]);

  return (
    <div style={{ display: "inline-block", textAlign: "center" }}>
      <svg ref={ref}></svg>
      <div style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
        out of {target}
      </div>
    </div>
  );
}

export default Progress;
