import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold text-white">MediCare</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing exceptional healthcare services with a commitment to improving patient outcomes and experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">Our Services</Link></li>
              <li><Link to="/doctors" className="text-gray-400 hover:text-primary-500 transition-colors">Our Doctors</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-primary-500 transition-colors">Patient Resources</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">Preventive Care</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">Cardiology</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">Neurology</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">Pediatrics</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">Orthopedics</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">Mental Health</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary-500" />
                <span className="text-gray-400">123 Medical Center Drive<br />San Francisco, CA 94110</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-500" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-primary-500 transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-500" />
                <a href="mailto:info@medicarehealth.com" className="text-gray-400 hover:text-primary-500 transition-colors">info@medicarehealth.com</a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-primary-500" />
                <div className="text-gray-400">
                  <p>Mon-Fri: 8:00 AM - 7:00 PM</p>
                  <p>Sat: 9:00 AM - 1:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MediCare Health Center. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-500 transition-colors">HIPAA Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;