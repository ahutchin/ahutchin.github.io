import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
