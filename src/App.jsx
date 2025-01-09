import React, {useEffect} from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import CustomCursor from "./components/cursor/cursor";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Project from "./pages/projects/project";
import Contact from "./pages/contact/contact";

const App = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: false, 
        });
      }, []);
  return (
    <div>
        <div className="cursor">
            <CustomCursor />
        </div>
      <Navbar />
      <div id="home" className="section  h-screen flex items-center justify-center" 
      style={{ backgroundColor: "#effbf8" }}
      >
        <Home />
      </div>
      <div id="about" className="section bg-gray-200 h-screen flex items-center justify-center"
      style={{ backgroundColor: "#effbf8" }}
      >
        <About />
      </div>

      <div id="project" className="section bg-gray-300 h-screen flex items-center justify-center"
      style={{ backgroundColor: "#effbf8" }}
      >
        <Project />
      </div>
      
      <div id="contact" className="section bg-gray-300 h-screen flex items-center justify-center"
      style={{ backgroundColor: "#effbf8" }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default App;
