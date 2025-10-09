import { FaApple, FaAndroid } from "react-icons/fa";

function Participate() {
  return (
    <div className="page" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1>Participate in the Study</h1>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "2rem" }}>
        Join us in helping build a scientific reference for how taste is
        perceived in healthy individuals. It only takes a few minutes and your
        participation is anonymous and secure.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <h3>How It Works</h3>
        <p
          style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "0.5rem" }}
        >
          After downloading the app, you will be guided through a simple
          process:
        </p>
        <ol
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            paddingLeft: "1rem",
          }}
        >
          <li>Open the app and sign the consent form</li>
          <li>Fill in your demographic information</li>
          <li>Choose a food, taste it, and rate it</li>
          <li>Repeat for more foods</li>
        </ol>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Ready to Join?</h3>
        <p
          style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "0.5rem" }}
        >
          To join the study, download the app and start rating today! The app is
          available on the <strong>App Store for iOS users</strong>. For{" "}
          <strong>Android users</strong>, the app is currently in closed
          testing, request access form the following the link below.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginTop: "1rem",
            justifyContent: "flex-start",
          }}
        >
          <a
            href="https://apps.apple.com/us/app/flavor-charter/id6745230451"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.6rem 1.2rem",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaApple style={{ marginRight: "8px" }} />
            Download for iOS
          </a>
          <a
            href="mailto:fbott1@uic.edu"
            style={{
              padding: "0.6rem 1.2rem",
              backgroundColor: "#A4C639",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaAndroid style={{ marginRight: "8px" }} />
            Request Android Access
          </a>
        </div>
      </div>
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            flex: "1 1 250px",
            maxWidth: "250px",
          }}
        >
          <h4 style={{ marginBottom: "0.8rem" }}>Who can participate?</h4>
          <p style={{ margin: 0, fontSize: "1.1rem" }}>
            Only healthy individuals aged 18+ with no taste alterations.
          </p>
        </div>

        <div
          style={{
            flex: "1 1 250px",
            maxWidth: "250px",
          }}
        >
          <h4 style={{ marginBottom: "0.8rem" }}>How your data is used</h4>
          <p style={{ margin: 0, fontSize: "1.1rem" }}>
            Data is anonymized once collected and used for research only in
            aggregate form.
          </p>
        </div>

        <div
          style={{
            flex: "1 1 250px",
            maxWidth: "250px",
          }}
        >
          <h4 style={{ marginBottom: "0.8rem" }}>Any questions?</h4>
          <p style={{ margin: 0, fontSize: "1.1rem" }}>
            Contact <a href="mailto:fbott1@uic.edu">fbott1@uic.edu</a> if you
            have any questions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Participate;
