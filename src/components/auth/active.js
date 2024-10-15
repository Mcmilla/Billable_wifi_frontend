import React, { useState } from "react";
export default function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    preventDefault();
    // Handle the login logic here, for example sending data to API
    console.log("Mobile:", mobile, "Password:", password);
  };

  return (
      
<div className="text-center mb-12">
            <h1 className="text-2xl font-bold mb-6">Already Have Active Package? Login</h1>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700">Login</button>
              <p className="mt-4 text-sm text-center text-gray-600">
                Don’t have an active Package?{" "}
                
                  <a href="/admin" className="text-indigo-600 hover:underline">Buy a Package</a>
              </p>
            </form>
          </div>
  );
}
function preventDefault() {
    throw new Error("Function not implemented.");
}


