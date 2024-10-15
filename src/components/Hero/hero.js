import React from "react";

export default function Hero() {

  return (
    <header className="relative bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-4 text-center">
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    <div className="relative z-10">
      <h1 className="text-4xl font-bold">Stay Connected with Fast & Reliable Wi-Fi</h1>
      <p className="mt-4 text-lg">Affordable plans for every need. Choose your package now!</p>
    </div>
  </header>
  );
}


