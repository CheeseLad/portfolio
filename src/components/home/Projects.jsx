import React from 'react';
import ProjectData from '../../data/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ButtonRow from '../layout/ButtonRow';
import { Link } from 'react-router';

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const projectsRows = chunkArray(ProjectData, 3);

const Projects = () => {
  return (
    <div className="container mx-auto pb-12 pt-6">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      {/*<ButtonRow />*/}
      {projectsRows.map((projectsRow, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap mx-6">
          {projectsRow.map((project, projectIndex) => (
            <div key={projectIndex} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:transform hover:scale-105 transition duration-300 block">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-center" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4 min-h-36">{project.description}</p>
                  <div className="flex flex-wrap mb-2">
                    {project.techStack.map((tech, techIndex) => (
                      <div key={techIndex} className="bg-green-500 text-white rounded-full px-2 py-1 text-xs mr-2 mb-2">
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <div className="flex justify-start">
                      <Link
                        to={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mr-4"
                      >
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-2" />
                        View Project Live
                      </Link>
                      {project.extra && (
                      <div className="bg-yellow-500 text-black px-4 py-2 rounded-md transition duration-300 mr-4">
                        <span>{project.extra}</span>
                      </div>
                    )}
                    </div>
                  {project.codeLink && (
                    <div className="flex justify-end">
                      <Link
                          to={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </Link>
                    </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Projects;