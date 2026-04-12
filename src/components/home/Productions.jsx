import ProductionData from "../../data/productions.json";
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

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const projectsRows = chunkArray(ProductionData, 3);

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
        className="w-full h-96 rounded-lg mb-4"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
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
            <img
              src={img}
              alt={`thumb-${i}`}
              className="h-20 w-full object-cover rounded-lg cursor-pointer"
            />
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
        Livestream Productions
      </h2>

      {projectsRows.map((projectsRow, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap md:mx-6">
          {projectsRow.map((project, projectIndex) => {
            const images = [project.main_image, ...project.sub_images];

            return (
              <div key={projectIndex} className="w-full px-4 mb-8">
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition duration-300">
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>

                  <Carousel images={images} />

                  <div className="p-4">
                    <p className="text-gray-700 mb-4">{project.description}</p>

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
                        <Link
                          to={project.technical_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mr-4"
                        >
                          <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className="mr-2"
                          />
                          {project.technical_link_label}
                        </Link>

                        <Link
                          to={project.youtube_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300 mr-4"
                        >
                          <FontAwesomeIcon
                            icon={faVideoCamera}
                            className="mr-2"
                          />
                          {project.youtube_link_label}
                        </Link>
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
