import React, { useEffect, useState } from "react";
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
// import Background from "./components/background/background";
import "vanta/dist/vanta.topology.min";
import "vanta/dist/vanta.topology.min";
import "./components/loader.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {/* <Background /> */}
      {isLoaded ? (
        <>
          <div className="cursor">
            <CustomCursor />
          </div>
          <CustomNavbar />
          <div
            id="home"
            className="section pt-32 h-screen flex items-center justify-center"
          >
            <Home />
          </div>

          <div
            id="about"
            className="section pt-24  flex items-center justify-center"
          >
            <About />
          </div>

          <div
            id="skill"
            className="section pt-16 flex  items-center justify-center"
          >
            <Skill />
          </div>

          <div
            id="project"
            className="section pt-16  flex items-center justify-center"
          >
            <Project />
          </div>

          <div
            id="contact"
            className="section pt-16 pb-1 flex items-center justify-center"
          >
            <Contact />
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className="loader"></div>
        </div>
      )}
      <div className="area bg-[linear-gradient(140deg,#eceff7,#bccada,#c1cdde)] dark:bg-[linear-gradient(140deg,theme('colors.darkBackground'),#282c34,#363b49)]">
        <ul className="circles ">
          <li className="bg-circlelight dark:bg-circledark"></li>
          <li className="bg-circlelight dark:bg-circledark"></li>
          <li className="bg-circlelight dark:bg-circledark"></li>
          <li className="bg-circlelight dark:bg-circledark"></li>
          <li className="bg-circlelight dark:bg-circledark"></li>
          <li className="bg-circlelight dark:bg-circledark"></li>
          <li className="bg-circlelight dark:bg-circledark"></li>
        </ul>
      </div>
    </div>
  );
};

export default App;
