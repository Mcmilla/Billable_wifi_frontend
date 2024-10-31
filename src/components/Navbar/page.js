import React, { useState } from 'react';
import logoImage from "../../images/logo.png";
import { PhoneIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo and title */}
        <div className="text-xl font-bold flex items-center">
          <a 
            href="/" 
            className="flex items-center transition-transform transform hover:scale-105"
          >
            <img src={logoImage} alt="Eutron Logo" className="h-12 w-auto mr-2 animate-pulse" />
            <span className="text-2xl font-extrabold tracking-widest hover:text-purple-200">Eutron</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none transition-all transform hover:scale-105"
          >
            {isOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>

        {/* Desktop Menu and Contact Number */}
        <div className={`flex-col md:flex-row md:flex items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a 
            href="tel:+25469603394" 
            className="flex items-center text-lg mt-4 md:mt-0 md:ml-6 px-4 py-2 transition-all transform hover:scale-105 hover:bg-indigo-600 rounded-lg"
          >
            <PhoneIcon className="h-6 w-6 text-white mr-2 animate-bounce" />
            <span>+254 (769) 603 394</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
