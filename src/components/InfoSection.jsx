import { Globe2, Compass, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export default function InfoSection() {
  return (
    <>
      <div
        className="w-full bg-white flex flex-col items-center font-sans"
        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      >
        {/* Dark Info Section */}
        <div className="w-full flex justify-center">
          <div className="bg-[#4A5463] rounded-xl shadow-lg max-w-[1200px] w-full py-20 px-16 mx-8 my-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Ethically-Sourced */}
            <div className="flex flex-col items-center">
              <Globe2 size={46} strokeWidth={1.3} className="text-white" />
              <h3 className="mt-5 text-[15px] font-medium text-white tracking-tight">
                Quality You Can Trust
              </h3>
              <p className="mt-3 text-[13px] text-white/80 max-w-[260px] leading-relaxed">
                We source from vetted artisans and suppliers who meet our
                standards of excellence, authenticity, and ethical production.
              </p>
            </div>

            {/* Easy Returns & Exchanges */}
            <div className="flex flex-col items-center">
              <Compass size={46} strokeWidth={1.3} className="text-white" />
              <h3 className="mt-5 text-[15px] font-medium text-white tracking-tight">
                Easy & Hassle-Free
              </h3>
              <p className="mt-3 text-[13px] text-white/80 max-w-[260px] leading-relaxed">
                We handle everything packaging, personalization, and delivery so
                every order arrives exactly as expected
              </p>
            </div>

            {/* Sustainable */}
            <div className="flex flex-col items-center">
              <Leaf size={46} strokeWidth={1.3} className="text-white" />
              <h3 className="mt-5 text-[15px] font-medium text-white tracking-tight">
                Sustainable Choices
              </h3>
              <p className="mt-3 text-[13px] text-white/80 max-w-[260px] leading-relaxed">
                We partner with responsible vendors and choose eco-friendly
                materials wherever possible to reduce our environmental
                footprint.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="w-full flex justify-center px-4">
          <div className="max-w-2xl text-center px-6 py-14">
            <p className="text-[13px] md:text-[14px] leading-7 text-gray-600">
              Our mission at{" "}
              <span className="font-semibold">NORTH CURATION</span> s simple
              create meaningful gifting experiences that strengthen
              relationships and reflect your brand’s values. Every curation is
              crafted with care, delivering quality, purpose, and memorable
              moments for the people who matter.
            </p>

            <Link to="/about">
              <button className="mt-7 bg-[#4A5463] text-white px-8 py-2 rounded-sm text-[13px] font-medium shadow hover:bg-[#3d4654] transition">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
