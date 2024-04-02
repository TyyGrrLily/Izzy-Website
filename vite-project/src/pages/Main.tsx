import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import { About } from "./About";

export const Main = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};
