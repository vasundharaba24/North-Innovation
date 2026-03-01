import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Images
import slide1 from "../assests/Amex-review.jpg";
import slide2 from "../assests/Doctorsand-review.jpg";
import slide3 from "../assests/skytown-review.jpeg";
import slide4 from "../assests/I2.png";


import logoAmex from "../assests/logos/American_express.png";
import logoDoctor from "../assests/logos/doctor-sand.png";
import logoskytown from "../assests/logos/skytown.png";



const slidesData = [
  {
    bg: slide1,
    name: "Thara",
    company: "American Express",
    logo: logoAmex,
    review:
      "End-to-end services from North Curations covering planning, coordination, and execution delivering seamless, engaging, and truly memorable gifting experiences.",
  },
  {
    bg: slide2,
    name: "Jayaraam Chetan V ",
    company: "Doctor Sand Limited",
    logo: logoDoctor,
    review:
      "Stellar. Thorough Professional ",
  },
  {
    bg: slide3,
    name: "Saanvikaa Kabadi",
    company: "Skytown Group",
    logo: logoskytown,
    review:
      "Excellent service.",
  },
  // {
  //   bg: slide4,
  //   name: "Shiv Mamadapur",
  //   company: "Brand Raga",
  //   logo: logoBrandRaga,
  //   review:
  //     "Best services, reliable and on time. Its the best experience, the variety of products and the timeline are very on time",
  // },
];

export default function ReviewSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slidesData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slidesData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="animate-[fadeUp_0.8s_ease-out]">
      {/* HEADER */}
      <div className="text-center mb-12 md:mb-20 mt-12 md:mt-20 px-4 md:px-6">
        <p
          className="text-sm md:text-lg font-medium tracking-widest text-slate-600 mb-2 md:mb-4"
        >
          WHAT CLIENTS SAY
        </p>

        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-800 mb-4 md:mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          The North Experience
        </h2>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-6 md:mb-8" />

        <p
          className="text-lg md:text-2xl text-slate-600 max-w-xl mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          From first glance to final unwrapping, our clients share their journey
          of thoughtful, luxurious gifting.
        </p>
      </div>

      {/* SLIDER */}
      <section className="w-full bg-white animate-[fadeUp_1s_ease-out]">
        <div className="relative w-full overflow-hidden">
          {/* SLIDES */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slidesData.map((slide, index) => (
              <div
                key={index}
                className="relative w-full flex-shrink-0 h-[420px] sm:h-[500px] md:h-[520px] lg:h-[600px] xl:h-[720px]"
              >
                {/* BACKGROUND IMAGE */}
                <img
                  src={slide.bg}
                  alt={`Review ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* REVIEW CARD */}
                <div
                  className="
                    absolute
                    w-[85%]
                    max-w-[300px] md:max-w-[360px]
                    left-1/2
                    -translate-x-1/2
                    bottom-4 md:bottom-10

                    lg:left-auto
                    lg:right-20
                    lg:top-1/2
                    lg:bottom-auto
                    lg:-translate-x-0
                    lg:-translate-y-1/2
                    group
                  "
                >
                  <div className="relative bg-[#cfd8e4] py-8 md:py-12 px-6 md:px-10 transition-all duration-500 ease-out group-hover:shadow-2xl">
                    {/* LOGO */}
                    <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2">
                      <img
                        src={slide.logo}
                        alt={slide.company}
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 md:border-4 border-white bg-white object-contain"
                      />
                    </div>

                    {/* INNER CONTENT */}
                    <div className="border border-white px-4 md:px-8 py-6 md:py-10 text-center space-y-3 md:space-y-6">
                      <h3 className="text-base md:text-xl font-medium text-neutral-900">
                        {slide.name}
                      </h3>

                      <p className="text-lg md:text-2xl font-extrabold text-neutral-900" 
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 'bold' }}>
                        {slide.company}
                      </p>

                      <p className="text-sm md:text-lg text-neutral-700 leading-relaxed"
                      style={{ fontFamily: "'Cormorant Garamond', serif"}}>
                        {slide.review}
                      </p>

                      {/* ⭐ STARS */}
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-4 md:mb-8"></div>
                     
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* NAV */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 md:p-3 rounded-full hover:bg-white transition"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 md:p-3 rounded-full hover:bg-white transition"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
      </section>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
