import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Technologies from "./technologies";
import PythonPage from "./python";

function MainPage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Technologies />
    </>
  );
}

function App() {
  return(
    <div>
      <Router>

        <Routes>
          {/* main portfolio page(scrolling) */}
          <Route path="/" element={<MainPage />} />

          <Route path="/python" element={<PythonPage />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
