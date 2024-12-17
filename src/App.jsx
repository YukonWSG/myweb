import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar.jsx";
import Body from "./body.jsx";
import About from "./about.jsx";
import Hobbies from "./hobbies.jsx";
import Education from "./education.jsx"; // Import the Education component
import Contact from "./contact.jsx";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is displayed across all pages */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hobbies" element={<Hobbies />} /> {/* Add route for Hobbies */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
