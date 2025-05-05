import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const statsData = [
    { icon: <Users className="h-8 w-8 text-primary-500" />, value: "25+", label: "Experienced Doctors" },
    { icon: <Heart className="h-8 w-8 text-primary-500" />, value: "15,000+", label: "Happy Patients" },
    { icon: <Award className="h-8 w-8 text-primary-500" />, value: "25", label: "Years of Experience" },
    { icon: <Clock className="h-8 w-8 text-primary-500" />, value: "24/7", label: "Emergency Service" },
  ];
  
  const values = [
    { 
      title: "Patient-Centered Care", 
      description: "We put our patients first, focusing on personalized care that addresses individual needs and concerns."
    },
    { 
      title: "Excellence", 
      description: "We strive for excellence in everything we do, from clinical care to patient communication and facility maintenance."
    },
    { 
      title: "Integrity", 
      description: "We act with honesty, transparency, and ethical behavior in all our interactions with patients and colleagues."
    },
    { 
      title: "Compassion", 
      description: "We approach every patient with empathy and understanding, recognizing the emotional aspects of healthcare."
    },
    { 
      title: "Innovation", 
      description: "We embrace new technologies and approaches that improve patient outcomes and experience."
    },
    { 
      title: "Teamwork", 
      description: "We collaborate effectively across disciplines to ensure coordinated, comprehensive care."
    },
  ];
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About MediCare</h1>
              <div className="w-20 h-1 bg-white mb-6"></div>
              <p className="text-lg mb-6 text-primary-100">
                For over 25 years, MediCare has been a trusted provider of exceptional healthcare services 
                in the community. Our commitment to excellence and patient-centered care has made us a 
                leader in the healthcare industry.
              </p>
              <p className="mb-8 text-primary-100">
                Our team of board-certified physicians, experienced nurses, and skilled support staff work 
                together to provide comprehensive care using the latest medical technology and research-backed 
                treatments. We're dedicated to improving the health and wellbeing of every patient we serve.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="MediCare Building" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-primary-600 font-bold text-xl">Established in 2000</p>
                <p className="text-gray-500">Serving the community</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/4021808/pexels-photo-4021808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Medical team discussion" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-primary-500/10 rounded-lg"></div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission & Vision</h2>
              <div className="w-20 h-1 bg-primary-500 mb-6"></div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-primary-600">Our Mission</h3>
                <p className="text-gray-600">
                  To provide exceptional healthcare services with compassion and expertise, 
                  improving the health and wellbeing of our community through personalized care, 
                  education, and preventive medicine.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-primary-600">Our Vision</h3>
                <p className="text-gray-600">
                  To be the healthcare provider of choice, recognized for clinical excellence, 
                  patient-centered care, and innovative approaches to healthcare delivery. 
                  We aim to create healthier communities through accessible, high-quality medical services.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-600">Our Promise</h3>
                <p className="text-gray-600">
                  We promise to listen to your concerns, respect your preferences, and work with you 
                  as a partner in your healthcare journey. Your wellbeing is our priority, and we're 
                  committed to providing the highest standard of care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Core Values</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              These principles guide every aspect of our operations and patient care approach.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Leadership</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Meet the experienced professionals who guide our organization and maintain our commitment to excellence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Robert Stevens",
                position: "Chief Executive Officer",
                image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
                bio: "Dr. Stevens has over 25 years of experience in healthcare management and clinical practice. His leadership has been instrumental in MediCare's growth and commitment to excellence."
              },
              {
                name: "Dr. Amara Patel",
                position: "Chief Medical Officer",
                image: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=600",
                bio: "As CMO, Dr. Patel oversees all clinical operations and ensures that MediCare maintains the highest standards of patient care across all departments and specialties."
              },
              {
                name: "Sarah Johnson",
                position: "Chief Operations Officer",
                image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600",
                bio: "With a background in healthcare administration, Sarah leads our operational teams, focusing on efficiency, patient experience, and organizational excellence."
              }
            ].map((leader, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{leader.name}</h3>
                  <p className="text-primary-500 font-medium mb-4">{leader.position}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-500 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.h2 
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Join Our MediCare Family
                  </motion.h2>
                  <motion.p 
                    className="mb-8 text-primary-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Experience the MediCare difference today. Our team is ready to provide you with 
                    the highest quality healthcare in a comfortable, caring environment.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link 
                      to="/appointment" 
                      className="inline-flex items-center px-6 py-3 bg-white text-primary-600 hover:bg-gray-100 font-medium rounded-md transition-colors"
                    >
                      Schedule an Appointment <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>
                </div>
                <div className="hidden lg:block">
                  <motion.img 
                    src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Happy patient with doctor"
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

export default AboutPage;