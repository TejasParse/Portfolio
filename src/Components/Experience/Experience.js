import React from 'react';

import settyl from "./icons/settyl.jpg";
import appscms from "./icons/appscms.png";
import datstek from "./icons/datstek.webp";

const Experience = () => {
  return (
    <div className="md:h-screen flex flex-col justify-center px-3 py-3 md:px-0 md:py-0">
      <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 pb-3 mb-6">
        <h1 className="text-xl md:text-3xl font-bold text-light-brown-bg">Experience</h1>
      </div>
      <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 mb-6">
        <div className="md:flex flex-row justify-between border-b-2 text-light-brown-bg pb-2">
          <div className="flex flex-row justify-start gap-2 items-center">
            <img
              className="w-[30px] h-[30px]"
              src={datstek}
              alt="DatStek"
            />
            <div className="md:text-xl font-bold">
              Full Stack Dev Intern @ DatStek
            </div>
          </div>
          <div className="md:text-xl text-black font-semibold">
            Jan 2024 - Present
          </div>
        </div>
        <div className="p-4 md:font-md">
          <ul className="list-disc">
            <li>
              Worked on Sports Content Management system in MERN stack. Implemented complex mongodb aggregation
              pipeline to optimize search queries.
            </li>
            <li>
              Used <span className="font-bold">Typescript</span> for more robust error free frontend.
            </li>
          </ul>
        </div>
      </div>
      <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 mb-6">
        <div className="md:flex flex-row justify-between border-b-2 text-light-brown-bg pb-2">
          <div className="flex flex-row justify-start gap-2 items-center">
            <img
              className="w-[30px] h-[30px]"
              src={settyl}
              alt="Settyl"
            />
            <div className="md:text-xl font-bold">
              Full Stack Dev Intern @ Settyl Tech Private Ltd
            </div>
          </div>
          <div className="md:text-xl text-black font-semibold">
            May 2023 - Sept 2023
          </div>
        </div>
        <div className="p-4 md:font-md">
          <ul className="list-disc">
            <li>
              Have worked on the company’s{" "}
              <span className="font-bold">ReactJs Micro Frontend</span>{" "}
              architecture and developed several modules, including the
              inventory management module of their supply chain suite.
            </li>
            <li>
              Developed 20+ RESTful APIs in their backend microservice
              architecture in <span className="font-bold">Nodejs</span> and
              created several <span className="font-bold">MongoDB</span>{" "}
              triggers and <span className="font-bold">Azure</span> Functions
              while working closely with the Founder.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2">
        <div className="md:flex flex-row justify-between border-b-2 text-light-brown-bg pb-2">
          <div className="flex flex-row justify-start gap-2 items-center">
            <img
              className="w-[30px] h-[30px]"
              src={appscms}
              alt="Appscms"
            />
            <div className="md:text-xl font-bold">
              Software Development Intern @ Appscms Technologies
            </div>
          </div>
          <div className="md:text-xl text-black font-semibold">
            July 2022 - Nov 2022
          </div>
        </div>
        <div className="p-4 md:font-md">
          <ul className="list-disc">
            <li>
              Built 50+ GIF processing tools for the company on the front end.
            </li>
            <li>
              Used Jekyll to generate the website and{" "}
              <span className="font-bold">
                HTML, CSS and Vanilla Javascript
              </span>{" "}
              to work on the GIF processing logic.
            </li>
            <li>
              Developed and tested new features in the company’s flagship
              product with a team of developers which assisted the company in
              reaching a milestone of 7,00,000 sessions per month.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience