import React from "react";

function Hero() {
  return (
    <div className="h-40 w-[80%] sm:w-[70%] md:w-[40%] lg:w-[30%] mx-auto mt-20 bg--400 ">
      <div className="flex-col h-20">
        <p className="flex text-center text-gray-700 items-center justify-center mx-auto my-auto font-semibold mb-3">
          Step 1 of 2
        </p>
        <h1 className="flex text-center items-center text-2xl md:text-4xl justify-center mx-auto my-auto font-extrabold text-black mb-2">
          Architect Your Next Role
        </h1>
        <p className="flex text-gray-600 items-center justify-center mx-auto my-auto text-sm md:text-[15px] md:font-normal text-center">
          Upload your current resume to begin a comprehensive structural
          analysis and optimization process.
        </p>
      </div>
    </div>
  );
}

export default Hero;
