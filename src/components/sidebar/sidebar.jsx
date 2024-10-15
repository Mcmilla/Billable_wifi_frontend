import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <nav className={`transition-sidebar bg-indigo-700 w-64 fixed top-0 left-0 h-full z-40 ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
    <div className="p-4">
      <h2 className="text-2xl text-white mb-8">Admin Dashboard</h2>
      <ul className="space-y-4">
        <li><a href="#user-management" className="text-white block p-2 rounded hover:bg-indigo-500">User Management</a></li>
        <li><a href="#package-management" className="text-white block p-2 rounded hover:bg-indigo-500">Wi-Fi Packages</a></li>
        <li><a href="#revenue-overview" className="text-white block p-2 rounded hover:bg-indigo-500">Revenue & Usage Overview</a></li>
        <li><a href="#settings" className="text-white block p-2 rounded hover:bg-indigo-500">Settings</a></li>
      </ul>
    </div>
  </nav>
);

export default Sidebar;
