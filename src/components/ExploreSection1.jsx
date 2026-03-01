import React from "react";
import art from "../assests/Explore page opening pic.jpg";

export default function ExploreSection1() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white min-h-screen">

      {/* Main Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[70%_30%] items-center mt-2 md:mt-4 mb-2 md:mb-4">

        {/* LEFT — IMAGE (DESKTOP UNCHANGED) */}
        <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
          <img
            src={art}
            alt="Curated Gift Box"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT — TEXT (DESKTOP UNCHANGED) */}
        <div className="px-6 md:px-10 lg:px-16 py-8 md:py-16 text-center lg:text-left">

          <p
            className="text-2xl md:text-2xl lg:text-2xl text-gray-600 mb-4 md:mb-6"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            Moments, Perfectly Curated
          </p>

          <h3
            className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-snug tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Turning celebrations into keepsakes,
            <br />
            one beautiful box at a time.
          </h3>

        </div>
      </div>

      {/* Marquee Strip */}
      <div className="bg-gray-100 py-3 md:py-4 overflow-hidden border-t border-gray-200">
        <div
          className="flex animate-marquee whitespace-nowrap font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {Array(20)
            .fill("✦ CATALOGUES")
            .map((item, index) => (
              <a
                key={index}
                href="https://drive.google.com/drive/folders/1YlUtBuICXspjA078MhdIoXOxcdeFCcpo?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base tracking-[0.3em] text-gray-700 mx-6 md:mx-10 hover:text-orange-500 transition"
              >
                {item}
              </a>
            ))}
        </div>
      </div>

      {/* Fonts + Animation */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Allura&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </div>
  );
}