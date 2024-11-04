import React, { useState } from "react";

export default function ConnectionLogin() {
  const [passcode, setPasscode] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle connection logic here, e.g., sending data to an API
    console.log("Passcode:", passcode, "Password:", password);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white-50 to-gray-100">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:-translate-y-1 duration-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-800 mb-4">Reconnect to the Internet</h2>
        
        <p className="text-gray-600 text-center mb-6">
          Enter your passcode and password below to get back online.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Passcode Input */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Passcode</label>
            <div className="flex">
              <span className="flex items-center bg-indigo-100 border border-gray-300 rounded-l-md px-3 text-gray-700">
                +254
              </span>
              <input
                type="text"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your passcode"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Connect Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105"
          >
            Connect
          </button>
        </form>

        {/* Purchase Package Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an active package?{" "}
          <a href="/admin" className="text-indigo-600 font-semibold hover:underline">
            Purchase a Package
          </a>
        </p>
      </div>
    </section>
  );
}
