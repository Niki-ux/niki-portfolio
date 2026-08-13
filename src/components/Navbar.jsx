import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Lock } from "lucide-react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navigation = [
    ["About", "/about"],
    ["Education", "/education"],
    ["Skills", "/skills"],
    ["Projects", "/projects"],
    ["Experience", "/experience"],
    ["Achievements", "/achievements"],
    ["Activities", "/activities"],
    ["Resume", "/resume"],
  ];

  return (
    <header className="navbar">

      <div className="nav-inner">

        <Link
          to="/"
          className={`home-nav-link ${
            location.pathname === "/" ? "active-nav" : ""
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M3 10.8L12 3l9 7.8V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.8z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
          </svg>

          <span>Home</span>
        </Link>

        <nav className="desktop-nav">

          {navigation.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className={location.pathname === path ? "active-nav" : ""}
            >
              {label}
            </Link>
          ))}

        </nav>

        {/* 🔐 Login / Register */}
        <Link
            to="/vault"
            className={`talk-button vault-button ${
              location.pathname === "/vault" ? "active-nav" : ""
            }`}
          >
            <Lock size={15} />
            <span>Login / Register</span>
          </Link>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

      </div>

      {menuOpen && (
        <nav className="mobile-nav">

          {navigation.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/vault"
            onClick={() => setMenuOpen(false)}
          >
            🔒 Login / Register
          </Link>

        </nav>
      )}

    </header>
  );
}

export default Navbar;