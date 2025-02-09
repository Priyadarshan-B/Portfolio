import React from "react";
import gif from "../../assets/about.gif";
import "./about.css";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-start  p-4">
      <div className="flex flex-1 flex-col items-center  gap-4">
        <h3 className="font-bold text-3xl text-center" data-aos="fade-left">About Me</h3>
        <img src={gif} alt="About" className="  rounded-full" data-aos='fade-up' />
      </div>

      <div className="flex flex-1 flex-col gap-6 text-gray-700">
        <div className="p-4 bg-white dark:bg-darkModal rounded-2xl shadow-sm" data-aos="fade-right">
          <p className="text-green-600 font-bold mb-2">Who I Am</p>
          <p className="text-lg dark:text-smallFontDark">
            Hi, I'm a passionate developer with a keen interest in building
            innovative solutions. I thrive on learning and exploring new
            technologies.
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-darkModal rounded-2xl shadow-sm" data-aos="fade-right">
          <p className="text-green-600 font-bold mb-2">What I Do</p>
          <p className="text-lg dark:text-smallFontDark">
            My expertise includes front-end and back-end development, creating
            seamless user experiences, and optimizing application performance.
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-darkModal rounded-2xl shadow-sm" data-aos="fade-right">
          <p className="text-green-600 font-bold mb-2">Outside Work</p>
          <p className="text-lg dark:text-smallFontDark">
            Outside of work, I enjoy reading, exploring new tools, and
            participating in tech communities to share knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
