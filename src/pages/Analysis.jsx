import React, { useState } from "react";
import RadarChart from "../components/RadarChart";

function Analysis() {
  const exampleLabels = [
    "Sweet",
    "Sour",
    "Salty",
    "Bitter",
    "Savory",
    "Astringent",
    "Fatty",
    "Aromatic",
    "Texture",
    "Piquant",
  ];

  const exampleData = [
    {
      name: "Strawberry",
      data: [
        { value: 3.0, stdDev: 0.82 },
        { value: 2.38, stdDev: 1.19 },
        { value: 0.23, stdDev: 0.44 },
        { value: 0.38, stdDev: 1.12 },
        { value: 0.08, stdDev: 0.28 },
        { value: 0.0, stdDev: 0.0 },
        { value: 0.69, stdDev: 0.75 },
        { value: 2.23, stdDev: 1.42 },
        { value: 1.85, stdDev: 1.28 },
        { value: 0.0, stdDev: 0.0 },
      ],
    },
    {
      name: "Dark Chocolate",
      data: [
        { value: 1.42, stdDev: 1.0 },
        { value: 0.5, stdDev: 1.17 },
        { value: 0.33, stdDev: 0.65 },
        { value: 3.5, stdDev: 1.09 },
        { value: 0.08, stdDev: 0.29 },
        { value: 1.58, stdDev: 1.16 },
        { value: 1.0, stdDev: 1.65 },
        { value: 1.67, stdDev: 0.98 },
        { value: 2.17, stdDev: 1.4 },
        { value: 0.0, stdDev: 0.0 },
      ],
    },
    {
      name: "Almonds",
      data: [
        { value: 0.75, stdDev: 1.22 },
        { value: 0.0, stdDev: 0.0 },
        { value: 0.83, stdDev: 1.11 },
        { value: 0.83, stdDev: 1.59 },
        { value: 0.17, stdDev: 0.39 },
        { value: 2.17, stdDev: 1.47 },
        { value: 0.42, stdDev: 0.9 },
        { value: 0.5, stdDev: 0.67 },
        { value: 4.25, stdDev: 1.48 },
        { value: 0.0, stdDev: 0.0 },
      ],
    },
  ];

  return (
    <div className="page" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ margin: 0 }}>Preliminary Results</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "2rem" }}>
        This section presents a snapshot of our ongoing research. We are
        currently collecting taste perception data from healthy individuals to
        build a baseline reference. Below are early aggregate results from
        selected foods.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <h3>Taste Profiles</h3>
        <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
          The radar charts below illustrate the average taste ratings across ten
          dimensions for different foods. Each axis represents a taste
          dimension, and the distance from the center indicates the average
          rating (0-5).
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {exampleData.map((item) => {
          // State for each item by name
          const [showTable, setShowTable] = useState(false);
          return (
            <div
              key={item.name}
              style={{
                textAlign: "center",
                maxWidth: "280px",
                marginTop: "2rem",
              }}
            >
              <h4>{item.name}</h4>
              <RadarChart data={item.data} labels={exampleLabels} />
              <button
                onClick={() => setShowTable((prev) => !prev)}
                style={{
                  marginTop: "1rem",
                  marginBottom: "0.5rem",
                  fontSize: "0.8rem",
                  padding: "0.3rem 0.6rem",
                  cursor: "pointer",
                  backgroundColor: "#f2f2f2ff",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                {showTable ? "Hide Table" : "Show Table"}
              </button>
              {showTable && (
                <table
                  style={{
                    width: "100%",
                    fontSize: "0.85rem",
                    marginTop: "1rem",
                    borderCollapse: "collapse",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{ textAlign: "center", paddingBottom: "0.5rem" }}
                      >
                        Dimension
                      </th>
                      <th
                        style={{ textAlign: "center", paddingBottom: "0.5rem" }}
                      >
                        Mean ± Stdev
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.data.map((dim, idx) => (
                      <tr key={idx}>
                        <td>{exampleLabels[idx]}</td>
                        <td style={{ textAlign: "center" }}>
                          {dim.value.toFixed(2)} ± {dim.stdDev.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Analysis;
