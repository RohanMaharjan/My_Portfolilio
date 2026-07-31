import React, { useState } from "react";
import vegScan from "./assets/vegscan.png";
import honeyPot from "./assets/Honey.png";
import dictionary from "./assets/dictionary.png";
import gymPic from "./assets/gym.png";
import "./project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCircleCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const projects = [
    { id: 1, src: vegScan, caption: "Vegscan", desc: "Vegetable freshness detection" },
    { id: 2, src: honeyPot, caption: "HoneyPot System", desc: "Network intrusion monitoring" },
    { id: 3, src: dictionary, caption: "English Dictionary", desc: "Word lookup & definitions app" },
    { id: 4, src: gymPic, caption: "Gym Management System", desc: "Member & schedule management" },
  ];

  const minorProjects = [
    "Student Management System",
    "Attendance Management System",
    "Online Cycle Store",
    "Online Quiz System",
  ];

  const ongoingProjects = ["To-Do List"];

  return (
    <section className="project-container section" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Major Projects</h2>
          <p className="section-sub">A selection of projects I've designed, built and shipped.</p>
        </div>

        <div className="project-grid">
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className={`project-item reveal reveal-delay-${(index % 4) + 1}`}
              onClick={() => setZoomedImage(proj.src)}
            >
              <div className="project-img-wrap">
                <img src={proj.src} alt={proj.caption} />
                <div className="project-overlay">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </div>
              <div className="project-info">
                <h3>{proj.caption}</h3>
                <p>{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="project-lists reveal">
          <div className="project-list-card glass-card">
            <h3><FontAwesomeIcon icon={faCircleCheck} /> Minor Projects</h3>
            <ul>
              {minorProjects.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="project-list-card glass-card">
            <h3><FontAwesomeIcon icon={faSpinner} /> Ongoing Project</h3>
            <ul>
              {ongoingProjects.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {zoomedImage && (
        <div className="overlay" onClick={() => setZoomedImage(null)}>
          <img src={zoomedImage} alt="Zoomed" className="zoomed" />
        </div>
      )}
    </section>
  );
};

export default Project;