import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 text-center text-sm bg-gray-100 py-8 px-4">
      <nav className="flex justify-center gap-6 mb-2">
        <Link to="/about" className="text-gray-900 underline">
          About
        </Link>

        <Link to="/participate" className="text-gray-900 underline">
          Participate
        </Link>

        <a href="mailto:fbott1@uic.edu" className="text-gray-900 underline">
          Contact
        </a>
      </nav>

      <div className="text-center mt-6">
        <p className="text-gray-900">{`© ${new Date().getFullYear()} Flavor Charter`}</p>
        <p className="text-xs text-gray-600 mt-1">
          A project by the University of Illinois Chicago.
        </p>
      </div>
    </footer>
  );
}
