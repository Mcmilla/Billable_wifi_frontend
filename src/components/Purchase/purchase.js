import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PaymentPage() {
  const location = useLocation();
  const selectedPackage = location.state?.package || {};

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Complete Your Payment</h1>
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Selected Plan</h2>
          <div className="mb-4">
            <p className="text-lg font-medium">Package: {selectedPackage.title}</p>
            <p className="text-lg font-medium">Price: KSH {selectedPackage.price}</p>
            <p className="text-lg font-medium">Duration: {selectedPackage.duration}</p>
          </div>
          <input
            type="text"
            placeholder="Enter M-Pesa Number"
            className="w-full p-2 border rounded mb-4"
          />
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-full rounded">
            Pay Now
          </button>
        </div>
      </div>

      
    </div>
  );
}
