import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./navbar";
import MainSections from "./mainSections";
import ResumePage from "./resumePage";

function App() {
  const location = useLocation();

  // Scroll to top whenever the route itself changes (not on hash-only changes)
  React.useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainSections />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  );
}

export default App;