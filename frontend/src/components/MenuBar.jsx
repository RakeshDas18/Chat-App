import React, { useState } from 'react';
import Sidebar from './Sidebar'
import Search from './Search'
import './styles.css'
import HomePage from './HomePage';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`menu-bar flex flex-row items-center justify-between flex-wrap bg-blue-500 p-6 w-screen`} style={{zIndex: 9999}}>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight cursor-pointer">Chat</span>
      </div>
      <div className="block">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-blue-500 transition-opacity ${
          isOpen ? 'opacity-96' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="absolute right-0 mt-12">
          <button
            onClick={toggleMenu}
            className="text-white relative focus:outline-none pt-12 pr-8 text-xl">
            Close
          </button>
        </div>
        <div className="text-sm text-white p-6">
          <a
            href="#"
            className="block mt-4 hover:text-white"
          >
            <Search/>
          </a>
          <a
            href="#"
            className="block mt-4 hover:text-white"
          >
            <Sidebar/>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
