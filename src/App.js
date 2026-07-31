import React, { useEffect } from "react";

import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Technologies from "./technologies";
import Contact from "./contact";
import Project from "./project";
import Footer from "./footer";
import Achievements from "./achievements";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    const targets = document.querySelectorAll(".reveal");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Project />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;