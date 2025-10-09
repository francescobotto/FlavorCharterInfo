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
    "Piquant",
    "Texture",
  ];

  const exampleData = [
    {
      name: "Strawberry",
      data: [
        { value: 4.5, stdDev: 0.3 },
        { value: 2.1, stdDev: 0.4 },
        { value: 1.5, stdDev: 0.5 },
        { value: 1.2, stdDev: 0.2 },
        { value: 2.8, stdDev: 0.3 },
        { value: 0.9, stdDev: 0.1 },
        { value: 1.1, stdDev: 0.2 },
        { value: 3.2, stdDev: 0.3 },
        { value: 0.7, stdDev: 0.1 },
        { value: 2.0, stdDev: 0.2 },
      ],
    },
    {
      name: "Dark Chocolate",
      data: [
        { value: 1.5, stdDev: 0.2 },
        { value: 0.6, stdDev: 0.1 },
        { value: 3.9, stdDev: 0.3 },
        { value: 0.4, stdDev: 0.2 },
        { value: 4.2, stdDev: 0.2 },
        { value: 0.5, stdDev: 0.2 },
        { value: 3.5, stdDev: 0.3 },
        { value: 2.4, stdDev: 0.3 },
        { value: 1.0, stdDev: 0.1 },
        { value: 3.0, stdDev: 0.2 },
      ],
    },
    {
      name: "Almonds",
      data: [
        { value: 0.8, stdDev: 0.1 },
        { value: 2.9, stdDev: 0.3 },
        { value: 1.1, stdDev: 0.2 },
        { value: 2.5, stdDev: 0.3 },
        { value: 1.0, stdDev: 0.2 },
        { value: 1.7, stdDev: 0.2 },
        { value: 0.6, stdDev: 0.1 },
        { value: 2.0, stdDev: 0.3 },
        { value: 4.5, stdDev: 0.4 },
        { value: 1.9, stdDev: 0.2 },
      ],
    },
  ];

  return (
    <div className="page" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ margin: 0 }}>Preliminary Analysis</h1>
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
          marginTop: "2rem",
        }}
      >
        {exampleData.map((item) => (
          <div
            key={item.name}
            style={{ textAlign: "center", maxWidth: "280px" }}
          >
            <h4>{item.name}</h4>
            <RadarChart data={item.data} labels={exampleLabels} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analysis;
