import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Main } from "./pages/Main";
import { Welcome } from "./pages/Welcome";
import "./App.css";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/experience" element={} />
        <Route path="/projects" element={} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/blog" element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
