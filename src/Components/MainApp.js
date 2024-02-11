import Navbar from "./Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
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
        <div className="md:hidden">
          <div><Link to={"/"}>About Me</Link></div>
          <div><Link to={"/Education"}>Education</Link></div>
          <div><Link to={"/Skills"}>Skills</Link></div>
          <div><Link to={"/Experience"}>Experience</Link></div>
          <div><Link to={"/Projects"}>Projects</Link></div>
          <div><Link to={"/Leadership"}>Leadership</Link></div>
          <div><Link to={"/SpeedCubing"}>SpeedCubing</Link></div>
          <div><Link to={"/Resume"}>Resume</Link></div>
        </div>
        <div className="col-span-10 lg:col-span-8 sm:px-3 lg:px-9">
          <Routes>
            <Route index element={<AboutMe />} path="/" />
            <Route element={<Education />} path="/Education" />
            <Route element={<Skills />} path="/Skills" />
            <Route element={<Experience />} path="/Experience" />
            <Route element={<Projects />} path="/Projects" />
            <Route element={<Leadership />} path="/Leadership" />
            <Route element={<SpeedCubing />} path="/SpeedCubing" />
            <Route element={<Resume />} path="/Resume" />
          </Routes>
        </div>
      </div>
    );

}

export default MainApp;