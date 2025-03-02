import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@heroui/react";
import ThemeToggle from "../theme/toggle";
import "./navbar.css";

const CustomNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the menu when a nav item is clicked
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".nextui-navbar-menu")) {
        setIsMenuOpen(false); // Close the menu when clicking outside
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <Navbar isBordered className="fixed top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl z-50 bg-white/90 dark:bg-gray-900 backdrop-blur-md shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-800/20">
      <NavbarBrand>
        <span className="text-lg font-bold text-gray-800 dark:text-gray-200">Priyan</span>
      </NavbarBrand>

      <NavbarContent justify="end" className="hidden md:flex">
        {["home", "about", "skill", "project", "contact"].map((section) => (
          <NavbarItem key={section}>
            <button
              className="px-6 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-lg capitalize"
              onClick={() => scrollToSection(section)}
            >
              {section}
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <NavbarMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        className="fixed top-0 left-0 w-1/2 h-full bg-white dark:bg-gray-900 shadow-lg flex flex-col items-center justify-center space-y-6 nextui-navbar-menu"
      >
        {["home", "about", "skill", "project", "contact"].map((section) => (
          <NavbarMenuItem key={section}>
            <button
              className="w-full px-6 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-lg capitalize"
              onClick={() => scrollToSection(section)}
            >
              {section}
            </button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarItem>
        <ThemeToggle />
      </NavbarItem>
    </Navbar>
  );
};

export default CustomNavBar;