// src/components/AdminDashboard/Dashboard.js

import React from 'react';
import Navbar from './Navbar'; 
import Users from './User'; 
import Vendors from './Vendor'; 
import AccessCodes from './AccessCode'; 

const AdminDashboard = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Admin Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 shadow rounded-lg">
            <h3 className="text-xl font-bold">Users</h3>
            <Users /> {/* User management component */}
          </div>
          <div className="bg-gray-100 p-4 shadow rounded-lg">
            <h3 className="text-xl font-bold">Vendors</h3>
            <Vendors /> {/* Vendor management component */}
          </div>
          <div className="bg-gray-100 p-4 shadow rounded-lg">
            <h3 className="text-xl font-bold">Access Codes</h3>
            <AccessCodes /> {/* Access code generation component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
