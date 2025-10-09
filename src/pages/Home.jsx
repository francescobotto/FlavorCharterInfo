import { Link } from "react-router-dom";
import Progress from "../components/Progress";

function Home() {
  return (
    <div className="page" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ margin: "0" }}>Flavor Charter</h1>
      <p style={{ color: "#7d7d7dff", fontSize: "1.1rem", margin: "0px" }}>
        Explore your taste perception.
      </p>
      <div style={{ marginTop: "2rem" }}>
        <p style={{ fontSize: "1.1rem" }}>
          Flavor Charter is a scientific research project designed to better
          understand how people perceive taste. The app collects data from
          healthy individuals about how they experience the flavor of different
          foods. Users are asked to rate each food across ten taste dimensions.
          This baseline data from healthy participants will later be compared
          with data from oncology patients to support clinical decisions around
          nutrition and treatment recovery.
        </p>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <h3> Why Taste Perception Matters</h3>
        <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
          Taste perception plays a crucial role in nutrition and quality of
          life. Around <strong>17%</strong> of the global population experiences
          some form of taste disorder, including dysgeusia, and among cancer
          patients undergoing chemotherapy or radiotherapy this number can reach{" "}
          <strong>60–75%</strong>. These alterations can lead to reduced
          appetite, malnutrition, and overall lower well-being. Establishing a
          clear baseline of how healthy individuals perceive taste is essential
          to understanding these changes and supporting clinical interventions.
        </p>
      </div>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "nowrap",
        }}
      >
        <Progress current={28} target={100} />
        <div>
          <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            So far, <strong>28 people</strong> have joined the study, but we are
            aiming at <strong>100</strong> participants to complete our healthy
            baseline.
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
            Every participant helps us build a more complete picture of how
            humans perceive taste.
          </p>
          <Link
            to="/participate"
            className="btn btn-danger"
            style={{ fontWeight: "bold" }}
          >
            Participate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
