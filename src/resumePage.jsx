import React from "react";
import "./resumePage.css";

const ResumePage = () => {
  return (
    <div className="resume-page" id="resume-page">
      <iframe
        src="/resume.pdf"
        title="Resume - Rohan Maharjan"
        className="resume-page-iframe"
      />
    </div>
  );
};

export default ResumePage;