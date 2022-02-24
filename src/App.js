import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { destinations, crew, technology } from "./data.js";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination"
          element={<Destination destinations={destinations} />}
        />
        <Route path="/crew" element={<Crew crew={crew} />} />
        <Route
          path="/technology"
          element={<Technology technology={technology} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
