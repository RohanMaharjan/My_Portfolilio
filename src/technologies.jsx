import React from "react";

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
        <div>
            <h2>Technologies</h2>
            <img src={pythonLogo} alt="Python" />
            <img src={djangoLogo} alt="Django" />
            <img src={reactLogo} alt="React" />
            <img src={nodeLogo} alt="Node" />
            <img src={gitLogo} alt="Git" />
            <img src={cLogo} alt="C" />
            <img src={cplusLogo} alt="C++" />
            <img src={postgresLogo} alt="PostgreSQL" />
            <img src={mongoLogo} alt="MongoDB" />
        </div>

    )
}

export default Technologies;