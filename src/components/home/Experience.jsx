import React from 'react';
import experienceData from '../../data/experience.json';
import { Link } from 'react-router';

const Experience = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="grid mx-8 md:grid-cols-2 gap-8">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start mb-2 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:transform hover:scale-105 transition duration-300"

          >
            <img src={experience.image} alt={experience.position} className="w-1/4 h-full object-cover object-center" draggable="false" />
            <div className="flex-1 mx-4">
              <p className="font-bold">
                {experience.position} - {""}
                <Link
                  to={experience.link}
                  className="text-blue-500 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.company}
                </Link>
              </p>
              <p className="text-lg">{experience.year}</p>
              <ul className="list-disc list-inside">
                {experience.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
