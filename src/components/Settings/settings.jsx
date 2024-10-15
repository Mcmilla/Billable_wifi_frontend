import React from 'react';

const Settings = () => (
  <section id="settings" className="mb-12">
    <h2 className="text-2xl font-bold text-gray-700 mb-4">Settings</h2>
    <div className="bg-white shadow-md rounded-lg p-6">
      <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Manage Payment Gateway</button>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 ml-4">Terms of Service</button>
    </div>
  </section>
);

export default Settings;
