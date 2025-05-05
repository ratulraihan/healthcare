import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact Us
            </motion.h1>
            <motion.div 
              className="w-20 h-1 bg-white mx-auto mb-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.div>
            <motion.p 
              className="text-lg mb-8 text-primary-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're here to help. Reach out to us with any questions or to schedule an appointment.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">Main Line: (555) 123-4567</p>
                    <p className="text-gray-600">Emergency: (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">General Inquiries: info@medicarehealth.com</p>
                    <p className="text-gray-600">Appointments: appointments@medicarehealth.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600 mb-1">123 Medical Center Drive</p>
                    <p className="text-gray-600">San Francisco, CA 94110</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Hours of Operation</h3>
                    <p className="text-gray-600 mb-1">Monday - Friday: 8:00 AM - 7:00 PM</p>
                    <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Departments Direct Lines</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-700">Cardiology</p>
                    <p className="text-gray-600">(555) 123-4568</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Neurology</p>
                    <p className="text-gray-600">(555) 123-4569</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Pediatrics</p>
                    <p className="text-gray-600">(555) 123-4570</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Orthopedics</p>
                    <p className="text-gray-600">(555) 123-4571</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="text-gray-600">
                      I agree to the <a href="#" className="text-primary-600 hover:underline">privacy policy</a> and consent to being contacted.
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 transition-colors"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Find Us</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Our medical center is conveniently located in the heart of San Francisco.
            </p>
          </motion.div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              {/* This would be an iframe for a real Google Map */}
              <div className="bg-gray-200 w-full h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary-500 mx-auto mb-3" />
                  <p className="text-gray-600">Interactive map would be embedded here</p>
                  <p className="font-medium text-gray-800 mt-2">123 Medical Center Drive, San Francisco, CA 94110</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Parking Information</h3>
              <p className="text-gray-600">
                Free parking is available in our main lot. Additional paid parking is available in the adjacent public garage.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Public Transportation</h3>
              <p className="text-gray-600">
                We are accessible via bus routes 12, 14, and 30. The nearest subway station is Downtown Station, a 5-minute walk away.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Accessibility</h3>
              <p className="text-gray-600">
                Our facility is fully accessible with ramps, elevators, and reserved parking spaces for individuals with disabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;