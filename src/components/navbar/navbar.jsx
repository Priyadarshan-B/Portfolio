import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import ThemeToggle from "../theme/toggle";
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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl z-50 bg-white/90 dark:bg-gray-900 backdrop-blur-sm shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-800/20">
      <div className="mx-auto flex justify-between items-center py-2 px-6">
        <div className="md:hidden z-50">
          <IconButton 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <CloseIcon className="text-gray-800 dark:text-gray-200" />
            ) : (
              <MenuIcon className="text-gray-800 dark:text-gray-200" />
            )}
          </IconButton>
        </div>

        <ul
          className={`absolute md:relative top-full md:top-auto left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 w-11/12 md:w-auto mt-2 md:mt-0 bg-white/95 dark:bg-gray-900/95 md:bg-transparent  md:backdrop-blur-none shadow-md md:shadow-none rounded-lg md:rounded-none
            flex flex-col md:flex-row items-center md:justify-between flex-1 md:space-x-6 lg:space-x-8
            py-4 md:py-0 space-y-2 md:space-y-0 mx-4
            transition-all duration-300 ease-out ${
              isMenuOpen
                ? "opacity-100 visible scale-100"
                : "opacity-0 md:opacity-100 invisible md:visible scale-95 md:scale-100"
            }`}
        >
          {['home', 'about', 'skill', 'project', 'contact'].map((section) => (
            <li key={section} className="w-full md:w-auto">
              <button
                className={`w-full px-6 py-2 md:px-4 md:py-1 text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400
                  font-medium rounded-md transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50
                  text-lg md:text-base capitalize focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <div className="ml-4 md:ml-6">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;