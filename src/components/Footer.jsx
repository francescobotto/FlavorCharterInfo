import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        marginTop: "4rem",
        textAlign: "center",
        fontSize: "0.9rem",
        backgroundColor: "#f8f9fa",
        padding: "2rem 1rem",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          marginBottom: "0.5rem",
        }}
      >
        <Link to="/about" style={{ color: "#212529" }}>
          About
        </Link>
        <Link to="/participate" style={{ color: "#212529" }}>
          Participate
        </Link>
        <a href="mailto:fbott1@uic.edu" style={{ color: "#212529" }}>
          Contact
        </a>
      </nav>
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <p style={{ margin: "0.2rem 0", color: "#212529" }}>
          © {new Date().getFullYear()} Flavor Charter
        </p>
        <p
          style={{ fontSize: "0.8rem", marginTop: "0.3rem", color: "#6c757d" }}
        >
          A project by the University of Illinois Chicago.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
