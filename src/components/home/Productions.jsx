import ProductionData from "../../data/productions.json";
import TechnicalDiagramData from "../../data/technical_diagrams.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { useState } from "react";
import PropTypes from "prop-types";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const isVideo = (filename) => {
  const videoExtensions = [".mp4", ".mov", ".avi", ".webm", ".mkv"];
  return videoExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
};

const projectsRows = chunkArray(ProductionData, 2);

const technicalDiagramsRows = chunkArray(TechnicalDiagramData, 3);

const Carousel = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  return (
    <div className="px-4">
      <Swiper
        modules={[Navigation, Thumbs, Autoplay]}
        navigation
        loop={true}
        autoplay={
          autoplayEnabled ? { delay: 4000, disableOnInteraction: false } : false
        }
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full h-[75vh] rounded-lg mb-4"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            {isVideo(img) ? (
              <video
                src={img}
                controls
                className="w-full h-[75vh] object-cover rounded-lg mb-4"
                onPlay={() => setAutoplayEnabled(false)}
              />
            ) : (
              <img
                src={img}
                alt={`slide-${i}`}
                className="w-full h-[75vh] object-cover rounded-lg mb-4 cursor-grab"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={8}
        className="mt-2 px-2"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} onClick={() => setAutoplayEnabled(false)}>
            {isVideo(img) ? (
              <div className="relative h-20 w-full bg-gray-800 rounded-lg cursor-pointer flex items-center justify-center">
                <video
                  src={img}
                  className="h-20 w-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                  <FontAwesomeIcon
                    icon={faVideoCamera}
                    className="text-white text-xl"
                  />
                </div>
              </div>
            ) : (
              <img
                src={img}
                alt={`thumb-${i}`}
                className="h-20 w-full object-cover rounded-lg cursor-pointer"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Productions = () => {
  return (
    <div className="container mx-auto pb-12 pt-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Livestream Production Experience
      </h2>

      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition duration-300 mb-8 w-[calc(100%-2rem)] max-w-5xl mx-auto">
        {/* <div className="p-4">
          <h3 className="text-xl text-center font-bold">Experience Summary</h3>
        </div> */}

        <div className="p-2">
          <p
            className="text-gray-700 mb-2"
            dangerouslySetInnerHTML={{
              __html:
                "Over the course of my university degree, I was heavily involved with the <b><a href='https://dcumps.ie' target='_blank' rel='noopener noreferrer'>DCU Media Production Society</a></b>, where I gained a love for live productions and all the equipment and technical setup involved to put together large scale events such as 24 hour continuous TV broadcasts and university graduation livestreams for 1000s of students. In coordinating the technical setups for these live productions, I've gained a wide range of experience in equipment troubleshooting, problem solving, camera operation, live video switching, OBS configuration and custom software creation for live production events. Below are the technical diagrams I've created for these live productions, along with the live production events I've been involved with.",
            }}
          ></p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-10">
        Technical Setup Diagrams
      </h2>

      {technicalDiagramsRows.map((projectsRow, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap md:mx-6">
          {projectsRow.map((project, projectIndex) => (
            <div key={projectIndex} className="w-full lg:w-1/2 px-4 mb-8">
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:transform hover:scale-105 transition duration-300 block">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  {/* <p className="text-gray-700 mb-4 min-h-36">{project.description}</p> */}
                  <div className="mt-4">
                    <a
                      href={project.technical_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mr-4"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="mr-2"
                      />
                      {project.technical_link_label}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      <h2 className="text-3xl font-bold text-center mb-10">
        Live Production Events
      </h2>

      {projectsRows.map((projectsRow, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 md:mx-3"
        >
          {projectsRow.map((project, projectIndex) => {
            const images = [project.main_image, ...project.sub_images];

            return (
              <div key={projectIndex} className="w-full px-4 mb-8 mt-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition duration-300">
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>

                  <Carousel images={images} />

                  <div className="p-4">
                    <p
                      className="text-gray-700 mb-4"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    ></p>

                    <p className="text-gray-700 text-xl font-semibold mb-2">
                      {project.statistics_title}:
                    </p>

                    <ul className="text-gray-700 list-disc list-inside mb-4">
                      {project.statistics.map((stat, index) => (
                        <li key={index}>
                          <span className="font-medium">{stat.label}:</span>{" "}
                          {stat.value}
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-between">
                      <div className="flex justify-start">
                        {project.technical_link &&
                          project.technical_link_label && (
                            <a
                              href={project.technical_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mr-4"
                            >
                              <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                className="mr-2"
                              />
                              {project.technical_link_label}
                            </a>
                          )}

                        {project.youtube_link && project.youtube_link_label && (
                          <a
                            href={project.youtube_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300 mr-4"
                          >
                            <FontAwesomeIcon
                              icon={faVideoCamera}
                              className="mr-2"
                            />
                            {project.youtube_link_label}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Productions;
