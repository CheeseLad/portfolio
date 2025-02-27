import React from "react";
import {
  faServer,
  faEnvelope,
  faFileLines,
  faCamera,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

const Intro = () => {
  return (
    <div className="bg-gray-800 text-white py-12 text-center">
      <Link to="/">
        <img
          src="jake.webp"
          alt="Jake Farrell"
          className="rounded-full w-48 h-48 mx-auto mb-4 transform hover:scale-110 transition duration-300"
        ></img>
      </Link>
      <h1 className="text-3xl font-bold mb-2">Jake Farrell</h1>
      <p className="text-lg mb-6 px-4">
        DCU Computer Science Student & Full-Stack Software Engineer
      </p>
      <div className="flex justify-center flex-wrap">
        <Link
          to="https://github.com/CheeseLad"
          target="_blank"
          className="hover:text-gray-700 transform hover:scale-110 transition duration-300"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-white text-3xl mr-4 mb-2"
          />
        </Link>
        <Link
          to="https://www.linkedin.com/in/jake-farrell-2a4674239"
          target="_blank"
          className="hover:text-blue-700 transform hover:scale-110 transition duration-300"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white text-3xl mr-4 mb-2"
          />
        </Link>
        <Link
          to="https://www.instagram.com/jakefarrell2003"
          target="_blank"
          className="hover:text-pink-500 transform hover:scale-110 transition duration-300"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-white text-3xl mr-4 mb-2"
          />
        </Link>
        <Link
          to="mailto:jake_farrell@outlook.com"
          className="hover:text-blue-500 transform hover:scale-110 transition duration-300"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-white text-3xl mb-2"
          />
        </Link>
      </div>

      <div className="flex justify-center flex-wrap">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mt-4 mx-1 min-w-[140px] text-center"
        >
          <FontAwesomeIcon icon={faHouse} className="mr-2" />
          Home
        </Link>
        <Link
          to="/photography"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mt-4 mx-1 min-w-[140px] text-center"
        >
          <FontAwesomeIcon icon={faCamera} className="mr-2" />
          Photography
        </Link>
      </div>

      <div className="flex justify-center flex-wrap">
        <Link
          to="/Jake_Farrell_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mt-4 mx-1 min-w-[140px] text-center"
        >
          <FontAwesomeIcon icon={faFileLines} className="mr-2" />
          Résumé / CV
        </Link>
        <Link
          to="https://home.jakefarrell.ie"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mt-4 mx-1 min-w-[180px] text-center"
        >
          <FontAwesomeIcon icon={faServer} className="mr-2" />
          Home Server Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Intro;
