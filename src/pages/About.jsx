function About() {
  return (
    <div className="page" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ margin: 0 }}>About</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "2rem" }}>
        This study is conducted by the Electronic Visualization Laboratory (EVL)
        at the University of Illinois Chicago (UIC), in collaboration with MD
        Anderson Cancer Center. Our multidisciplinary team combines expertise in
        computer science, engineering, and oncology to build tools that can
        collect and visualize taste perception data across multiple dimensions.
      </p>

      <h3 style={{ marginTop: "2rem" }}>Research Team</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          marginTop: "1.51rem",
        }}
      >
        <div>
          <strong>Francesco Botto</strong>
          <br />
          <em>Department of Computer Science</em>
          <br />
          University of Illinois Chicago
          <br />
        </div>
        <div>
          <strong>Guadalupe Canahuate</strong>
          <br />
          <em>Department of Electrical and Computer Engineering</em>
          <br />
          University of Iowa
          <br />
        </div>
        <div>
          <strong>Xinhua Zhang</strong>
          <br />
          <em>Department of Computer Science</em>
          <br />
          University of Illinois Chicago
          <br />
        </div>
        <div>
          <strong>C. David Fuller</strong>
          <br />
          <em>Department of Radiation Oncology</em>
          <br />
          University of Texas MD Anderson Cancer Center
          <br />
        </div>
        <div>
          <strong>G. Elisabeta Marai</strong>
          <br />
          <em>Department of Computer Science</em>
          <br />
          University of Illinois Chicago
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
