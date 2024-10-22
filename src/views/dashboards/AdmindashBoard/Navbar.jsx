import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold">Billable Wi-Fi Admin</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
            <Link to="/users" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">Users</Link>
            <Link to="/vendors" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">Vendors</Link>
            <Link to="/access-codes" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">Access Codes</Link>
            <Link to="/settings" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">Settings</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
