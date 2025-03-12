import React from 'react';

const AcademicStats = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left side - Text */}
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            We love to help all the student in the Coastal region attain high academic standards
          </h2>
          <div className="w-12 h-1 bg-[#ffa500] mt-6 mb-4"></div>
          <p className="text-gray-600">We have ...</p>
        </div>

        {/* Right side - Statistics */}
        <div className="flex flex-wrap gap-8 md:gap-12 justify-center md:justify-end mt-8 md:mt-0">
          {/* Mentorship Sessions */}
          <div className="flex flex-col items-center text-center">
            <div className="text-orange-500 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.384 1.651 1.459 1.651 3.031a3.75 3.75 0 11-7.5 0c0-1.572 1.134-2.647 1.651-3.031V1.875z" />
                <path d="M10.5 1.875a1.125 1.125 0 012.25 0v1.5c0 .621-.504 1.125-1.125 1.125h-.75a1.125 1.125 0 01-1.125-1.125v-1.5a1.125 1.125 0 011.125-1.125h.75a1.125 1.125 0 011.125 1.125v1.5a1.125 1.125 0 01-1.125 1.125h-.75a1.125 1.125 0 01-1.125-1.125v-1.5z" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold">100<span className="text-2xl">+</span></h3>
            <p className="text-gray-600 mt-1">Mentorship Sessions</p>
          </div>

          {/* Years of Service */}
          <div className="flex flex-col items-center text-center">
            <div className="text-orange-500 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold">17</h3>
            <p className="text-gray-600 mt-1">Years of service</p>
          </div>

          {/* Active Members */}
          <div className="flex flex-col items-center text-center">
            <div className="text-orange-500 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold">200</h3>
            <p className="text-gray-600 mt-1">Active Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicStats;