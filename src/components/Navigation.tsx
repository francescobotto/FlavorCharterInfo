import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Preliminary Results", path: "/preliminary-results" },
  { name: "About", path: "/about" },
  { name: "Participate", path: "/participate" },
];

export default function Navigation() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 px-8 py-4 mb-6 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo_adaptive.png" alt="Logo" className="h-10 mr-2" />
            <span className="text-xl text-gray-800 leading-[40px]">Flavor Charter</span>
          </Link>

          <div className="hidden md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-700 hover:text-gray-900 transition p-2 
                  ${location.pathname === link.path ? "font-bold" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button className="md:hidden text-gray-800 focus:outline-none" onClick={() => setOpen(!open)}>
            {open ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-600 ease-in-out overflow-hidden ${open ? "max-h-60" : "max-h-0"} mt-2`}>
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`text-gray-700 p-2 rounded transition
                ${location.pathname === link.path ? "font-bold" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
