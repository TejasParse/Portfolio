import CodeforcesLogo from "./icons/codeforces.png"
import Github from "./icons/github.png"
import Linkedin from "./icons/linkedin.png"
import WCA from "./icons/wca.svg"

const AboutMe = (props) => {
  return (
    <div className="h-screen flex flex-col justify-center pe-24">
      <h1 className="text-5xl font-bold pb-2">
        Tejas Ajay <span className="text-brown-bg">Parse</span>
      </h1>
      <h1 className="text-xl font-bold pb-10">
        Hyderabad, IND{" "}
        <span className="text-brown-bg">tejasparse1@gmail.com</span>
      </h1>
      <div className="text-lg mb-1">
        I am a passionate Machine Learning and Web Development Enthusiast,
        currently pursuing my B.Tech in Computer Science with specialization in
        AI & ML from IIIT Sri City with a CGPA of <b>9.33</b>{" "}
      </div>
      <div className="text-lg mb-4">
        During my B.Tech I have worked on several projects in Web Development
        and Machine Learning. I also have 10 months of Intern experience as a
        Web Developer particularly in MERN stack. Looking forward I am looking for
        full time Machine Learning and Web Development Internships starting Janurary 2024.
      </div>
      <div className="flex flex-row gap-x-4">
        <a target="_blank" href="https://codeforces.com/profile/TejasParse03">
            <img className="rounded aspect-square" style={{ width: "35px" }} src={CodeforcesLogo} alt="Codeforces" />
        </a>
        <a target="_blank" href="https://github.com/TejasParse">
            <img className="rounded aspect-square" style={{ width: "35px" }} src={Github} alt="" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/tejas-ajay-parse-b171211b6/">
            <img className="rounded aspect-square" style={{ width: "35px" }} src={Linkedin} alt="" />
        </a>
        <a target="_blank" href="https://www.worldcubeassociation.org/persons/2017PARS06">
            <img className="rounded aspect-square" style={{ width: "35px" }} src={WCA} alt="" />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
