import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import AboutMe from "./AboutMe/AboutMe";
import Resume from "./Resume/Resume";
import Leadership from "./Leadership/Leadership";
import SpeedCubing from "./SpeedCubing/SpeedCubing";

const MainApp = (props)=>{

    return (
      <div className="grid grid-cols-10">
        <div className="hidden lg:block col-span-none lg:col-span-2 h-screen bg-brown-bg">
          <Navbar />
        </div>
        <div className="col-span-10 lg:col-span-8 sm:px-3 lg:px-9">
          <Routes>
            <Route index element={<AboutMe />} path="/" />
            <Route index element={<Education />} path="/Education" />
            <Route index element={<Skills />} path="/Skills" />
            <Route index element={<Experience />} path="/Experience" />
            <Route index element={<Projects />} path="/Projects" />
            <Route index element={<Leadership />} path="/Leadership" />
            <Route index element={<SpeedCubing />} path="/SpeedCubing" />
            <Route index element={<Resume />} path="/Resume" />
          </Routes>
        </div>
      </div>
    );

}

export default MainApp;