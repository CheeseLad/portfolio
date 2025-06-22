import "./index.css";
import Intro from "./components/layout/Intro.jsx";
import Footer from "./components/layout/Footer.jsx";
import Projects from "./components/home/Projects.jsx";
import Experience from "./components/home/Experience.jsx";
import Skills from "./components/home/Skills.jsx";
import PhotographyGallery from "./components/photography/PhotographyGallery.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import Error from "./components/other/Error.jsx";
import Awards from "./components/home/Awards.jsx";
import Events from "./components/home/Events.jsx";
//import DCUSolarRacing from "./components/photography/DCUSolarRacing.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Intro />
            <div className="bg-gray-300">
              <Projects />
              <Experience />
              <Awards />
              <Skills />
            </div>
            <Footer />
          </div>
        }
      />
      <Route
        path="/photography"
        element={
          <div className="bg-gray-300 min-h-screen flex flex-col">
            <Intro />
            <div className="flex-grow">
              <PhotographyGallery />
            </div>
            <Footer />
          </div>
        }
      />
      <Route
        path="/photography/dcu-solar-racing"
        element={
          <div className="bg-gray-300 min-h-screen flex flex-col">
            <Intro />
            <div className="flex-grow"></div>
            {/*<DCUSolarRacing />*/}
            <Footer />
          </div>
        }
      />
      <Route
        path="/events"
        element={
          <div className="bg-gray-300 min-h-screen flex flex-col">
            <Intro />
            <div className="flex-grow"></div>
            <Events />
            <Footer />
          </div>
        }
      />
      <Route
        path="*"
        element={
          <div>
            <Intro />
            <div className="bg-gray-300">
              <Error />
            </div>
            <Footer />
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);
