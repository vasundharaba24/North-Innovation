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
import Vrukshathon from '../assests/logos/Vrukshathon.png';
import vultec from '../assests/logos/vultec.png';

const LogoMarquee = () => {
  const logos = [
    { src: Academic, alt: 'Academic' },
    { src: BrandRaga, alt: 'BrandRaga' },
    { src: Custara, alt: 'Custara' },
    { src: educational, alt: 'Educational' },
    { src: Evotek, alt: 'Evotek' },
    { src: Inspire, alt: 'Inspire' },
    { src: American_express, alt: 'American Express' },
    { src: Kotak, alt: 'Kotak' },
    { src: Novo, alt: 'Novo' },
    { src: NTPC, alt: 'NTPC' },
    { src: ONGC, alt: 'ONGC' },
    { src: Sodexo, alt: 'Sodexo' },
    { src: Vrukshathon, alt: 'Vrukshathon' },
    { src: vultec, alt: 'Vultec' },
  ];

  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-white py-12 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: '120px', height: '80px' }}
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
          animation: marquee 20s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;
