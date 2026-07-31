import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const SECTION_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#tech", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled || !onHome ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {onHome ? (
          <a href="#home" className="navbar-brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">RM</span>
            <span className="brand-name">Rohan Maharjan</span>
          </a>
        ) : (
          <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faArrowLeft} className="brand-back-icon" />
            <span className="brand-mark">RM</span>
            <span className="brand-name">Rohan Maharjan</span>
          </Link>
        )}

        <button
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            {SECTION_LINKS.map((link) =>
              onHome ? (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <Link to={`/${link.href}`} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <Link
                to="/resume"
                className={location.pathname === "/resume" ? "nav-link-active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>
          {onHome ? (
            <a
              href="#contact"
              className="btn btn-primary nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Let's Talk
            </a>
          ) : (
            <Link
              to="/#contact"
              className="btn btn-primary nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Let's Talk
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;