import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.querySelector("body").classList.toggle("dark");
  };

  return (
    <button
      className={`right-4 gap-3 flex items-center justify-center px-4 py-2  text-gray-900 dark:text-white rounded-full border-none focus:outline-none transition-colors duration-300`}
      onClick={toggleDarkMode}
    >
      {darkMode ? <FaSun size={16} /> : <FaMoon size={14} />}
      <span>{darkMode ? "Yorqin rejim" : "Tungi rejim"}</span>
    </button>
  );
};

export default DarkMode;
