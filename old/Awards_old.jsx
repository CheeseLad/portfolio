import React from 'react';
import awardsData from '../../data/awards.json';
import { Link } from 'react-router';

const Awards = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Awards</h2>
      <div className="relative flex flex-col items-center">
        {/* Vertical dotted timeline line */}
        <div className="hidden md:block absolute w-1 border-l-2 border-dotted border-gray-400 h-full left-1/2 transform -translate-x-1/2"></div>

        {awardsData.map((award, index) => (
          <div
            key={index}
            className={`mb-8 flex flex-col md:flex-row items-center w-full ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}
          >
            <div className="md:w-1/2 md:px-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <p className="font-bold text-xl mb-2">{award.title}</p>
                <p className="text-gray-600 mb-2">{award.year}</p>
                {award.link && (
                  <Link
                    to={award.link}
                    className="text-blue-500 hover:text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More Info
                  </Link>
                )}
                {award.description && (
                  <p className="mt-2 text-gray-700">{award.description}</p>
                )}
              </div>
            </div>

            {/* Circle connector */}
            <div className="hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-sm font-bold absolute left-1/2 transform -translate-x-1/2">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
