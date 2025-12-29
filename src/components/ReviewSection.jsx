import React from "react";

export default function ReviewSection() {
  return (
    <div className="w-full flex justify-center bg-white py-10">
      <div className="w-[90%] bg-[#5A667A] flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden shadow-lg">
        {/* Left Section */}
        <div className="flex flex-col justify-center px-10 py-12 md:w-[40%]">
          {/* <p className="text-xs tracking-[0.35em] mb-3 text-white">INTRODUCING</p> */}
          <h1
            className="text-3xl md:text-4xl font-light mb-2 leading-snug text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            NORTH CURATION<span className="font-light"></span>
          </h1>
          <div className="w-16 border-b border-gray-400 mb-4"></div>
          <p
            className="text-xs tracking-widest leading-relaxed mb-6 text-white"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Made for moments that deserve a little magic
            <br />
            thoughtful, modern, and meant to be felt.
          </p>
          <button
            className="bg-white text-[#5A667A] text-xs font-semibold px-6 py-2 tracking-wide hover:bg-gray-100 transition rounded"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            SHOP NOW
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-[60%] flex flex-col justify-between bg-[#5A667A] p-6">
          <div className="flex flex-row h-[180px] w-full">
            {/* Half circle masked image */}
            <div className="relative w-[50%] h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80"
                alt="main"
                className="w-full h-full object-cover"
                style={{
                  clipPath: "ellipse(100% 100% at 0% 50%)",
                }}
              />
            </div>

            {/* Two stacked images */}
            <div className="flex flex-col w-[50%] h-full gap-2 pl-2">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="img2"
                className="w-full h-1/2 object-cover rounded"
              />
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="img3"
                className="w-full h-1/2 object-cover rounded"
              />
            </div>
          </div>

          {/* Bottom wide image */}
          <div className="mt-2 w-full h-[120px]">
            <img
              src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80"
              alt="img4"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
