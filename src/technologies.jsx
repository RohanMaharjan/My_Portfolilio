import React from "react";
import "./technologies.css"

import pythonLogo from "./assets/Python_logo.jpeg";
import djangoLogo from "./assets/django_logo.png"
import reactLogo from "./assets/React_logo.png";
import nodeLogo from "./assets/node_logo.png";
import gitLogo from "./assets/git_logo.png";
import cLogo from "./assets/c_logo.png";
import cplusLogo from "./assets/c++_logo.png";
import postgresLogo from "./assets/postgres_logo.png";
import mongoLogo from "./assets/mongo_logo.png";

const Technologies = () => {
    return(
        <div className="tech-container" id="tech">
            <h2>Technologies</h2>
            <div className="tech-grid">
                <div className="tech-item">
                    <img src={pythonLogo} alt="Python" />
                </div>
                    
                <div className="tech-item">
                    <img src={djangoLogo} alt="Django" />
                </div>
                    
                <div className="tech-item">
                    <img src={reactLogo} alt="React" />
                </div>
                    
                <div className="tech-item">
                    <img src={nodeLogo} alt="Node" />
                </div>
                    
                <div className="tech-item">
                    <img src={gitLogo} alt="Git" />
                </div>
                    
                <div className="tech-item">
                    <img src={cLogo} alt="C" />
                </div>
                    
                <div className="tech-item">
                    <img src={cplusLogo} alt="C++" />
                </div>
                    
                <div className="tech-item">
                    <img src={postgresLogo} alt="PostgreSQL" />
                </div>
                    
                <div className="tech-item">
                    <img src={mongoLogo} alt="MongoDB" />

                </div>
            </div>
        </div>

    )
}

export default Technologies;