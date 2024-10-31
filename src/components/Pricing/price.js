import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const navigate = useNavigate();

  const packages = [
    { title: "Basic Package", price: "10", duration: "1 Hour Unlimited" },
    { title: "Standard Package", price: "20", duration: "2 Hours Unlimited" },
    { title: "Premium Package", price: "30", duration: "3 Hours Unlimited" },
  ];

  const handlePurchase = (selectedPackage) => {
    navigate('/payment', { state: { package: selectedPackage } });
  };

  return (
    <section id="pricing" className="py-16 px-6 sm:px-8 lg:px-10 bg-gradient-to-br from-gray-100 to-blue-50">
      {/* Section Title */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800 mb-16 tracking-tight animate-fadeIn">
        Choose a Wi-Fi Package to Get Connected
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {packages.map((packag, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg text-center p-6 sm:p-8 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105 cursor-pointer ease-in-out"
            onClick={() => handlePurchase(packag)}
          >
            <div className="relative z-10 p-4 bg-white rounded-t-lg">
              {/* Package Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 uppercase tracking-wide mb-4 transition-all duration-300">
                {packag.title}
              </h3>

              {/* Price Display */}
              <div className="flex justify-center items-end mb-4">
                <span className="text-2xl font-bold text-indigo-600 animate-pulse">KSH</span>
                <span className="text-5xl font-extrabold text-gray-900 ml-1">{packag.price}</span>
              </div>

              {/* Duration */}
              <p className="mt-3 text-indigo-700 bg-indigo-100 px-3 py-1 sm:px-4 sm:py-2 rounded-full inline-block text-sm sm:text-base transition-all duration-300 transform hover:scale-110">
                {packag.duration}
              </p>
            </div>

            {/* Purchase Button */}
            <button
              className="w-full py-3 text-lg font-semibold text-white bg-indigo-600 rounded-b-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
              onClick={(e) => {
                e.stopPropagation();
                handlePurchase(packag);
              }}
            >
              Purchase Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
