import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;