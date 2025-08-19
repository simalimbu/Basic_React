import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#465576] px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Section */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to <br /> ADBI E-Learning
          </h1>
          <p className="text-lg">
            Your virtual Asia Pacific development classroom
          </p>

          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Learn from leading experts</li>
            <li>Earn training certificates</li>
            <li>Personal and professional growth</li>
          </ul>

          <button className="mt-4 flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-blue-900 px-6 py-3 rounded-md font-semibold">
            📘 Start Learning
          </button>
        </div>

        {/* Right Section - Video */}
        <div className="flex justify-center">
          <video
            className="rounded-lg shadow-lg w-full md:w-[500px]"
            controls
          >
            <source src="/sample-video.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
