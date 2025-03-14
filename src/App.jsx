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
import Background from "./components/background/background";
import "vanta/dist/vanta.topology.min";
import "vanta/dist/vanta.topology.min";
import "./components/loader.css";

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
            className="section pt-16 flex h-screen items-center justify-center"
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
        <ul className="circles">
          <li>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              className="h-10 w-10"
            />
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              className="w-12 h-12"
              alt="CSS3"
            />
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              className="w-10 h-10"
              alt="JavaScript"
            />
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              className="w-10 h-10"
              alt="React.js"
            />
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
              className="w-10 h-10"
              alt="Node.js"
            />
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
              className="w-10 h-10"
              alt="Express.js"
            />
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
              className="w-10 h-10"
              alt="MongoDB"
            />
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
              className="w-12 h-12"
              alt="MySQL"
            />
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
              className="w-10 h-10"
              alt="Tailwind CSS"
            />
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              className="w-10 h-10"
              alt="Redux"
            />
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
              className="w-10 h-10"
              alt="Golang"
            />
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg"
              className="w-10 h-10"
              alt="MUI"
            />
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
              className="w-10 h-10"
              alt="Git"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
