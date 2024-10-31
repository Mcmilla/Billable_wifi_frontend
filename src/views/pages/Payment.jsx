import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPackage = location.state?.package || {};
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validatePhoneNumber = (number) => {
    const regex = /^(?:07\d{8}|01\d{8}|2547\d{8})$/;
    return regex.test(number);
  };

  const handlePayNowClick = () => {
    if (!phoneNumber) {
      setNotification({ type: 'error', message: 'Please enter your M-Pesa number before proceeding.' });
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setNotification({ type: 'error', message: 'Please enter a valid Kenyan phone number.' });
      return;
    }
    setShowPopup(true);
  };

  const confirmPayment = () => {
    setShowPopup(false);
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setNotification({ type: 'success', message: `Payment for ${phoneNumber} has been processed successfully!` });

      // Automatically close the notification after 5 seconds
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }, 3000);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const closeNotification = () => {
    setNotification(null);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg shadow-md mb-4 self-start mx-4 mt-4 transition-transform transform hover:scale-105"
      >
        Back
      </button>

      <div className="flex flex-col items-center justify-center flex-grow px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 md:mb-8 text-center">
          Complete Your Payment
        </h1>

        <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 md:p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">Selected Plan</h2>
          <div className="mb-4">
            <p className="text-lg md:text-xl font-medium">Package: <span className="font-semibold">{selectedPackage.title}</span></p>
            <p className="text-lg md:text-xl font-medium">Price: <span className="font-semibold">KSH {selectedPackage.price}</span></p>
            <p className="text-lg md:text-xl font-medium">Duration: <span className="font-semibold">{selectedPackage.duration}</span></p>
          </div>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter M-Pesa Number"
            className="w-full p-3 md:p-4 border rounded-lg shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            onClick={handlePayNowClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 px-5 w-full rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Pay Now
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-gray-900 bg-opacity-60 px-4">
          <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-2xl max-w-lg w-full transition-transform transform scale-105">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">Confirm Your Payment</h3>
            <div className="mb-4">
              <p className="font-medium text-lg">Package: <span className="font-semibold">{selectedPackage.title}</span></p>
              <p className="font-medium text-lg">Price: <span className="font-semibold">KSH {selectedPackage.price}</span></p>
              <p className="font-medium text-lg">Phone Number: <span className="font-semibold">{phoneNumber}</span></p>
            </div>
            <p className="text-red-500 mb-4 text-center">
              Please verify your phone number. <br /> You will receive an M-Pesa prompt on this number.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmPayment}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-md transition-transform transform hover:scale-110"
              >
                Confirm and Pay
              </button>
              <button
                onClick={closePopup}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-md transition-transform transform hover:scale-110"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isProcessing && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="flex flex-col items-center justify-center bg-white p-10 rounded-full shadow-lg">
            <div className="loader"></div>
            <p className="mt-4 text-lg font-medium text-gray-700">Processing Payment...</p>
          </div>
        </div>
      )}

      {notification && (
        <div
          className={`fixed bottom-5 right-5 p-4 rounded-xl shadow-lg transition-all ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white max-w-sm w-full text-center`}
        >
          <p>{notification.message}</p>
          <button onClick={closeNotification} className="text-sm mt-2 underline">
            Close
          </button>
        </div>
      )}
    </div>
  );
}
