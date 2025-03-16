"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import ThemeToggle from "../theme/toggle";

const sections = ["home", "about", "skill", "project", "contact"];

const CustomNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const updateActiveSection = useCallback(() => {
    const visibleSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        return top <= window.innerHeight / 2 && bottom >= 100;
      }
      return false;
    });
    if (visibleSection && visibleSection !== activeSection) {
      setActiveSection(visibleSection);
    }
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection);
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("nav")) setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl z-50 bg-white/90 dark:bg-gray-900 backdrop-blur-md shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-800/20"
    >
      <NavbarBrand>
        <span className="text-lg font-bold text-gray-800 dark:text-gray-200">Priyan</span>
      </NavbarBrand>

      <NavbarContent justify="end" className="hidden md:flex">
        {sections.map((section) => (
          <NavbarItem key={section}>
            <button
              className={`px-4 py-2 text-lg capitalize font-medium transition-all duration-300 hover:bg-indigo-100/90 hover:rounded-md dark:hover:bg-indigo-800/20 ${
                activeSection === section ? "text-indigo-600 dark:text-indigo-400" : "text-gray-800 dark:text-gray-200"
              }`}
              onClick={() => scrollToSection(section)}
            >
              {section}
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="md:hidden" />

      <NavbarMenu className="fixed top-1 left-1 w-1/2 h-12 pt-20 rounded-md">
        {sections.map((section) => (
          <NavbarMenuItem key={section}>
            <button
              className={`w-full px-6 py-2 text-lg capitalize font-medium transition-all duration-300 hover:bg-indigo-100/90 hover:rounded-md dark:hover:bg-indigo-800/20 ${
                activeSection === section ? "text-indigo-600 dark:text-indigo-400" : "text-gray-800 dark:text-gray-200"
              }`}
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
