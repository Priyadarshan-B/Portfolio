import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import "./App.css";
import AOS from "aos";
import CustomCursor from "./components/cursor/cursor";
import CustomNavbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Project from "./pages/projects/project";
import Contact from "./pages/contact/contact";
import Skill from "./pages/skill/skill";
import Background from "./components/background/background";
import ProjectsPage from "./pages/projects/projectsPage";
import "vanta/dist/vanta.topology.min";
import "./components/loader.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });

    const timer = setTimeout(() => {
      setIsLoaded(true);
    },1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {isLoaded ? (
        <>
          <div className="cursor">
            <CustomCursor />
          </div>

          {location.pathname !== "/project" && <CustomNavbar />}

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div id="home" className="section pt-32 h-screen flex items-center justify-center">
                    <Home />
                  </div>

                  <div id="about" className="section pt-24 flex items-center justify-center">
                    <About />
                  </div>

                  <div id="skill" className="section pt-16 flex items-center justify-center">
                    <Skill />
                  </div>

                  <div id="project" className="section pt-16 flex items-center justify-center">
                    <Project />
                  </div>

                  <div id="contact" className="section pt-16 pb-1 flex items-center justify-center">
                    <Contact />
                  </div>
                </>
              }
            />
            <Route path="/project" element={<ProjectsPage />} />
          </Routes>
        </>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <div className="loader"></div>
        </div>
      )}
      <Background />
    </div>
  );
};

const AppWrap = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrap;
