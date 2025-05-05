import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white text-gray-800 rounded-lg p-6 shadow-md relative">
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
    </div>
  );
};

export default TestimonialCard;