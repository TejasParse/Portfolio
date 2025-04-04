import React from 'react';

import settyl from "./icons/settyl.jpg";
import appscms from "./icons/appscms.png";
import datstek from "./icons/datstek.webp";
import psych from "./icons/psych.webp";

const Experience = () => {
  return (
    <div className="lg:h-screen flex flex-col justify-center px-3 py-3 md:px-0 md:py-0">
      <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 pb-3 mb-6">
        <h1 className="text-xl md:text-3xl font-bold text-light-brown-bg">Experience</h1>
      </div>
      <div className='overflow-scroll'>
        <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 mb-6">
          <div className="md:flex flex-row justify-between border-b-2 text-light-brown-bg pb-2">
            <div className="flex flex-row justify-start gap-2 items-center">
              <img
                className="w-[30px] h-[30px]"
                src={psych}
                alt="Psych for Life"
              />
              <div className="md:text-xl font-bold">
                Software Developer (Part Time) @ Psych For Life
              </div>
            </div>
            <div className="md:text-xl text-black font-semibold">
              Dec 2024 - Present
            </div>
          </div>
          <div className="p-4 md:font-md">
            <ul className="list-disc">
              <li>
                Developed reusable UI components in <b>React.js</b> and <b>TypeScript</b>, forming the foundational building blocks for interactive learning lessons.
              </li>
              <li>
                Reviewed Github PRs, identifying critical bugs and optimizing code performance while enforcing best practices in code quality.
              </li>
              <li>
                Created new schemas and optimized existing schemas in MongoDB, while improving server-side logic in <b>Node.js</b> and <b>Express.js</b>.
              </li>
              <li>
                Deployed and maintained application services on <b>AWS (EC2, S3)</b> and containerized components using Docker for better scalability.
              </li>
            </ul>
          </div>
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
              Jan 2024 - June 2024
            </div>
          </div>
          <div className="p-4 md:font-md">
            <ul className="list-disc">
              <li>
                Delivered a Sports Content Management System using <span className="font-bold">ReactJs, MongoDB, and NodeJs,</span> optimizing search queries with complex <span className="font-bold">MongoDB aggregation pipelines by 14%.</span>
              </li>
              <li>
                Developed mobile and web apps for managing electoral campaigns using <span className="font-bold">FastAPI, PostgreSQL, and React.</span>
              </li>
              <li>
                Architected and implemented a legal document management suite using the <span className="font-bold">PERN</span> stack and <span className="font-bold">Google Docs API.</span>, enabling admins to build dynamic templates for users to generate legal documents.
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
                Collaborated on the company’s{" "}
                <span className="font-bold">ReactJs Micro Frontend</span>{" "}
                architecture and developed several modules, including the
                inventory management module of their supply chain suite.
              </li>
              <li>
                Responsible for engineering <span className="font-bold">20+ RESTful endpoints</span> within the <span className="font-bold">Nodejs</span> backend microservice architecture.
              </li>
              <li>
                <span className="font-bold">Migrated</span> Kafka Events to Azure Event Hubs, <span className="font-bold">reducing latency by 19%</span>, and automated database synchronization with MongoDB triggers.

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
                reaching a milestone of <span className="font-bold">7,00,000 sessions per month.</span> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience