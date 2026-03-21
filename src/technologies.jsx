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
                    <a href="#python">
                        <img src={pythonLogo} alt="Python" />
                    </a>
                </div>
                    
                <div className="tech-item">
                    <a href="#django">
                        <img src={djangoLogo} alt="Django" />
                    </a>
                </div>
                    
                <div className="tech-item">
                    <a href="#react">
                        <img src={reactLogo} alt="React" />
                    </a>                  
                </div>
                    
                <div className="tech-item">
                    <a href="#node">
                        <img src={nodeLogo} alt="Node" />
                    </a>
                </div>
                    
                <div className="tech-item">
                    <a href="github">
                        <img src={gitLogo} alt="Git" />
                    </a>
                </div>
                    
                <div className="tech-item">
                    <a href="#c">
                        <img src={cLogo} alt="C" />
                    </a>
                </div>
                    
                <div className="tech-item">
                    <a href="cplusplus">
                        <img src={cplusLogo} alt="C++" />
                    </a>
                </div>
                    
                <div className="tech-item">
                    <a href="#postgres">
                        <img src={postgresLogo} alt="PostgreSQL" />
                    </a>
                </div>
                    
                <div className="tech-item">
                    <a href="#mongo">
                        <img src={mongoLogo} alt="MongoDB" />
                    </a>

                </div>
            </div>
        </div>

    )
}

export default Technologies;