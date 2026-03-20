import React from "react";
import profilePic from "./profile.jpg"//image file

const About = () => {
    return(
        <div>
            <img src={profilePic} alt="Profile" />
            <h2>Rohan Maharjan</h2>
            <p><strong>Phone:</strong>+977-9742875914</p>
            <p><strong>Email:</strong>rohanmhj9@gmail.com</p>
            <p><strong>Location:</strong>Lalitpur-28, Nepal</p>
            <h3>Skills</h3>
            <ul>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>Python</li>
                <li>Django</li>
            </ul>
        </div>
    )
}

export default About;