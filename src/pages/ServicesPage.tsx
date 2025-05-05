import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import ServiceCard from '../components/ui/ServiceCard';
import { Heart, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
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
              Our Medical Services
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
              We offer a comprehensive range of medical services to meet all your healthcare needs.
              Our team of specialists uses advanced technology and evidence-based practices to provide exceptional care.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeIn}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Comprehensive Care Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-6">
                <Heart className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Comprehensive Healthcare</h2>
              <div className="w-20 h-1 bg-primary-500 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Our integrated approach to healthcare means that we consider all aspects of your health. 
                We provide coordinated care across specialties, ensuring that your treatment plan is comprehensive 
                and addresses all your health concerns.
              </p>
              <p className="text-gray-600 mb-8">
                From preventive screenings to complex treatments, our medical team works together to deliver 
                personalized care that meets your unique needs. We emphasize patient education and involvement, 
                empowering you to make informed decisions about your health.
              </p>
              <Link 
                to="/appointment" 
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 transition-colors"
              >
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Doctor consulting with patient" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Insurance & Payment */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Insurance & Payment</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              We accept most major insurance plans and offer flexible payment options to make healthcare accessible.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Accepted Insurance</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary-500 mr-2" /> Blue Cross Blue Shield</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary-500 mr-2" /> Aetna</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary-500 mr-2" /> Cigna</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary-500 mr-2" /> United Healthcare</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary-500 mr-2" /> Medicare</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary-500 mr-2" /> Medicaid</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary-500 mr-2" /> Humana</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary-500 mr-2" /> Kaiser Permanente</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Please contact our office to verify coverage before your appointment.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Payment Options</h3>
              <p className="text-gray-600 mb-4">
                We offer several payment options for your convenience:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary-500 mr-2" /> Cash</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary-500 mr-2" /> Credit/Debit Cards</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary-500 mr-2" /> Checks</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary-500 mr-2" /> Health Savings Accounts (HSA)</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary-500 mr-2" /> Flexible Spending Accounts (FSA)</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 text-primary-500 mr-2" /> Payment Plans</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                If you have questions about billing or need to set up a payment plan, please contact our billing department.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary-500 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.h2 
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Ready to Experience Our Services?
                  </motion.h2>
                  <motion.p 
                    className="mb-8 text-secondary-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Schedule an appointment today to experience our exceptional healthcare services.
                    Whether you need a routine check-up or specialized care, our team is here to help.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link 
                      to="/appointment" 
                      className="inline-flex items-center px-6 py-3 bg-white text-secondary-600 hover:bg-gray-100 font-medium rounded-md transition-colors"
                    >
                      Book an Appointment <Calendar className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>
                </div>
                <div className="hidden lg:block">
                  <motion.img 
                    src="https://images.pexels.com/photos/7088841/pexels-photo-7088841.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Doctor with patient"
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

export default ServicesPage;