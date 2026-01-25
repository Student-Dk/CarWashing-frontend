import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-white text-xl font-bold">
          <Link to="/" aria-label="WashPro Home" className="flex items-center gap-2">
            🚗 <span className="text-blue-500">WashPro</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
          <li><Link to="/" className="hover:text-blue-500 relative">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500 relative">About</Link></li>
          <li><Link to="/Wplans" className="hover:text-blue-500 relative">Plans</Link></li>
          <li><Link to="/Wpoints" className="hover:text-blue-500 relative">Locations</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500 relative">Contact</Link></li>
          <li><Link to="/chatbot" className="hover:text-blue-500 relative">AskBot</Link></li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-6">
          {/* Contact Info */}
          <div className="flex flex-col text-xs text-gray-300">
            <a href="tel:123499430" className="hover:text-blue-500 transition">📞 9142635439</a>
            <a href="mailto:dk@gmail.com" className="hover:text-blue-500 transition">✉️ djdhiraj710@gmail.com</a>
          </div>

          {/* Admin Button */}
          <Link 
            to="/login" 
            className="px-4 py-2 bg-gradient-to-br from-black to-gray-800 text-white rounded-md font-medium hover:translate-y-[-2px] hover:shadow-lg transition-all"
          >
            Admin
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? '✖️' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md text-gray-200">
          <ul className="flex flex-col gap-6 p-6 text-center">
            <li><Link to="/" className="hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            <li><Link to="/Wplans" className="hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>Plans</Link></li>
            <li><Link to="/Wpoints" className="hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>Locations</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            <li>
              <Link 
                to="/login" 
                className="block mt-2 px-6 py-2 bg-gradient-to-br from-black to-gray-800 rounded-md hover:translate-y-[-2px] hover:shadow-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admin
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-2 text-xs text-gray-300 pb-4">
            <a href="tel:9142635439">📞 9142635439</a>
            <a href="mailto:djdhiraj710@gmail.com">✉️ djdhiraj710@gmail.com</a>
          </div>
        </div>
      )}
    </nav>
  );
}
