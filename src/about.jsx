import React from "react";
import profilePic from "./profile.jpg"//image file
import "./about.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return(
        <div className="about" id="about">
            <div className="about-left">
                <img src={profilePic} alt="Profile" className="profile-pic" />
                    
                    <div className="personal-info">
                        <h2>Rohan Maharjan</h2>
                        <p><strong>Phone:</strong>+977-9742875914</p>
                        <p><strong>Email:</strong>rohanmhj9@gmail.com</p>
                        <p><strong>Location:</strong>Lalitpur-28, Nepal</p>
                    </div>

                    <div className="skill-info">
                        <h3>Skills</h3>
                        <ul>
                            <li>React.js</li>
                            <li>JavaScript</li>
                            <li>HTML & CSS</li>
                            <li>Python</li>
                            <li>Django</li>
                        </ul>
                    </div>

            </div>
            
            <div className="about-right">
                <h2>About Me</h2>
                <p>
                    I am a passionate software engineer with experience in building web
                    applications using modern technologies. I enjoy solving complex problems,
                    learning new tools, and creating projects that make an impact.
                    My focus is on developing scalable and efficient solutions while continuously
                    improving my skills.
                </p>
                {/* Education heading with book icon */}
                <h2><FontAwesomeIcon icon={faBookOpen} /> Education</h2>
                <ul style={{listStyleType: 'square', fontSize: '1.25rem'}}>
                    <li style={{fontWeight: 'bold'}}>2021-Present</li>
                        <div className="paragraph">
                            <p>Bachelor's of Computer Engineering<br/>Khwopa Engineering College <br />Libali-08, Bhaktapur</p>
                        </div>
                    <li style={{fontWeight: 'bold'}}>2019-2021</li>
                        <div className="paragraph">
                            <p>Higher Studies in +2 Science<br/>St. Xavier's School <br />Jawalakhel, Lalitpur</p>
                        </div>
                    <li style={{fontWeight: 'bold'}}>2009-2019</li>
                        <div className="paragraph">
                            <p>Secondary Level (SEE)<br/>Prerana Vidhyasram School <br />Harisiddhi, Lalitpur</p>
                        </div>
                </ul>
            </div>
        </div>

        
    )
}

export default About;