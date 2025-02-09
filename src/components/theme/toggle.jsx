// ThemeToggle.js
import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' || false); // Initialize from localStorage or false

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode); // Use documentElement for wider browser support
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle" // No need for dynamic class here
      aria-label="Toggle dark mode"
    >
      <div className="icons-container">
        <FiSun className={`sun ${darkMode ? 'hidden' : 'visible'}`} />
        <FiMoon className={`moon ${darkMode ? 'visible' : 'hidden'}`} />
      </div>
    </button>
  );
};

export default ThemeToggle;

// CSS Styles
const styles = `
.theme-toggle {
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background: var(--toggle-bg);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.theme-toggle:hover {
  transform: rotate(15deg);
}

.icons-container {
  position: relative;
  width: 24px;
  height: 24px;
}

.sun, .moon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--icon-color);
}

.sun {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.moon {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.5);
}

.sun.hidden {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.5);
}

.moon.visible {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

/* Add these variables to your global CSS */
:root {
  --toggle-bg: #f0f0f0;
  --icon-color: #333;
}

.dark {
  --toggle-bg: #333;
  --icon-color: #f0f0f0;
}

body {
  transition: background-color 0.3s ease, color 0.3s ease;
}

body.dark {
  background-color: #1a1a1a;
  color: #ffffff;
}
`;

// Inject styles
document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);