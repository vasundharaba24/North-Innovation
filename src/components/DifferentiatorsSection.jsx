import React from "react";

// SVG icons matching the reference image
const differentiators = [
  {
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="35" width="50" height="35" rx="5" stroke="#222" strokeWidth="2" />
        <rect x="25" y="40" width="40" height="25" rx="3" stroke="#222" strokeWidth="2" />
        <ellipse cx="45" cy="30" rx="15" ry="7" fill="#e6e9c7" />
        <path d="M35 30 Q45 10 55 30" stroke="#222" strokeWidth="2" />
        <path d="M45 30 Q45 20 45 10" stroke="#222" strokeWidth="2" />
      </svg>
    ),
    label: "Personalized Gifts"
  },
  {
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 50 Q35 45 40 50 Q45 55 50 50 Q55 45 60 50" stroke="#222" strokeWidth="2" />
        <rect x="60" y="45" width="10" height="10" rx="2" fill="#e6e9c7" />
        <rect x="20" y="45" width="10" height="10" rx="2" fill="#e6e9c7" />
      </svg>
    ),
    label: "Seamless Execution"
  },
   {
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gift box */}
        <rect x="25" y="40" width="40" height="30" rx="4" stroke="#222" strokeWidth="2" />
        <rect x="25" y="50" width="40" height="10" stroke="#222" strokeWidth="2" />
        <path d="M45 40 V70" stroke="#222" strokeWidth="2" />
        <ellipse cx="38" cy="35" rx="6" ry="4" fill="#e6e9c7" />
        <ellipse cx="52" cy="35" rx="6" ry="4" fill="#e6e9c7" />

        {/* Count indicator */}
        <circle cx="65" cy="25" r="15" fill="#e6e9c7" stroke="#222" strokeWidth="2" />
        <text
          x="65"
          y="29"
          textAnchor="middle"
          fontSize="10"
          fill="#222"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
        >
        80K+
        </text>
      </svg>
    ),
    label: "80,000+ Gifts Delivered"
  },
  {
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="35" width="35" height="25" rx="5" stroke="#222" strokeWidth="2" />
        <ellipse cx="37" cy="30" rx="10" ry="5" fill="#e6e9c7" />
        <rect x="55" y="45" width="20" height="15" rx="3" stroke="#222" strokeWidth="2" />
        <circle cx="60" cy="65" r="5" stroke="#222" strokeWidth="2" fill="#fff" />
        <circle cx="70" cy="65" r="5" stroke="#222" strokeWidth="2" fill="#fff" />
      </svg>
    ),
    label: "Precision Fulfillment"
  },
  {
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="45" cy="50" r="25" stroke="#222" strokeWidth="2" />
        <ellipse cx="35" cy="30" rx="10" ry="4" fill="#e6e9c7" />
        <ellipse cx="55" cy="30" rx="10" ry="4" fill="#e6e9c7" />
        <path d="M45 50 L45 40" stroke="#222" strokeWidth="2" />
        <path d="M45 50 L60 50" stroke="#222" strokeWidth="2" />
      </svg>
    ),
    label: "Effortless Efficiency"
  },

  /* 🔥 NEW: Gifts Delivered */
 
];

const DifferentiatorsSection = () => (
  <section className="w-full py-20 bg-white">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-20">
        <p
          className="text-sm font-medium tracking-widest text-slate-600 mb-4"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.25em' }}
        >
          WHY CHOOSE US
        </p>
        <h2
          className="text-5xl md:text-6xl font-light text-slate-800 mb-6"
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
        >
          Our Differentiators
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-8"></div>
        <p
          className="text-xl text-slate-600 max-w-2xl mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          From personalized curation to precision delivery, we ensure a smooth and impactful gifting experience.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {differentiators.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center w-[170px]">
            <div className="mb-6">{item.icon}</div>
            <div
              className="text-center text-lg font-medium text-gray-900"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentiatorsSection;