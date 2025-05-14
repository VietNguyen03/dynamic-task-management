import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-sm px-3 py-1 rounded bg-gray-300 dark:bg-gray-700"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
