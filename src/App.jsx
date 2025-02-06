import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "./App.css";
import AOS from "aos";
import CustomCursor from "./components/cursor/cursor";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Project from "./pages/projects/project";
import Contact from "./pages/contact/contact";
import Skill from "./pages/skill/skill";
import './components/loader.css'

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app-container`}>
      {isLoaded ? (
        <>
          <div className="cursor">
            <CustomCursor />
          </div>
          <Navbar />
          <div
            id="home"
            className="section pt-32 h-screen flex items-center justify-center"
            style={{ backgroundColor: "#effbf8" }}
          >
            <Home />
          </div>

          <div
            id="about"
            className="section pt-24 bg-gray-200 flex items-center justify-center"
            style={{ backgroundColor: "#effbf8" }}
          >
            <About />
          </div>

          <div
            id="skill"
            className="section py-16 bg-gray-300 flex items-center justify-center"
            style={{ backgroundColor: "#effbf8" }}
          >
            <Skill />
          </div>

          <div
            id="project"
            className="section py-16 bg-gray-300 flex items-center justify-center"
            style={{ backgroundColor: "#effbf8" }}
          >
            <Project />
          </div>

          <div
            id="contact"
            className="section pt-16 pb-1 bg-gray-300 flex items-center justify-center"
            style={{ backgroundColor: "#effbf8" }}
          >
            <Contact />
          </div>
        </>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <div className="loader">
      {/* Loader content */}
    </div>
  </div>
      )}
    </div>
  );
};

export default App;
