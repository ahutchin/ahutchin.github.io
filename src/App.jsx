import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import About from "./pages/about";
import More from "./pages/more";
import Layout from "./Layout";
import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/more" element={<More />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
