import React from "react";
import "./technologies.css";

import pythonLogo from "./assets/technologies/Python_logo.jpeg";
import djangoLogo from "./assets/technologies/django_logo.png";
import reactLogo from "./assets/technologies/React_logo.png";
import nodeLogo from "./assets/technologies/node_logo.png";
import gitLogo from "./assets/technologies/git_logo.png";
import cLogo from "./assets/technologies/c_logo.png";
import cplusLogo from "./assets/technologies/c++_logo.png";
import postgresLogo from "./assets/technologies/postgres_logo.png";
import mongoLogo from "./assets/technologies/mongo_logo.png";

const techs = [
  { src: pythonLogo, name: "Python" },
  { src: djangoLogo, name: "Django" },
  { src: reactLogo, name: "React" },
  { src: nodeLogo, name: "Node.js" },
  { src: gitLogo, name: "Git" },
  { src: cLogo, name: "C" },
  { src: cplusLogo, name: "C++" },
  { src: postgresLogo, name: "PostgreSQL" },
  { src: mongoLogo, name: "MongoDB" },
];

const Technologies = () => {
  return (
    <section className="tech-container section section-alt" id="tech">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">What I Work With</span>
          <h2 className="section-title">Technologies</h2>
          <p className="section-sub">
            A toolkit I rely on to design, build, and ship reliable software.
          </p>
        </div>

        <div className="tech-grid">
          {techs.map((tech, i) => (
            <div
              className={`tech-item glass-card reveal reveal-delay-${(i % 4) + 1}`}
              key={tech.name}
            >
              <img src={tech.src} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;