import React from 'react';
import awardsData from '../../data/events.json';
import { Link } from 'react-router';

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-12">Events</h2>

      <div className="grid mx-8 mr-60 md:grid-cols-1 gap-8">
        {awardsData.map((award, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-lg hover:transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">{award.title}</h3>
            <img
              src={'/dcumps.webp'}
              alt={`Event image`}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />

            {/* Description */}
            <p className="text-gray-700 mb-4">{award.description}</p>

          

        
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
