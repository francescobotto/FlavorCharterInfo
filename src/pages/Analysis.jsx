import React, { useState } from "react";
// import RadarChart from "../components/RadarChart";
import OutlierRadarChart from "../components/OutlierRadarChart";
import { Data } from "../constants/data";

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

  return (
    <div className="page" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ margin: 0 }}>Preliminary Results</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "2rem" }}>
        This section presents a snapshot of our ongoing research. We are
        currently collecting taste perception data from healthy individuals to
        build a baseline reference. Below are early aggregate results from
        selected foods based on the subjects currently enrolled in the study
        (see Home Page for the current count). Tables with the mean and stdev
        results are below each graph. These results as well as more detailed
        analyses will be updated as we enroll more subjects.
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
        {Data.map((item) => {
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
              {/* <RadarChart data={item.data} labels={exampleLabels} /> */}
              <OutlierRadarChart
                outliers={item.outliers}
                distribution={item.distribution}
                meanValues={item.meanValues}
              />
              {/* <button
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
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Analysis;
