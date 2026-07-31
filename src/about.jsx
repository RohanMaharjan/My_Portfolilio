import React from "react";
import profilePic from "./profile.jpg";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const education = [
  {
    range: "2021 — Present",
    title: "Bachelor's of Computer Engineering",
    place: "Khwopa Engineering College",
    location: "Libali-08, Bhaktapur",
  },
  {
    range: "2019 — 2021",
    title: "Higher Studies in +2 Science",
    place: "St. Xavier's School",
    location: "Jawalakhel, Lalitpur",
  },
  {
    range: "2009 — 2019",
    title: "Secondary Level (SEE)",
    place: "Prerana Vidhyasram School",
    location: "Harisiddhi, Lalitpur",
  },
];

const skills = ["React.js", "JavaScript", "HTML & CSS", "Python", "Django"];

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-left reveal reveal-delay-1">
            <div className="profile-card glass-card">
              <div className="profile-pic-wrap">
                <img src={profilePic} alt="Rohan Maharjan" className="profile-pic" />
              </div>
              <h3>Rohan Maharjan</h3>
              <p className="profile-role">Software Engineer</p>

              <ul className="personal-info">
                <li><FontAwesomeIcon icon={faPhone} /> +977-9742875914</li>
                <li><FontAwesomeIcon icon={faEnvelope} /> rohanmhj9@gmail.com</li>
                <li><FontAwesomeIcon icon={faLocationDot} /> Lalitpur-28, Nepal</li>
              </ul>

              <div className="skill-info">
                <h4>Skills</h4>
                <div className="skill-pills">
                  {skills.map((skill) => (
                    <span className="pill" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="about-right reveal reveal-delay-2">
            <p className="about-intro">
              I am a passionate software engineer with experience in building web
              applications using modern technologies. I enjoy solving complex problems,
              learning new tools, and creating projects that make an impact. My focus
              is on developing scalable and efficient solutions while continuously
              improving my skills.
            </p>

            <h3 className="timeline-heading">
              <FontAwesomeIcon icon={faBookOpen} /> Education
            </h3>

            <div className="timeline">
              {education.map((item, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot"></div>
                  <span className="timeline-range">{item.range}</span>
                  <h4>{item.title}</h4>
                  <p>{item.place}<br />{item.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;