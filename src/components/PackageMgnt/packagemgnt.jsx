import React from 'react';

const PackageManagement = () => (
  <section id="package-management" className="mb-12">
    <h2 className="text-2xl font-bold text-gray-700 mb-4">Wi-Fi Package Management</h2>
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Add input and buttons here */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th>Package Name</th>
              <th>Price (KSH)</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Add package rows here */}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default PackageManagement;
