import React, { useEffect, useState } from 'react';

function Header () {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black bg-opacity-90 shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-8 flex justify-between items-center text-white">
        <div className="text-2xl font-bold">YourLogo</div>
        <div className="flex items-center space-x-4">
            <ul className="hidden md:flex space-x-8">
          {['LET’S TALK AI', 'ABOUT', 'SERVICES', 'INDUSTRIES', 'PORTFOLIO', 'RESOURCES'].map((item) => (
            <li key={item}>
              <button
                type="button"
                className="hover:text-blue-400 transition-colors duration-200 uppercase text-sm bg-transparent border-none p-0 m-0 cursor-pointer"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-2 rounded-md text-white ml-4 text-sm">
          CONTACT US
        </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
