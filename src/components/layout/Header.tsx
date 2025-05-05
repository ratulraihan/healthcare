import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent pb-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
              MediCare
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Doctors', path: '/doctors' },
              { name: 'Resources', path: '/resources' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary-500 bg-primary-50'
                    : `${isScrolled ? 'text-gray-700 hover:text-primary-500' : 'text-gray-900 hover:text-primary-200'}`
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Appointment Button */}
          <div className="hidden md:block">
            <Link
              to="/appointment"
              className="inline-flex items-center px-4 py-2 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 transition-colors"
            >
              Book Appointment
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Doctors', path: '/doctors' },
              { name: 'Resources', path: '/resources' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="block w-full text-center px-3 py-2 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </motion.div>
      )}
      
      {/* Quick Contact Bar */}
      <div className={`hidden sm:block transition-all duration-300 ${isScrolled ? 'opacity-0 h-0' : 'opacity-100'} bg-primary-600 text-white text-sm`}>
        <div className="container mx-auto px-4 py-1 flex justify-between items-center">
          <div className="flex items-center">
            <Phone size={14} className="mr-1" />
            <span>Emergency: (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Mon-Fri: 8:00 AM - 7:00 PM</span>
            <span>Sat: 9:00 AM - 1:00 PM</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;