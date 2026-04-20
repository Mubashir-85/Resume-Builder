import React, { useRef, useState } from "react";
import { FaFileUpload } from "react-icons/fa";

function DragDrop() {
  const uploadRef = useRef(null);
  const [file, setFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const handleChange = () => {
    console.log(uploadRef.current.files[0]);
    setFile(uploadRef.current.files[0]);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("drag over");
    setIsDragOver(true);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    console.log("file dropped");
    console.log(e.dataTransfer.files[0]);
    setFile(e.dataTransfer.files[0]);
    setIsDragOver(false);
  };

  return (
    <div className="bg-white h-95 rounded-2xl w-[80%] sm:w-[70%] md:w-[40%] lg:w-[45%] mx-auto mt-10">
      <div className={`flex flex-col items-center justify-center h-full opacity-100 ${isDragOver ? "border-4 border-dashed border-blue-900" : ""}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={()=>setIsDragOver(false)}
      >
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
          <div
            className="w-[40%] h-12 rounded-2xl mt-3 flex justify-center items-center overflow-hidden cursor-pointer bg-blue-900 p-5 "
            onClick={() => {
              uploadRef.current.click();
            }}
          >
            <input
              type="file"
              className="bg-blue-900 text-white py-2 px-4 w-[50%] rounded-lg mt-5 hover:bg-blue-800 hidden"
              ref={uploadRef}
              onChange={handleChange}
            />
            <h2
              className={`text-white ${
                file ? "text-sm font-normal" : "text-lg font-semibold w-[40%]"
              }`}
            >
              {file ? file.name : "Upload"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DragDrop;
