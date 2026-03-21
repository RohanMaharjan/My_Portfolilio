import React from "react";
import "./footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <p>© {new Date().getFullYear()} Rohan Maharjan. All rights reserved.</p>
        </div>
    )
}

export default Footer;