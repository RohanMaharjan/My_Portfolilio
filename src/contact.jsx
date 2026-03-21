import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return(
        <div id="contact">
            <h1>Contact Me</h1>
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
            </ul>
            <div>
                <h2>Message Me</h2>
                <form>
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