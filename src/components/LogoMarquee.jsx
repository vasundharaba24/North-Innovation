import React from 'react';
import Academic from '../assests/logos/Academic.png';
import American_express from '../assests/logos/American_express.png';
import BrandRaga from '../assests/logos/BrandRaga.png';
import Custara from '../assests/logos/Custara.png';
import educational from '../assests/logos/educational.png';
import Evotek from '../assests/logos/Evotek.png';
import Inspire from '../assests/logos/Inspire.png';
import Kotak from '../assests/logos/Kotak.png';
import Novo from '../assests/logos/Novo.png';
import NTPC from '../assests/logos/NTPC.png';
import ONGC from '../assests/logos/ONGC.png';
import Sodexo from '../assests/logos/Sodexo.png';
import vultec from '../assests/logos/vultec.png';
import skytown from '../assests/logos/skytown.png';
import doctorsand from '../assests/logos/doctor-sand.png';

const LogoMarquee = () => {
  const logos = [
    { src: Academic, alt: 'Academic' },
    // { src: BrandRaga, alt: 'BrandRaga' },
    { src: Custara, alt: 'Custara' },
    { src: educational, alt: 'Educational' },
    { src: doctorsand, alt: 'Doctor sand' },
    { src: Evotek, alt: 'Evotek' },
    { src: Inspire, alt: 'Inspire' },
    { src: American_express, alt: 'American Express' },
    { src: Kotak, alt: 'Kotak' },
    { src: Novo, alt: 'Novo' },
    { src: NTPC, alt: 'NTPC' },
    { src: skytown, alt: 'skytown' },
    { src: ONGC, alt: 'ONGC' },
    { src: Sodexo, alt: 'Sodexo' },
    { src: vultec, alt: 'Vultec' },

  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-white overflow-hidden py-12 md:py-7">

      {/* TOP FULL WIDTH LINE */}
  

      <div className="relative">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-20 mt-2">
          <h2
            className="text-3xl md:text-5xl font-semibold text-slate-800"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Trusted By
          </h2>

       
        </div>

        {/* Marquee */}
        <div className="flex animate-marquee items-center py-5">

          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 md:mx-14 flex items-center justify-center"
              style={{ width: '140px', height: '80px' }}  // 🔥 Increased size
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain hover:brightness-110 hover:drop-shadow-lg transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}

        </div>
      </div>

      {/* BOTTOM FULL WIDTH LINE */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 22s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes shine {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
      `}</style>

    </div>
  );
};

export default LogoMarquee;