import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Technologies from "./technologies";
import Contact from "./contact";
import Project from "./project";
import Footer from "./footer";
import Achievements from "./achievements";

const MainSections = () => {
  const location = useLocation();

  // Scroll-reveal for every ".reveal" element on this page.
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

  // If we've arrived here with a #hash (e.g. navigated from the navbar
  // while on the /resume page), scroll to that section once it's rendered.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // slight delay so layout/animations settle first
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Home />
      <About />
      <Technologies />
      <Project />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
};

export default MainSections;