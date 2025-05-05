import React from 'react';
import { motion } from 'framer-motion';
import { User, Search, ArrowRight } from 'lucide-react';
import { doctors } from '../data/doctors';
import DoctorCard from '../components/ui/DoctorCard';
import { Link } from 'react-router-dom';

const DoctorsPage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
              Meet Our Doctors
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
              Our team of experienced healthcare professionals is dedicated to providing exceptional care. 
              Learn more about our doctors' qualifications, specialties, and approach to patient care.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Search & Filter */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search for a doctor or specialty..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="">All Specialties</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="orthopedics">Orthopedics</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {doctors.map((doctor) => (
              <motion.div key={doctor.id} variants={fadeIn}>
                <DoctorCard doctor={doctor} detailed={true} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Join Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.div 
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <User className="h-6 w-6" />
                  </motion.div>
                  <motion.h2 
                    className="text-3xl font-bold mb-4 text-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    Join Our Medical Team
                  </motion.h2>
                  <motion.p 
                    className="mb-6 text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    We're always looking for talented and compassionate healthcare professionals to join our team. 
                    If you're passionate about patient care and want to work in a collaborative, innovative 
                    environment, we'd love to hear from you.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 transition-colors"
                    >
                      View Career Opportunities <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>
                </div>
                <div className="hidden lg:block">
                  <motion.img 
                    src="https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Medical team"
                    className="rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;