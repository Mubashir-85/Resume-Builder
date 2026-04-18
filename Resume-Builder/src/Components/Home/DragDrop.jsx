import React from "react";
import { FaFileUpload } from "react-icons/fa";

function DragDrop() {
  return (
    <div className="bg-white h-95 rounded-2xl w-[80%] sm:w-[70%] md:w-[40%] lg:w-[45%] mx-auto mt-10">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-[#FAF8FF] h-15 w-15 rounded-full flex items-center justify-center">
          <FaFileUpload className="text-4xl text-blue-900" />
        </div>
        <div className="w-[90%] lg:w-[65%] flex flex-col justify-center items-center text-center">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mt-4">
            Drag and Drop Your Resume
          </h2>
          <p className="text-gray-600 mt-2 text-center text-[10px] lg:text-xl">
            Upload your resume to get started with our comprehensive analysis
            and optimization process.
          </p>
          <button className="bg-blue-900 text-white py-2 px-4 rounded-lg mt-5 hover:bg-blue-800">
            Browse Files
          </button>
        </div>
      </div>
    </div>
  );
}

export default DragDrop;
