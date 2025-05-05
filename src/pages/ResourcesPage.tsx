import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronDown, ChevronUp, Download, Search } from 'lucide-react';
import { faqs } from '../data/faqs';

const ResourcesPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };
  
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = filterCategory === 'all' || faq.category === filterCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const resources = [
    {
      title: "New Patient Information",
      description: "Forms and information for new patients",
      icon: <FileText className="h-8 w-8 text-primary-500" />,
      links: [
        { name: "New Patient Registration Form", url: "#" },
        { name: "Patient Rights & Responsibilities", url: "#" },
        { name: "Notice of Privacy Practices", url: "#" }
      ]
    },
    {
      title: "Health Education Materials",
      description: "Educational resources on common health conditions",
      icon: <FileText className="h-8 w-8 text-primary-500" />,
      links: [
        { name: "Heart Health Guide", url: "#" },
        { name: "Diabetes Management", url: "#" },
        { name: "Preventive Care Checklist", url: "#" }
      ]
    },
    {
      title: "Insurance Information",
      description: "Information about insurance and billing",
      icon: <FileText className="h-8 w-8 text-primary-500" />,
      links: [
        { name: "Accepted Insurance Plans", url: "#" },
        { name: "Insurance Verification Form", url: "#" },
        { name: "Financial Assistance Program", url: "#" }
      ]
    },
    {
      title: "Medical Records",
      description: "Forms related to medical records",
      icon: <FileText className="h-8 w-8 text-primary-500" />,
      links: [
        { name: "Medical Records Release Form", url: "#" },
        { name: "Request for Medical Records", url: "#" }
      ]
    }
  ];
  
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
              Patient Resources
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
              Access helpful information, forms, and educational materials to support your healthcare journey.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Forms & Documents</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Download and complete these forms before your visit to save time.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {resource.icon}
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">{resource.title}</h3>
                    <p className="text-gray-500">{resource.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 mt-4">
                  {resource.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.url} 
                        className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Find answers to our most frequently asked questions below.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search questions..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <select 
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                  <motion.div 
                    key={faq.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <button
                      className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span className="font-medium text-gray-800">{faq.question}</span>
                      {expandedFaq === faq.id ? (
                        <ChevronUp className="h-5 w-5 text-primary-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-4 pb-4">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No FAQs match your search criteria.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Health Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Health Articles</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Stay informed with our collection of health articles written by our medical professionals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Understanding Heart Health",
                excerpt: "Learn about the key factors that affect your heart health and steps you can take to prevent heart disease.",
                image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600",
                date: "March 15, 2025"
              },
              {
                title: "The Importance of Regular Check-ups",
                excerpt: "Regular check-ups are essential for preventive care. Discover why you shouldn't skip your annual physical.",
                image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=600",
                date: "February 28, 2025"
              },
              {
                title: "Managing Diabetes Effectively",
                excerpt: "Practical tips and strategies for managing diabetes and maintaining a healthy lifestyle.",
                image: "https://images.pexels.com/photos/8460186/pexels-photo-8460186.jpeg?auto=compress&cs=tinysrgb&w=600",
                date: "January 20, 2025"
              }
            ].map((article, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Read More <ChevronDown className="ml-2 h-5 w-5 transform rotate-270" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 transition-colors"
            >
              View All Articles <ChevronDown className="ml-2 h-5 w-5 transform rotate-270" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;