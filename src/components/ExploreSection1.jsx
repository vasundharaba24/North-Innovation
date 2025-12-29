import React from "react";
import art from '../assests/art.jpg'

export default function ExploreSection1() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white min-h-screen font-sans">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl py-20 px-40">
        {/* Left Images Container */}
        <div className="relative w-full lg:w-1/2 h-96 mb-12 lg:mb-0 flex justify-center">
        {/* Product Image - larger, behind */}
        <div className="absolute left-20 top-4 w-64 h-72 overflow-hidden shadow-2xl z-10">
            <img
            src={art}
            alt="Skincare products"
            className="w-full h-full object-cover"
            />
        </div>


        </div>


        {/* Right Content */}
        <div className="lg:w-1/2 text-center lg:text-left lg:pl-16 pr-16">
          <p className="text-2xl font-script text-gray-600 mb-6 italic">New in store</p>
          <h1 className="text-6xl lg:text-7xl font-serif font-light text-gray-900 mb-10 leading-tight tracking-wider text-center">
          EXPLORE<br />
          COLLECTION
          </h1>
          <button className="border-2 border-gray-800 px-10 py-3 text-sm font-medium tracking-[0.25em] uppercase hover:bg-gray-800 hover:text-white transition-all duration-300">
            CATALOGUES
          </button>
        </div>
      </div>

      {/* New Arrivals Marquee Strip */}
      <div className="bg-gray-100 py-4 overflow-hidden border-t border-gray-200">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(20)
            .fill("✦ FRESH FINDS")
            .map((item, index) => (
              <span 
                key={index} 
                className="text-base font-serif tracking-[0.3em] text-gray-700 mx-10"
              >
                {item}
              </span>
            ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,600;1,400&family=Dancing+Script:wght@400;500;600&display=swap');
        
        .font-script {
          font-family: 'Dancing Script', cursive;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
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
        
        /* Enhanced shadows and styling */
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }
        
        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .absolute.left-32 {
            left: 8rem;
          }
        }
        
        @media (max-width: 768px) {
          .text-6xl {
            font-size: 3.5rem;
          }
          .lg\\:text-7xl {
            font-size: 4rem;
          }
          .absolute.left-32 {
            left: 6rem;
          }
        }
      `}</style>
    </div>
  );
}