import React from 'react';

import { Viewer, Worker } from "@react-pdf-viewer/core";


import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";


const Resume = () => {


  return (
    <div className='flex flex-row justify-center'>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className='h-screen' style={{ width: "900px" }}>
          <Viewer
            fileUrl={`/resume_ms.pdf`}
            // plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
}

export default Resume