import React from "react";

// SVG icons with constant draw + float
const differentiators = [
  {
    label: "Personalized Gifts",
    icon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-[float_2.6s_linear_infinite]"
      >
        <style>{`
          .draw path,
          .draw rect,
          .draw circle,
          .draw ellipse {
            --dash: 320;
            stroke-dasharray: var(--dash);
            stroke-dashoffset: var(--dash);
            animation: draw-loop 4s linear infinite;
          }

          @keyframes draw-loop {
            0% { stroke-dashoffset: var(--dash); }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: var(--dash); }
          }

          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }
        `}</style>

        <g className="draw">
          <rect x="20" y="35" width="50" height="35" rx="5" stroke="#222" strokeWidth="2" />
          <rect x="25" y="40" width="40" height="25" rx="3" stroke="#222" strokeWidth="2" />
          <ellipse cx="45" cy="30" rx="15" ry="7" fill="#e6e9c7" />
          <path d="M35 30 Q45 10 55 30" stroke="#222" strokeWidth="2" />
          <path d="M45 30 Q45 20 45 10" stroke="#222" strokeWidth="2" />
        </g>
      </svg>
    ),
  },

  {
    label: "Seamless Execution",
    icon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-[float_2.6s_linear_infinite]"
      >
        <style>{`
          .draw path,
          .draw rect {
            --dash: 300;
            stroke-dasharray: var(--dash);
            stroke-dashoffset: var(--dash);
            animation: draw-loop 4s linear infinite;
          }
        `}</style>

        <g className="draw">
          <path d="M30 50 Q35 45 40 50 Q45 55 50 50 Q55 45 60 50" stroke="#222" strokeWidth="2" />
          <rect x="60" y="45" width="10" height="10" rx="2" fill="#e6e9c7" />
          <rect x="20" y="45" width="10" height="10" rx="2" fill="#e6e9c7" />
        </g>
      </svg>
    ),
  },

  {
    label: "80,000+ Gifts Delivered",
    icon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-[float_2.6s_linear_infinite]"
      >
        <style>{`
          .draw path,
          .draw rect,
          .draw circle,
          .draw ellipse {
            --dash: 360;
            stroke-dasharray: var(--dash);
            stroke-dashoffset: var(--dash);
            animation: draw-loop 4.2s linear infinite;
          }
        `}</style>

        <g className="draw">
          <rect x="25" y="40" width="40" height="30" rx="4" stroke="#222" strokeWidth="2" />
          <rect x="25" y="50" width="40" height="10" stroke="#222" strokeWidth="2" />
          <path d="M45 40 V70" stroke="#222" strokeWidth="2" />
          <ellipse cx="38" cy="35" rx="6" ry="4" fill="#e6e9c7" />
          <ellipse cx="52" cy="35" rx="6" ry="4" fill="#e6e9c7" />
          <circle cx="65" cy="25" r="15" fill="#e6e9c7" stroke="#222" strokeWidth="2" />
          <text x="65" y="29" textAnchor="middle" fontSize="10" fill="#222" fontWeight="600">
            80K+
          </text>
        </g>
      </svg>
    ),
  },

  {
    label: "Precision Fulfillment",
    icon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-[float_2.6s_linear_infinite]"
      >
        <style>{`
          .draw path,
          .draw rect,
          .draw circle,
          .draw ellipse {
            --dash: 300;
            stroke-dasharray: var(--dash);
            stroke-dashoffset: var(--dash);
            animation: draw-loop 4s linear infinite;
          }
        `}</style>

        <g className="draw">
          <rect x="20" y="35" width="35" height="25" rx="5" stroke="#222" strokeWidth="2" />
          <ellipse cx="37" cy="30" rx="10" ry="5" fill="#e6e9c7" />
          <rect x="55" y="45" width="20" height="15" rx="3" stroke="#222" strokeWidth="2" />
          <circle cx="60" cy="65" r="5" stroke="#222" strokeWidth="2" />
          <circle cx="70" cy="65" r="5" stroke="#222" strokeWidth="2" />
        </g>
      </svg>
    ),
  },

  {
    label: "Effortless Efficiency",
    icon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-[float_2.6s_linear_infinite]"
      >
        <style>{`
          .draw path,
          .draw circle,
          .draw ellipse {
            --dash: 340;
            stroke-dasharray: var(--dash);
            stroke-dashoffset: var(--dash);
            animation: draw-loop 4.4s linear infinite;
          }
        `}</style>

        <g className="draw">
          <circle cx="45" cy="50" r="25" stroke="#222" strokeWidth="2" />
          <ellipse cx="35" cy="30" rx="10" ry="4" fill="#e6e9c7" />
          <ellipse cx="55" cy="30" rx="10" ry="4" fill="#e6e9c7" />
          <path d="M45 50 L45 40" stroke="#222" strokeWidth="2" />
          <path d="M45 50 L60 50" stroke="#222" strokeWidth="2" />
        </g>
      </svg>
    ),
  },
];

const DifferentiatorsSection = () => (
  <section className="w-full py-12 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
    <div className="text-center mb-12 md:mb-20">

  <h2
    className="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-800 mb-4 md:mb-6"
    style={{ fontFamily: "'Cormorant Garamond', serif" }}
  >
    The North way
  </h2>

  <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-6 md:mb-8" />

  <p
    className="text-lg md:text-2xl text-slate-600 max-w-xl mx-auto"
    style={{ fontFamily: "'Cormorant Garamond', serif" }}
  >
    Playful elegance. Premium finish. That's our signature in every box.
  </p>
</div>


      <div className="bg-[#F4F1ED] backdrop-blur-sm rounded-2xl md:rounded-3xl px-6 md:px-12 py-8 md:py-16">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {differentiators.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center w-[130px] md:w-[170px]">
              <div className="mb-4 md:mb-6 scale-75 md:scale-100">{item.icon}</div>
              <div className="text-center text-sm md:text-lg font-medium text-gray-900">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DifferentiatorsSection;
