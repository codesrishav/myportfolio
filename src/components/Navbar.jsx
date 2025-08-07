// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* ✅ Fixed: Added #home for proper anchor scrolling */}
        <a
          href="#home"
          className="text-4xl font-dancing italic font-semibold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text drop-shadow-lg hover:drop-shadow-2xl transition duration-300 ease-in-out"
        >
          Rishav Kumar
        </a>

        <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-end">
          <a href="#home" className="hover:text-orange-500 text-gray-700 dark:text-gray-300">
            Home
          </a>
          <a href="#projects" className="hover:text-orange-500 text-gray-700 dark:text-gray-300">
            Projects
          </a>
          <a href="#techstack" className="hover:text-orange-500 text-gray-700 dark:text-gray-300">
            Tech Stack
          </a>
          <a href="#contact" className="hover:text-orange-500 text-gray-700 dark:text-gray-300">
            Contact
          </a>

          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            title={`Switch Theme (${theme})`}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
