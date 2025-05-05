import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Calendar, Phone } from 'lucide-react';
import { services } from '../data/services';
import { doctors } from '../data/doctors';
import { testimonials } from '../data/testimonials';

const HomePage: React.FC = () => {
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
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center bg-hero-pattern">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-primary-900/60"></div>
        </div>
        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
          <motion.div 
            className="max-w-2xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Your Health Is Our <span className="text-primary-400">Priority</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Providing exceptional healthcare with compassion, expertise, and cutting-edge technology. Our team of specialists is dedicated to your wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/appointment" 
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center"
              >
                Book Appointment <Calendar className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:+15551234567" 
                className="bg-white hover:bg-gray-100 text-primary-600 font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center"
              >
                Call Us Now <Phone className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-12 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="flex space-x-4">
              <div className="bg-white shadow-lg rounded-lg px-6 py-4 flex items-center">
                <div className="bg-primary-50 rounded-full p-3 mr-3">
                  <Check className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Certified Doctors</p>
                  <p className="font-bold">20+ Specialists</p>
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg px-6 py-4 flex items-center">
                <div className="bg-primary-50 rounded-full p-3 mr-3">
                  <Star className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Patient Satisfaction</p>
                  <p className="font-bold">98% Rating</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Medical Services</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              We offer a comprehensive range of medical services to meet all your healthcare needs.
              Our team of specialists is dedicated to providing the highest quality care.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.slice(0, 6).map((service) => (
              <motion.div 
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={`/services`} 
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors"
            >
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose MediCare?</h2>
              <div className="w-20 h-1 bg-primary-500 mb-6"></div>
              <p className="text-gray-600 mb-8">
                For over 25 years, MediCare has been a trusted healthcare provider in the community.
                Our state-of-the-art facilities, combined with our team of experienced medical professionals,
                ensure that you receive the highest standard of care.
              </p>
              
              <div className="space-y-4">
                {[
                  "Expert Medical Professionals",
                  "Advanced Medical Technology",
                  "Compassionate Patient Care",
                  "Comprehensive Treatment Approach",
                  "Convenient Locations & Hours"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-primary-600" />
                    </div>
                    <p className="ml-3 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors"
                >
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Medical team" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
                  <div className="bg-primary-500 rounded-full w-12 h-12 flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Patient Satisfaction</p>
                    <p className="font-bold text-xl">98.7%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Doctors Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Doctors</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Our team of highly qualified and experienced doctors is dedicated to providing exceptional care.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {doctors.map((doctor) => (
              <motion.div 
                key={doctor.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{doctor.name}</h3>
                  <p className="text-primary-500 font-medium mb-3">{doctor.specialty}</p>
                  <p className="text-gray-500 text-sm mb-4">{doctor.title}</p>
                  <Link 
                    to="/doctors" 
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                  >
                    View Profile <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link 
              to="/doctors" 
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors"
            >
              View All Doctors <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-primary-100">
              Hear from our patients about their experiences with our healthcare services.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="bg-white text-gray-800 rounded-lg p-6 shadow-md relative"
                variants={fadeIn}
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 rounded-full border-4 border-primary-500 overflow-hidden">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="pt-5">
                  <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary-500 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Ready to Experience Better Healthcare?
                  </motion.h2>
                  <motion.p 
                    className="mb-8 text-secondary-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Schedule your appointment today and take the first step towards better health.
                    Our team of medical professionals is ready to provide you with the highest quality care.
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link 
                      to="/appointment" 
                      className="bg-white text-secondary-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center"
                    >
                      Book Appointment <Calendar className="ml-2 h-5 w-5" />
                    </Link>
                    <a 
                      href="tel:+15551234567" 
                      className="bg-secondary-700 hover:bg-secondary-800 text-white font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center"
                    >
                      Call Us <Phone className="ml-2 h-5 w-5" />
                    </a>
                  </motion.div>
                </div>
                <div className="hidden lg:block">
                  <motion.img 
                    src="https://images.pexels.com/photos/7578902/pexels-photo-7578902.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Happy patient"
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

export default HomePage;