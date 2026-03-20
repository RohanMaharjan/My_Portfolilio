import React from "react";


//component declaration
const Navbar = () => {
    return(
        <div>
            <h1>My Portfolio</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
    );
};

export default Navbar;