function About() {
  return (
    <div className="page" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ margin: 0 }}>About</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "2rem" }}>
        This study is conducted by the Electronic Visualization Laboratory (EVL)
        at the University of Illinois Chicago (UIC), under IRB Protocol
        STUDY2025-0477.
      </p>

      <h3 style={{ marginTop: "2rem" }}>Research Team</h3>
      <div>
        <div style={{ marginTop: "0.5rem" }}>
          <strong>G. Elisabeta Marai</strong>
          <br />
          <em>Department of Computer Science</em>
          <br />
          University of Illinois Chicago
          <br />
          <em>Principal Investigator</em>
          <br />
        </div>
        <div style={{ marginTop: "0.5rem" }}>
          <strong>Francesco Botto</strong>
          <br />
          <em>Department of Computer Science</em>
          <br />
          University of Illinois Chicago
          <br />
          <em>Research Assistant</em>
          <br />
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Scientific goals</h3>
        <ul
          style={{
            fontSize: "1rem",
            marginTop: "0.5rem",
            lineHeight: "1.8",
            paddingLeft: "1.2rem",
          }}
        >
          <li>
            Build a reliable taste perception baseline from healthy participants
          </li>
          <li>Identify deviations in taste perception in oncology patients</li>
          <li>
            Explore correlations between treatment types and sensory alterations
          </li>
          <li>
            Suggest personalized dietary recommendations based on perception
            patterns
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Pubblications</h3>
        <p>
          <a href="https://uofi.box.com/s/w7ad67yhdiv82oq5094zsosgo32166bb">
            FlavorCharter:
          </a>{" "}
          Development of a Smartphone App for Quantifying Food Flavor, Francesco
          Botto, Guadalupe Canhuate, Xinhua Zhang, C. David Fuller, G. Elisabeta
          Marai, pp. 1-8, Workshop on Computational Gastronomy: Data Science for
          Food and Cooking (CoGamy) at the International Conference on Data
          Mining (ICDM) 2025
        </p>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h3>Collaborators</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1.5rem",
          }}
        >
          <img
            src="/FlavorCharterInfo/uic.png"
            alt="UIC"
            style={{ height: "60px", objectFit: "contain" }}
          />
          <img
            src="/FlavorCharterInfo/evl.png"
            alt="EVL"
            style={{ height: "60px", objectFit: "contain" }}
          />
          <img
            src="/FlavorCharterInfo/md_anderson.png"
            alt="MD Anderson Cancer Center"
            style={{ height: "60px", objectFit: "contain" }}
          />
          <img
            src="/FlavorCharterInfo/iowa.png"
            alt="University of Iowa"
            style={{ height: "60px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
