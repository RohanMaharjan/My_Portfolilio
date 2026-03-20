import React from "react";
import "./navbar.css";

//component declaration
const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <h1>My Portfolio</h1>
            </div>

            <div className="navbar-right">
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#achievements">Achievements</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
            </div>
        </nav>
    );
};

export default Navbar;