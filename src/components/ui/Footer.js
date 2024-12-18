// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const handleHomeClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  return (
    <footer className="bg-gray-900 p-4 text-gray-500 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo and Contact Info */}
        <div id="contact">
          <img
            src="./QR2TECH.png"
            alt="Qr2tech-Logo"
            className="mb-12 h-12 bg-white shadow-ld rounded"
          />
          <p className="mb-2">UK, United Kingdom</p>
          <p className="mb-2">📞 123-456-7890</p>
          <p className="mb-4">✉️ Qr2tech.com</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="text-[#7a00a6] hover:text-purple-800">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-[#7a00a6] hover:text-purple-800">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-[#7a00a6] hover:text-purple-800">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-[#7a00a6] hover:text-purple-800">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/#home"
                onClick={handleHomeClick}
                className="hover:text-purple-700 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li><a href="/about" className="hover:text-purple-700">About Company</a></li>
          </ul>
        </div>

        {/* Our Mission Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Our Mission</h4>
          <ul className="space-y-2">
            <li><a href="/#contact" className="hover:text-purple-700">Contacts</a></li>
            <li><a href="/notfound" className="hover:text-purple-700">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:text-purple-700">FAQ Pages</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
          <p className="mb-4">Subscribe to receive inspiration, ideas & news in your inbox</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 w-full md:w-auto rounded-l-md border-none focus:outline-none text-black"
            />
            <button className="bg-purple-700 px-4 py-2 rounded-r-md text-white hover:bg-purple-800">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-white-400">
        &copy; 2024 Qr2tech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
