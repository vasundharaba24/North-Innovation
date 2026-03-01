import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assests/founder/about.jpg";
import img2 from "../assests/founder/image.png";
import img3 from "../assests/founder/Founder pic 1.jpg";

export default function EditorialArchesDesktop() {
  return (
    <section className="w-full bg-white mt-9">
      <div className="flex flex-col md:flex-row w-full">

        <ArchFrame src={img1} id="one" title="Why Us" />
        <ArchFrame src={img2} id="two" title="About Us?" />
        <ArchFrame src={img3} id="three" title="About Founder" />

      </div>
    </section>
  );
}

/* -------------------------------- */

function ArchFrame({ src, id, title }) {
  return (
    <div className="relative w-full md:w-1/3">

      {/* Maintain perfect arch ratio */}
      <div className="relative w-full aspect-[400/590]">

        <svg
          viewBox="10 0 400 590"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <clipPath id={`perfectArch-${id}`}>
              <path
                d="
                  M 20 240
                  C 20 110, 120 20, 210 20
                  C 300 20, 400 110, 400 240
                  L 400 620
                  L 20 620
                  Z
                "
              />
            </clipPath>
          </defs>

          <image
            href={src}
            width="400"
            height="590"
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#perfectArch-${id})`}
          />
        </svg>

        {/* WHITE STRAP */}
        <Link
          to="/about"
          className="
            absolute
            bottom-0
            left-0
            right-0
            bg-white
            py-3 md:py-4
            text-center
            text-black
            text-sm md:text-base
            font-medium
            tracking-wide
            z-20
            transition-all duration-300
            hover:bg-[#AF4110] hover:text-white
          "
        >
          {title}
        </Link>

      </div>
    </div>
  );
}