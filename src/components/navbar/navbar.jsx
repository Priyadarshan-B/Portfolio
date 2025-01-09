import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); 
    }
  };

  return (
    <nav className="navbar fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-5xl z-10 bg-white/70 backdrop-blur-sm shadow-lg rounded-xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-lg font-bold text-gray-800">Priyan Portfolio</h1>

        <div className="md:hidden">
          <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>

        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white/90 md:bg-transparent backdrop-blur- md:backdrop-blur-none shadow-md md:shadow-none flex flex-col md:flex-row items-center md:items-center md:space-x-6 py-4 md:py-0 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li className="w-full md:w-auto text-center">
            <button
              className="nav-link text-gray-950 focus:outline-none block md:inline"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
          </li>
          <li className="w-full md:w-auto text-center">
            <button
              className="nav-link text-gray-950 focus:outline-none block md:inline"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
          </li>
          <li className="w-full md:w-auto text-center">
            <button
              className="nav-link text-gray-950 focus:outline-none block md:inline"
              onClick={() => scrollToSection("project")}
            >
              Project
            </button>
          </li>
          <li className="w-full md:w-auto text-center">
            <button
              className="nav-link text-gray-950 focus:outline-none block md:inline"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
