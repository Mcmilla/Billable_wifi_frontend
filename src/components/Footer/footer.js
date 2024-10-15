import React from "react";


export default function Footer() {
  return (
      
<footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Column 1: Copyright */}
<div className="text-center mb-4 md:mb-0">
  <p>© 2024 Eutron Wi-Fi. All Rights Reserved.</p>
  <p className="text-sm pt-4">Follow our journey at: <a href="https://www.eutron.com" className="hover:underline">www.eutron.com</a></p>
</div>


    {/* Column 2: Quick Links */}
    <div className="flex flex-col items-center mb-4 md:mb-0">
      <h4 className="font-bold mb-2">Quick Links</h4>
      <div className="flex flex-col space-y-1">
        <a href="/about" className="hover:underline">About Us</a>
        <a href="/services" className="hover:underline">Services</a>
        <a href="tel:+254769603394" className="hover:underline">Contact</a>
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
      </div>
    </div>

    {/* Column 3: Social Media Links and Contact Info */}
    <div className="flex flex-col items-center">
      <h4 className="font-bold mb-2">Follow Us</h4>
      <div className="flex space-x-4 mb-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
      </div>
      <p className="text-center">Contact us: <a href="mailto:jared@eutron.com" className="hover:underline">Example@eutron.com</a> |<br /> Phone: (+254) 769-603-394</p>
    </div>
  </div>
</footer>
  );
}

