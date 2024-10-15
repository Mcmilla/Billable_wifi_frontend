import React from 'react';
import logoImage from "../../images/logo.png"; 

const Navbar = () => {
  return (
    <nav className="bg-indigo-800 text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and title */}
        <div className="text-xl font-bold">
          <a 
            href="/"  // Using an anchor tag for navigation
            className="flex items-center hover:text-indigo-300 text-xl font-bold hover:bg-transparent">
            <img src={logoImage} alt="Eutron Logo" className="h-10 mr-2 w-auto" />
            Eutron
          </a>
        </div>

        {/* Contact Call-to-Action */}
        <div>
          <a href="tel:+25469603394" className="hover:text-indigo-300 text-lg">
            Contact Us: +254 (769) 603 394
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
