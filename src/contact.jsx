import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./contact.css"

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target[0].value,
    email: e.target[1].value,
    message: e.target[2].value,
  };

  try {
    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("Error sending message.");
  }
};

const Contact = () => {
    return(
        <div className="contact-container" id="contact">
            <h1>Contact Me</h1>
            <div className="contact-left">
                <h2>Get In Touch</h2>
                <p>Feel free to get in touch with me if you have any questions or comments. <br />Thrilled to begin our professional journey together!</p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faPhone} /><strong>Phone:</strong>+977-9742875914
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} /><strong>Email:</strong>rohanmhj9@gmail.com
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /><strong>Location:</strong>Harisiddhi-28, Lalitpur
                    </li>
                    <li>
                        <a href="https://github.com/RohanMaharjan" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://linkedin.com/in/rohan-maharjan-09404827" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://instagram.com/rohan-mh" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="contact-right">
                <h2>Message Me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Name" required />
                    <input type="email" placeholder="Enter Email" required />
                    <textarea placeholder="Write Message" rows='5' required ></textarea>
                    <button type="submit">SEND</button>
                </form>
            </div>

        </div>
    )
}

export default Contact;