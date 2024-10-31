import React from "react";

export default function Hero() {
  return (
    <header className="relative  bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 sm:px-6 md:px-8 text-center py-12 md:py-16">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      <div className="relative pt-16 max-w-3xl mx-auto text-center">
        {/* Concise Title */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Fast & Reliable Wi-Fi for All Your Needs
        </h1>

        {/* Minimal Subtext */}
        <p className="mt-2 text-lg md:text-xl text-indigo-100 font-light">
          Choose a plan that keeps you connected with high-speed access.
        </p>

        {/* Call-to-Action Button */}
        <button className="mt-6 px-5 py-3 bg-white text-indigo-700 font-semibold text-md rounded-full shadow-md hover:bg-indigo-100 transition-all duration-300">
          View Packages
        </button>
      </div>
    </header>
  );
}
