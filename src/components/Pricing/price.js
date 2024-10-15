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
    <section id="pricing" className="mb-12 mt-6">
      <h2 className="text-center text-3xl font-bold text-gray-700 mb-8">
        Choose a Wi-Fi Package to Get Connected
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((packag, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2 hover:bg-blue-50"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 tracking-wide uppercase">{packag.title}</h3>
              <div className="flex justify-center items-center mt-2">
                <span className="text-4xl font-extrabold text-indigo-600">KSH</span>
                <span className="text-6xl font-bold text-gray-900 ml-1">{packag.price}</span>
              </div>
              <p className="mt-3 p-2 rounded-full bg-indigo-100 text-indigo-600">{packag.duration}</p>
            </div>
            <button
              className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
              onClick={() => handlePurchase(packag)} // Call the navigation function here
            >
              Purchase
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
