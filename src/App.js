import React from "react";
import About from "./About";
import Contact from "./Contact";
import Course from "./Course";
import Home from "./Home";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="course" element={<Course />} />
        <Route path="contact" element={<Contact />} />
        <Route path="NotFound" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;