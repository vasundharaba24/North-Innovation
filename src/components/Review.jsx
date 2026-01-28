import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Images
import slide1 from "../assests/Amex-review.jpg";
import slide2 from "../assests/Doctorsand-review.jpg";
import slide3 from "../assests/skytown-review.jpeg";
import slide4 from "../assests/I2.png";


import logoAmex from "../assests/logos/American_express.png";
import logoDoctor from "../assests/logos/Sodexo.png";
import logoBrandRaga from "../assests/logos/BrandRaga.png";



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
    logo: logoAmex,
    review:
      "Excellent service.",
  },
  {
    bg: slide4,
    name: "Shiv Mamadapur",
    company: "Brand Raga",
    logo: logoBrandRaga,
    review:
      "Best services, reliable and on time. Its the best experience, the variety of products and the timeline are very on time",
  },
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
      <div className="text-center mb-20 mt-20 px-6">
        <p
          className="text-sm font-medium tracking-widest text-slate-600 mb-4"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.25em" }}
        >
          WHAT CLIENTS SAY
        </p>

        <h2
          className="text-5xl md:text-6xl font-light text-slate-800 mb-6"
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
        >
          The North Experience
        </h2>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-8" />

        <p
          className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
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
                className="relative w-full flex-shrink-0 h-[520px] sm:h-[600px] lg:h-[720px]"
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
                    w-[90%]
                    max-w-[360px]
                    left-1/2
                    -translate-x-1/2
                    bottom-10

                    lg:left-auto
                    lg:right-20
                    lg:top-1/2
                    lg:bottom-auto
                    lg:-translate-x-0
                    lg:-translate-y-1/2
                    group
                  "
                >
                  <div className="relative bg-[#cfd8e4] py-12 px-10 transition-all duration-500 ease-out group-hover:shadow-2xl">
                    {/* LOGO */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                      <img
                        src={slide.logo}
                        alt={slide.company}
                        className="w-24 h-24 rounded-full border-4 border-white bg-white object-contain"
                      />
                    </div>

                    {/* INNER CONTENT */}
                    <div className="border border-white px-8 py-10 text-center space-y-6">
                      <h3 className="font-serif text-2xl text-neutral-900">
                        {slide.name}
                      </h3>

                      <p className="font-serif font-semibold text-neutral-900">
                        {slide.company}
                      </p>

                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {slide.review}
                      </p>

                      {/* ⭐ STARS */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-8"></div>
                     
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* NAV */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-3 rounded-full hover:bg-white transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-3 rounded-full hover:bg-white transition"
          >
            <ChevronRight />
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
