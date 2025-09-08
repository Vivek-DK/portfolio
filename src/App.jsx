import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Pages/Home/Home'
import About from "./Pages/About/About";
import Project from './Pages/Projects/Project'
import Skill from "./Pages/Skills/Skills";
import Experience from './Pages/Experience/Experience'
import Contact from './Pages/Contact/Contact'
const App = () => {
  return(
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;