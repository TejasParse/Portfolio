import React from 'react';

import settyl from "./icons/settyl.jpg";
import appscms from "./icons/appscms.png";

const Experience = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
        
        <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 pb-3 mb-6">
          <h1 className="text-3xl font-bold text-light-brown-bg">Experience</h1>
        </div>
       <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 mb-6">
        <div className="flex flex-row justify-between border-b-2 text-light-brown-bg pb-2">
          <div className='flex flex-row justify-start gap-2'>
            <img className="" style={{ width: "30px" }} src={settyl} alt="Settyl" /> 
            <div className="text-xl font-bold">
              Full Stack Dev Intern @ Settyl Tech Private Ltd
            </div>
          </div>
          <div className="text-xl text-black font-semibold">May 2023 - Sept 2023</div>
        </div>
        <div className="p-4 font-md">
          <ul className="list-disc">
            <li>
              Have worked on the company’s ReactJs micro frontend architecture
              and developed several modules, including the inventory management
              module of their supply chain suite.
            </li>
            <li>
              Developed 20+ RESTful APIs in their backend microservice
              architecture in Nodejs and created several MongoDB triggers and
              Azure Functions while working closely with the Founder.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2">
        <div className="flex flex-row justify-between border-b-2 text-light-brown-bg pb-2">
          <div className='flex flex-row justify-start gap-2'>
            <img className="" style={{ width: "30px" }} src={appscms} alt="Appscms" /> 
            <div className="text-xl font-bold">
              Software Development Intern @ Appscms Technologies
            </div>
          </div>
          <div className="text-xl text-black font-semibold">July 2022 - Nov 2022</div>
        </div>
        <div className="p-4 font-md">
          <ul className="list-disc">
            <li>
              Built 50+ GIF processing tools for the
              company on the front end using Web Assembly.
            </li>
            <li>
              Used Jekyll to generate the website and HTML, CSS and Vanilla
              Javascript to work on the GIF processing logic.
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