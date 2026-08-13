import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Vault from "./pages/Vault";

function Placeholder({ title }) {
  return (
    <main className="page-test">
      {title}
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="site">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/vault"
            element={<Vault />}
          />

          <Route path="/about" element={<About />} />
          


          <Route
            path="/education"
            element={<Placeholder title="EDUCATION PAGE" />}
          />

          <Route
            path="/skills"
            element={<Placeholder title="SKILLS PAGE" />}
          />

          <Route
            path="/projects"
            element={<Placeholder title="PROJECTS PAGE" />}
          />

          <Route
            path="/experience"
            element={<Placeholder title="EXPERIENCE PAGE" />}
          />

          <Route
            path="/achievements"
            element={<Placeholder title="ACHIEVEMENTS PAGE" />}
          />

          <Route
            path="/activities"
            element={<Placeholder title="ACTIVITIES PAGE" />}
          />

          <Route
            path="/resume"
            element={<Placeholder title="RESUME PAGE" />}
          />

          <Route
            path="/contact"
            element={<Placeholder title="CONTACT PAGE" />}
          />

        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;