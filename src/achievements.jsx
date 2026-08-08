import React, { useState } from "react";
import "./achievements.css";
import hult from "./assets/achievements/hult.jpg";
import aws from "./assets/achievements/aws.jpg";
import lumivya from "./assets/achievements/lumivya.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faAward } from "@fortawesome/free-solid-svg-icons";

const Achievements = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const certificates = [
    { id: 1, src: hult, caption: "Hult Prize at KhEC" },
    { id: 2, src: aws, caption: "AWS Fundamentals Workshop" },
    { id: 3, src: lumivya, caption: "Lumivya Workshop" },
  ];

  return (
    <section className="achievements-container section section-alt" id="achievements">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">Recognition</span>
          <h2 className="section-title">Achievements</h2>
          <p className="section-sub">Certifications and milestones along the way.</p>
        </div>

        <div className="achievements-grid">
          {certificates.map((cert, index) => (
            <div
              className={`achievements-item reveal reveal-delay-${index + 1}`}
              onClick={() => setZoomedImage(cert.src)}
              key={cert.id}
            >
              <div className="achievements-img-wrap">
                <img src={cert.src} alt={cert.caption} />
                <div className="achievements-overlay">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </div>
              <div className="achievements-info">
                <FontAwesomeIcon icon={faAward} className="achievements-icon" />
                <p>{cert.caption}</p>
              </div>
            </div>
          ))}
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

export default Achievements;