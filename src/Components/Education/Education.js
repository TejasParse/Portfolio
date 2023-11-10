import React from 'react';

import iiits from "./icons/iiits.png"

const Education = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
        <div className="border-y-2 border-brown-bg py-3">
          <div className="flex flex-row justify-between">
            <div className='flex flex-row justify-start gap-2'>
              <div className="text-xl font-bold">
                Indian Institute of Information Technology, Sri City
              </div>
              <img className="" style={{ width: "30px" }} src={iiits} alt="Settyl" /> 
            </div>
            <h1 className="text-xl font-bold">Chittoor, Andhra Pradesh</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="text-lg">B.Tech in Computer Science and Technology</h1>
            <h1 className="text-lg">May 2024</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="text-lg italic">Specialization in AI & ML</h1>
            <h1 className="text-lg italic font-semibold">GPA: 9.33</h1>
          </div>
          <div className="mt-2">
            <div className="text-lg font-medium">Relevant Coursework:</div>
            <div className="text-lg">
              Machine Learning, Deep Learning, Data Structures and Algorithms, OOP, DBMS, Artificial Intelligence, COS, CCN, Full Stack Development, Information Retrieval, Computer Vision
            </div>
          </div>
        </div>
    </div>
  );
}

export default Education