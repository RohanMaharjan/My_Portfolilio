import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./contact.css";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_o605ykl", // Service ID
        "template_oxxlhyj", // Template ID
        e.target,
        "tb_rfEmlH-Btnc4_8" // Public Key
      )
      .then(() => {
        setStatus("sent");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section className="contact-container section" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-sub">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-left glass-card reveal reveal-delay-1">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <span className="contact-icon"><FontAwesomeIcon icon={faPhone} /></span>
                <div>
                  <strong>Phone</strong>
                  <p>+977-9742875914</p>
                </div>
              </li>
              <li>
                <span className="contact-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                <div>
                  <strong>Email</strong>
                  <p>rohanmhj9@gmail.com</p>
                </div>
              </li>
              <li>
                <span className="contact-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                <div>
                  <strong>Location</strong>
                  <p>Harisiddhi-28, Lalitpur</p>
                </div>
              </li>
            </ul>

            <div className="social-icons">
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

          <div className="contact-right glass-card reveal reveal-delay-2">
            <h3>Send a Message</h3>
            <form onSubmit={sendEmail}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <textarea name="message" placeholder="Write your message..." rows="5" required></textarea>
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} /> Send Message
                  </>
                )}
              </button>
              {status === "sent" && <p className="form-status success">Message sent successfully!</p>}
              {status === "error" && <p className="form-status error">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;