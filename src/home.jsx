import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const name = "Rohan Maharjan";

  return (
    <header className="home-container" id="home">
      <div className="home-blob blob-a"></div>
      <div className="home-blob blob-b"></div>
      <div className="home-grid"></div>

      <div className="home-content container">
        <p className="hero-greeting reveal">Hi there, I'm</p>

        <h1 className="hero-name reveal reveal-delay-1">
          {name.split("").map((char, index) => (
            <span
              key={index}
              className="hero-char"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <h2 className="hero-role reveal reveal-delay-2">
          <span className="gradient-text">Software Engineer</span> &amp; Full-Stack Developer
        </h2>

        <p className="hero-desc reveal reveal-delay-3">
          I build clean, scalable web applications — from crisp front-end
          interfaces to robust back-end systems. Currently exploring new
          ideas at the intersection of design and engineering.
        </p>

        <div className="hero-actions reveal reveal-delay-4">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <Link to="/resume" className="btn btn-outline">
            <FontAwesomeIcon icon={faFileLines} /> View Resume
          </Link>
        </div>

        <div className="hero-socials reveal reveal-delay-4">
          <a href="https://github.com/RohanMaharjan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/rohan-maharjan-09404827" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/rohan_mhj/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <FontAwesomeIcon icon={faArrowDown} />
      </a>
    </header>
  );
};

export default Home;