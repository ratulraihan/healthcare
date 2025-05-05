import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Doctor } from '../../types';

interface DoctorCardProps {
  doctor: Doctor;
  detailed?: boolean;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, detailed = false }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className={`${detailed ? 'h-80' : 'h-64'} overflow-hidden`}>
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{doctor.name}</h3>
        <p className="text-primary-500 font-medium mb-2">{doctor.specialty}</p>
        <p className="text-gray-500 text-sm mb-4">{doctor.title}</p>
        
        {detailed && (
          <>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Education:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {doctor.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-gray-600 mb-4">{doctor.bio}</p>
          </>
        )}
        
        <Link 
          to={`/doctors`}
          className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
        >
          {detailed ? 'Book Appointment' : 'View Profile'} <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;