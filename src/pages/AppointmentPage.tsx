import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, FileText, Info, CheckCircle } from 'lucide-react';
import { doctors } from '../data/doctors';
import { useForm } from 'react-hook-form';
import { AppointmentFormData } from '../types';

const AppointmentPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<AppointmentFormData>();
  
  const onSubmit = (data: AppointmentFormData) => {
    console.log(data);
    // Here you would typically send the data to your backend
    alert('Appointment request submitted successfully!');
  };
  
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
              Schedule an Appointment
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
              Complete the form below to schedule your appointment with one of our healthcare professionals.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Appointment Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Appointment Request Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                      <User className="h-5 w-5 mr-2 text-primary-500" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          {...register('firstName', { required: 'First name is required' })}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          {...register('lastName', { required: 'Last name is required' })}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: 'Invalid email address'
                            }
                          })}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone', { 
                            required: 'Phone number is required',
                            pattern: {
                              value: /^[0-9\-\+\(\)\s]+$/,
                              message: 'Invalid phone number'
                            }
                          })}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Appointment Details */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-primary-500" />
                      Appointment Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          {...register('date', { required: 'Date is required' })}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.date ? 'border-red-500' : 'border-gray-300'
                          }`}
                          min={new Date().toISOString().split('T')[0]}
                        />
                        {errors.date && (
                          <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Time *
                        </label>
                        <select
                          id="time"
                          {...register('time', { required: 'Time is required' })}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                            errors.time ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a time</option>
                          <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                          <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                          <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
                        </select>
                        {errors.time && (
                          <p className="mt-1 text-sm text-red-500">{errors.time.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Doctor
                      </label>
                      <select
                        id="doctor"
                        {...register('doctor')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">No preference</option>
                        {doctors.map((doctor) => (
                          <option key={doctor.id} value={doctor.name}>
                            {doctor.name} - {doctor.specialty}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="mt-6">
                      <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                        Reason for Visit *
                      </label>
                      <textarea
                        id="reason"
                        {...register('reason', { required: 'Reason is required' })}
                        rows={3}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.reason ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Please briefly describe your symptoms or reason for appointment"
                      ></textarea>
                      {errors.reason && (
                        <p className="mt-1 text-sm text-red-500">{errors.reason.message}</p>
                      )}
                    </div>
                    
                    <div className="mt-6">
                      <div className="flex items-center">
                        <input
                          id="isNewPatient"
                          type="checkbox"
                          {...register('isNewPatient')}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="isNewPatient" className="ml-2 block text-sm text-gray-700">
                          I am a new patient
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional Information */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                      <Info className="h-5 w-5 mr-2 text-primary-500" />
                      Additional Information
                    </h3>
                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                        Any additional information or special requests?
                      </label>
                      <textarea
                        id="additionalInfo"
                        {...register('additionalInfo')}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="E.g., mobility needs, interpreter requirements, etc."
                      ></textarea>
                    </div>
                    
                    <div className="mt-6">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="consent"
                            type="checkbox"
                            className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                            required
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="consent" className="text-gray-600">
                            I consent to being contacted about my appointment request and acknowledge the 
                            <a href="#" className="text-primary-600 hover:underline"> privacy policy</a>.
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center"
                  >
                    Submit Appointment Request <Calendar className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="sticky top-32"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-primary-500 text-white p-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Info className="h-5 w-5 mr-2" />
                      Appointment Information
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-primary-500 mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-800">Hours</h4>
                          <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 7:00 PM</p>
                          <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                          <p className="text-gray-600 text-sm">Sunday: Closed</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-primary-500 mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-800">Phone</h4>
                          <p className="text-gray-600 text-sm">
                            For urgent matters, please call:
                            <br />
                            <a href="tel:+15551234567" className="text-primary-600">(555) 123-4567</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <FileText className="h-5 w-5 text-primary-500 mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-800">New Patients</h4>
                          <p className="text-gray-600 text-sm">
                            Please arrive 15 minutes early to complete paperwork or
                            <a href="#" className="text-primary-600"> download forms</a> to fill out beforehand.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-primary-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-800 mb-2">What to Expect</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 mr-2" />
                          <span className="text-gray-600">Form submission confirmation via email</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 mr-2" />
                          <span className="text-gray-600">Call from our staff to confirm your appointment</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 mr-2" />
                          <span className="text-gray-600">Reminder notification 24 hours before appointment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-secondary-500 text-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3">Need Urgent Care?</h3>
                  <p className="mb-4">
                    For medical emergencies, please call 911 or go to the nearest emergency room.
                  </p>
                  <p className="text-secondary-100 text-sm">
                    Our urgent care clinic is available for non-life-threatening conditions requiring prompt attention.
                  </p>
                  <div className="mt-4 flex space-x-2">
                    <div className="bg-white text-secondary-600 px-4 py-2 rounded-md font-medium text-sm">
                      Walk-in Hours: 8AM - 8PM
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;