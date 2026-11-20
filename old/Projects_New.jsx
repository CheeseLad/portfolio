import React, { useState, useMemo } from 'react';
import ProjectData from '../../data/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Project categorization mapping
  const projectCategories = {
    'CollegeGuide': 'College',
    'Home Server, VPS and Documentation': 'Personal',
    'DCU Media Production Society Website': 'Society',
    'DCU Fotosoc Website': 'Society',
    'Redbrick Email Generator': 'Society',
    'Clubs & Societies API': 'Personal',
    'The College View App': 'Society'
  };

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return ProjectData;
    }
    return ProjectData.filter(project => 
      projectCategories[project.title] === activeFilter
    );
  }, [activeFilter]);

  // Plausible tracking function
  const trackClick = (action, details = {}) => {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible(action, { props: details });
    }
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    trackClick('Project_Filter', { filter: filter, location: 'Projects' });
  };

  if (ProjectData.length === 0) return null;

  const filterButtons = ['All', 'College', 'Personal', 'Society'];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
      
      

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap mb-4">
        {filterButtons.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`px-4 py-2 rounded-md transition duration-300 mt-2 mx-1 min-w-[100px] text-center cursor-pointer ${
              activeFilter === filter
                ? 'bg-blue-600 text-white'
                : 'bg-gray-400 hover:bg-blue-600 text-black'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Swiper Carousel */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={filteredProjects.length > 1}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="projects-swiper"
          key={activeFilter} // Force re-render when filter changes
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={`${activeFilter}-${index}`}>
              <div className="px-4 mb-8">
                <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg hover:transform hover:scale-105 transition duration-300 block h-full">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover object-center"
                    draggable={false}
                  />
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
                    </div>
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
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        {filteredProjects.length > 3 && (
          <>
            <div className="swiper-button-prev-custom absolute -left-14 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-4 px-5 rounded-full transition duration-300 z-10 cursor-pointer">
              <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
            </div>
            <div className="swiper-button-next-custom absolute -right-14 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-4 px-5 rounded-full transition duration-300 z-10 cursor-pointer">
              <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
            </div>
          </>
        )}

        {/* Custom Pagination Dots */}
        {filteredProjects.length > 3 && (
          <div className="swiper-pagination-custom flex justify-center mt-6 space-x-2"></div>
        )}
      </div>

      {/* Show message when no projects match filter */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No projects found for the selected category.</p>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .projects-swiper {
          padding: 20px 0;
        }
        
        .swiper-slide {
          height: auto;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ffffff;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet:hover {
          background: #9ca3af;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #3b82f6;
        }
      `}</style>
    </div>
  );
};

export default Projects;
