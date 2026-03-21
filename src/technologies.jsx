import React from "react";
import "./technologies.css";
import { Link } from "react-router-dom";

import pythonLogo from "./assets/Python_logo.jpeg";
import djangoLogo from "./assets/django_logo.png";
import reactLogo from "./assets/React_logo.png";
import nodeLogo from "./assets/node_logo.png";
import gitLogo from "./assets/git_logo.png";
import cLogo from "./assets/c_logo.png";
import cplusLogo from "./assets/c++_logo.png";
import postgresLogo from "./assets/postgres_logo.png";
import mongoLogo from "./assets/mongo_logo.png";

const Technologies = () => {
    return (
        <div className="tech-container" id="tech">
            <h2>Technologies</h2>
            <div className="tech-grid">
                <div className="tech-item">
                    <Link to="/python">
                        <img src={pythonLogo} alt="Python" />
                    </Link>
                </div>

                <div className="tech-item">
                    <Link to="/django">
                        <img src={djangoLogo} alt="Django" />
                    </Link>
                </div>

                <div className="tech-item">
                    <Link to="/react">
                        <img src={reactLogo} alt="React" />
                    </Link>
                </div>

                <div className="tech-item">
                    <Link to="/node">
                        <img src={nodeLogo} alt="Node" />
                    </Link>
                </div>

                <div className="tech-item">
                    <Link to="/git">
                        <img src={gitLogo} alt="Git" />
                    </Link>
                </div>

                <div className="tech-item">
                    <Link to="/c">
                        <img src={cLogo} alt="C" />
                    </Link>
                </div>

                <div className="tech-item">
                    <Link to="/cplusplus">
                        <img src={cplusLogo} alt="C++" />
                    </Link>
                </div>

                <div className="tech-item">
                    <Link to="/postgres">
                        <img src={postgresLogo} alt="PostgreSQL" />
                    </Link>
                </div>

                <div className="tech-item">
                    <Link to="/mongo">
                        <img src={mongoLogo} alt="MongoDB" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
