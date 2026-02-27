import { Link } from "react-router-dom";
import Progress from "../components/Progress";

function Home() {
  return (
    <div className="page" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ margin: "0" }}>Flavor Charter</h1>
      <p style={{ color: "#7d7d7dff", fontSize: "1.1rem", margin: "0px" }}>Explore your taste perception.</p>
      <div style={{ marginTop: "2rem" }}>
        <p style={{ fontSize: "1.1rem" }}>
          Flavor Charter is a scientific research project designed to better understand how people perceive taste. The app collects data from healthy
          individuals about how they experience the flavor of different foods. Users are asked to rate each food across ten taste dimensions. This baseline data
          from healthy participants will later be compared with data from oncology patients to support clinical decisions around nutrition and treatment
          recovery.
        </p>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <h3> Why Taste Perception Matters</h3>
        <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
          Taste perception plays a crucial role in nutrition and quality of life. Around{" "}
          <a href="https://my.clevelandclinic.org/health/diseases/22047-dysgeusia" target="_blank" rel="noopener noreferrer">
            <strong>17%</strong>
          </a>{" "}
          of the US population experiences some form of taste disorder, including dysgeusia, and among Head and Neck Cancer patients undergoing chemotherapy or
          radiotherapy this number can reach{" "}
          <a href="https://www.thegreenjournal.com/article/S0167-8140(21)00023-2/fulltext" target="_blank" rel="noopener noreferrer">
            <strong>51–100%</strong>
          </a>
          . These alterations can lead to reduced appetite, malnutrition, and overall lower well-being. Establishing a clear baseline of how healthy individuals
          perceive taste is essential to understanding these changes and supporting clinical interventions.
        </p>
      </div>
      <div className="row align-items-center" style={{ marginTop: "2rem" }}>
        <div className="col-sm-auto mb-3 mb-sm-0">
          <Progress current={100} target={100} />
        </div>
        <div className="col ">
          <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            So far, <strong>100</strong> people have enrolled in the study, and we reached this first milestone by <strong>January 15th 2026</strong>
            <br />
            Our study includes diverse ethnic and national backgrounds, with South Asian (41%) and Non-Hispanic White (32%) groups most represented.
            <br />
            Participants are predominantly young adults aged 18–34 (68%), providing valuable insight into how young people perceive flavor.
            {/* <br />
            Dietary habits are varied, with balanced (39%), Mediterranean (21%),
            and vegetarian (19%) diets being the most common, and participants
            show a wide range of cultural influences, including strong Indian
            and Italian representation in preferred cuisines. */}
          </p>
        </div>
      </div>

      <div className="row align-items-center" style={{ marginTop: "2rem" }}>
        <div className="col-sm-auto mb-3 mb-sm-0">
          <Progress current={0} target={100} />
        </div>
        <div className="col ">
          <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            We are thrilled to enroll the next <strong>100</strong> participants by <strong>August 2026</strong> to further strengthen the reliability and
            robustness of the taste profiles.
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>Every participant helps us build a more complete picture of how humans perceive taste.</p>
          <Link to="/participate" className="btn btn-danger" style={{ fontWeight: "bold" }}>
            Participate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
