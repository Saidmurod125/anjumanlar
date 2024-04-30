import   { useState } from 'react';


const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.querySelector('body').classList.toggle('dark');
  };

  return (
    <button
      className={`right-4 gap-2 flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white  rounded-full border-none  focus:outline-none`}
      onClick={toggleDarkMode}
    >
  <span className="fa-solid fa-moon" />
  <span>Tungi rejim</span>
    </button>
  );
};

export default DarkMode;
