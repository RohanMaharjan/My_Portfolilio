import React, { useState, useEffect } from "react";
import vegScan from "./assets/vegscan/vegscan.png";
import honeyPot from "./assets/honeypot/Honey.png";
import dictionary from "./assets/dictionary/dictionary.png";
import gymPic from "./assets/gym/gym.png";
import "./project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faCircleCheck,
  faSpinner,
  faChevronLeft,
  faChevronRight,
  faXmark,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = () => {
  const projects = [
    {
      id: 1,
      images: [vegScan],
      caption: "Vegscan",
      desc: "Vegetable freshness detection",
      github: "https://github.com/RohanMaharjan",
      live: "",
    },
    {
      id: 2,
      images: [honeyPot],
      caption: "HoneyPot System",
      desc: "Network intrusion monitoring",
      github: "https://github.com/RohanMaharjan",
      live: "",
    },
    {
      id: 3,
      images: [dictionary],
      caption: "English Dictionary",
      desc: "Word lookup & definitions app",
      github: "https://github.com/RohanMaharjan",
      live: "",
    },
    {
      id: 4,
      images: [gymPic],
      caption: "Gym Management System",
      desc: "Member & schedule management",
      github: "https://github.com/RohanMaharjan",
      live: "",
    },
    {
      id: 5,
      images: [gymPic],
      caption: "EmailAIAssistant",
      desc: "Member & schedule management",
      github: "https://github.com/RohanMaharjan",
      live: "https://email-ai-assistant-cyan.vercel.app/",
    },
    {
      id: 6,
      images: [gymPic],
      caption: "ClothSA",
      desc: "Member & schedule management",
      github: "https://github.com/RohanMaharjan",
      live: "https://cloth-sa-5jfo.vercel.app/",
    },
  ];

  const minorProjects = [
    "Student Management System",
    "Attendance Management System",
    "Online Cycle Store",
    "Online Quiz System",
  ];

  const ongoingProjects = ["To-Do List"];

  const [activeId, setActiveId] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const activeProject =
    projects.find((p) => p.id === activeId) || null;

  const openGallery = (id) => {
    setActiveId(id);
    setImageIndex(0);
  };

  const closeGallery = () => setActiveId(null);

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    if (!activeProject) return;

    setImageIndex(
      (i) => (i + 1) % activeProject.images.length
    );
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    if (!activeProject) return;

    setImageIndex(
      (i) =>
        (i - 1 + activeProject.images.length) %
        activeProject.images.length
    );
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!activeProject) return;

      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", onKeyDown);

    return () =>
      window.removeEventListener("keydown", onKeyDown);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProject]);

  return (
    <section className="project-container section" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Major Projects</h2>
          <p className="section-sub">
            A selection of projects I've designed, built and shipped.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className={`project-item reveal reveal-delay-${
                (index % 4) + 1
              }`}
              onClick={() => openGallery(proj.id)}
            >
              <div className="project-img-wrap">
                <img
                  src={proj.images[0]}
                  alt={proj.caption}
                />

                <div className="project-overlay">
                  <FontAwesomeIcon icon={faExpand} />

                  {proj.images.length > 1 && (
                    <span className="project-image-count">
                      {proj.images.length} photos
                    </span>
                  )}
                </div>
              </div>

              <div className="project-info">
                <div className="project-info-head">
                  <h3>{proj.caption}</h3>

                  <div
                    className="project-links"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${proj.caption} on GitHub`}
                        title="View code on GitHub"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    )}

                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${proj.caption} live site`}
                        title="View live site"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                        />
                      </a>
                    )}
                  </div>
                </div>

                <p>{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="project-lists reveal">
          <div className="project-list-card glass-card">
            <h3>
              <FontAwesomeIcon icon={faCircleCheck} /> Minor Projects
            </h3>

            <ul>
              {minorProjects.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="project-list-card glass-card">
            <h3>
              <FontAwesomeIcon icon={faSpinner} /> Ongoing Project
            </h3>

            <ul>
              {ongoingProjects.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {activeProject && (
        <div
          className="overlay"
          onClick={closeGallery}
        >
          <div
            className="gallery-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gallery-topbar">
              <span className="gallery-title">
                {activeProject.caption}

                {activeProject.images.length > 1 && (
                  <span className="gallery-count">
                    {imageIndex + 1} /{" "}
                    {activeProject.images.length}
                  </span>
                )}
              </span>

              <button
                className="gallery-close"
                onClick={closeGallery}
                aria-label="Close gallery"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div className="gallery-stage">
              {activeProject.images.length > 1 && (
                <button
                  className="gallery-nav gallery-prev"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                  />
                </button>
              )}

              <img
                src={
                  activeProject.images[imageIndex]
                }
                alt={`${activeProject.caption} screenshot ${
                  imageIndex + 1
                }`}
                className="gallery-image"
              />

              {activeProject.images.length > 1 && (
                <button
                  className="gallery-nav gallery-next"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                  />
                </button>
              )}
            </div>

            {activeProject.images.length > 1 && (
              <div className="gallery-dots">
                {activeProject.images.map((_, i) => (
                  <button
                    key={i}
                    className={`gallery-dot ${
                      i === imageIndex
                        ? "active"
                        : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setImageIndex(i);
                    }}
                    aria-label={`Go to image ${
                      i + 1
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;