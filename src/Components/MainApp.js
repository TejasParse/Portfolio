import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Achievements from "./Achievements/Achievements";
import Projects from "./Projects/Projects";
import AboutMe from "./AboutMe/AboutMe";
import Resume from "./Resume/Resume";

const MainApp = (props)=>{

    return (
      <div className="grid grid-cols-10">
        <div className="col-span-2 h-screen bg-brown-bg">
          <Navbar />
        </div>
        <div className="col-span-8 px-9">
          <Routes>
            <Route index element={<AboutMe />} path="/" />
            <Route index element={<Education />} path="/Education" />
            <Route index element={<Skills />} path="/Skills" />
            <Route index element={<Experience />} path="/Experience" />
            <Route index element={<Achievements />} path="/Achievements" />
            <Route index element={<Projects />} path="/Projects" />
            <Route index element={<Resume />} path="/Resume" />
          </Routes>
        </div>
      </div>
    );

}

export default MainApp;