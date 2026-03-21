import React from "react";

import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Technologies from "./technologies";
import Contact from "./contact"
import Footer from "./footer"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}



export default App;
