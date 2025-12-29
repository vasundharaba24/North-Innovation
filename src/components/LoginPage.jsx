import React from 'react';
import video from '../assests/Robot.mp4';

function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen font-['Montserrat']">
     <div className="relative w-full md:w-[55%] flex items-center justify-center p-4 md:p-0 min-h-[40vh] md:min-h-screen overflow-hidden">
        {/* Background Video */}
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Section: Login Form (35%) */}
      <div className="w-full md:w-[45%] flex items-center justify-center p-8 bg-white text-gray-800">
        <div className="w-full max-w-md">
          {/* ELECON Logo */}
          <div className="text-center mb-4">
            <h1
              className="text-5xl md:text-6xl font-light uppercase text-[#111111] flex items-center gap-3"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.35em",
              }}
            >
            {/* SVG E aligned perfectly with text */}
            <span className="inline-flex items-center pr-3">
              <svg
                width="48"
                height="48"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                className="align-middle translate-y-[3px]"
              >
                <rect x="0" y="3" width="30" height="3" rx="1.5" fill="#000" />
                <rect x="0" y="15" width="18" height="3" rx="1.5" fill="#000" />
                <rect x="0" y="28" width="30" height="3" rx="1.5" fill="#000" />
              </svg>
            </span>

            {/* ELECON letters */}
            <span className="text-[#707070]">L</span>
            E
            <span className="text-[#707070]">C</span>
            O
            <span className="text-[#707070]">N</span>
          </h1>

          </div>

          <p className="text-center text-sm text-gray-500 mb-8">
            Welcome to AI platform
          </p>
          <div className="w-full flex justify-center items-center">
            <div
              style={{
                width: "360px",
                fontFamily: "Inter, Helvetica, sans-serif",
              }}
            >
              {/* Tabs */}
              <div className="flex items-center gap-[6px]">
                {/* Active Tab */}
                <div
                  className="rounded-t-[12px] bg-[#F0F0F0]"
                  style={{
                    padding: "10px 18px",
                  }}
                >
                  <span className="text-[17px] font-bold text-[#222222] leading-none">
                    Log In
                  </span>
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-[3px]">
                <input
                  type="text"
                  placeholder="email or usemame"
                  className="w-full bg-[#F0F0F0] px-[14px] py-[12px]
                  text-[#BABABA] text-[15px] placeholder-[#BABABA] focus:outline-none rounded-tr-2xl"
                />
              </div>

              {/* Password Field */}
              <div className="relative mb-[3px]">
                <input
                  type="password"
                  placeholder="password"
                  className="w-full  bg-[#F0F0F0] px-[14px] py-[12px]
                  text-[#BABABA] text-[15px] placeholder-[#BABABA] focus:outline-none"
                />

                <span
                  className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[15px] text-[#BABABA] cursor-pointer"
                >
                  Show
                </span>
              </div>

              {/* Login Button */}
              <button
                className="w-full h-[50px] bg-[#232323] rounded-b-lg
                text-white text-[17px] font-semibold flex items-center justify-center"
              >
                Log in
              </button>
            </div>
          </div>
          </div>
          </div>
    </div>
  );
}

export default LoginPage;
