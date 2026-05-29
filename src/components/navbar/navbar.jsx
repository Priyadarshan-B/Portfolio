"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  FolderIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import ThemeToggle from "../theme/toggle";

const sections = ["home", "about", "skill", "project", "contact"];

const menuItems = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "about", label: "About", icon: UserIcon },
  { id: "skill", label: "Skills", icon: WrenchScrewdriverIcon },
  { id: "project", label: "Projects", icon: FolderIcon },
  { id: "contact", label: "Contact", icon: EnvelopeIcon },
];

const CustomNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsMenuOpen(false);
  };

  const updateActiveSection = useCallback(() => {
    const visibleSection = sections.find((section) => {
      const element = document.getElementById(section);

      if (!element) return false;

      const { top, bottom } = element.getBoundingClientRect();

      return top <= window.innerHeight / 2 && bottom >= 100;
    });

    if (visibleSection) {
      setActiveSection(visibleSection);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection);
    updateActiveSection();

    return () =>
      window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <>
      <Navbar
        className="
          fixed
          top-4
          left-1/2
          -translate-x-1/2
          w-11/12
          max-w-6xl
          z-50
          bg-white/90
          dark:bg-gray-900/90
          backdrop-blur-md
          shadow-lg
          rounded-xl
          transition-all
          duration-300
        "
      >
        {/* Logo */}
        <NavbarBrand>
          <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
            Priyan
          </span>
        </NavbarBrand>

        {/* Desktop Navigation */}
        <NavbarContent justify="end" className="hidden md:flex">
          {sections.map((section) => (
            <NavbarItem key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 rounded-lg capitalize font-medium transition-all duration-300 ${
                  activeSection === section
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-800/20"
                }`}
              >
                {section}
              </button>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Desktop Theme Toggle */}
        <NavbarContent justify="end" className="hidden md:flex">
          <NavbarItem>
            <ThemeToggle />
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Controls */}
        <NavbarContent justify="end" className="md:hidden gap-2">
          <NavbarItem>
            <ThemeToggle />
          </NavbarItem>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              menu-button
              p-2
              rounded-xl
              hover:bg-gray-100
              dark:hover:bg-gray-800
              transition-all
              duration-300
            "
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </NavbarContent>
      </Navbar>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="
              md:hidden
              fixed
              inset-0
              bg-black/30
              backdrop-blur-sm
              z-40
            "
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Card */}
          <div
            data-aos="zoom-in-down"
            className="
              mobile-menu
              md:hidden
              fixed
              top-24
              left-1/2
              -translate-x-1/2
              w-[92%]
              max-w-sm
              z-50
              bg-white/95
              dark:bg-gray-900/95
              backdrop-blur-xl
              rounded-3xl
              shadow-2xl
              border
              border-gray-200
              dark:border-gray-700
              overflow-hidden
            "
          >
            {/* Header */}
            <div
              className="
                px-6
                py-5
                border-b
                border-gray-200
                dark:border-gray-700
              "
            >
            

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Explore my portfolio
              </p>
            </div>

            {/* Navigation Items */}
            <div className="p-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full
                      flex
                      items-center
                      gap-4
                      px-4
                      py-4
                      rounded-2xl
                      transition-all
                      duration-300
                      ${
                        activeSection === item.id
                          ? "bg-indigo-500 text-white shadow-lg"
                          : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }
                    `}
                  >
                    <Icon className="w-6 h-6" />

                    <span className="font-medium">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CustomNavBar;