import React from 'react';
import { Link } from 'react-router-dom';

import C2 from '../assests/C2.png'
import corporate from '../assests/corporate.png'
import tech from '../assests/tech.png'
import conference from '../assests/conference.png'
import festival1 from '../assests/festival1.png'
import Indian from "../assests/Indian.png";
import crok from '../assests/crok.png'
import wedding from '../assests/wedding.png'
import green from '../assests/green_edit.png';

const CategorySection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-stone-50 to-stone-100">
    <div className="max-w-7xl mx-auto px-4 md:px-8">

      {/* Section Header */}
      <div className="text-center mb-14 md:mb-20">
        <p className="text-sm md:text-lg font-medium tracking-widest text-slate-600 mb-4">
          DISCOVER
        </p>

        <h2
          className="text-3xl md:text-6xl font-semibold text-slate-800 mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          The Core Curations
        </h2>

        <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-6 md:mb-8"></div>

        <p
          className="text-lg md:text-2xl text-slate-600 max-w-xl mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          The heart of what we create.
        </p>
      </div>

      {/* ===== GRID 1 ===== */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 md:h-[800px]">

        {/* Large Card */}
        <div className="col-span-12 md:col-span-8 row-span-2 relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-700 min-h-[320px] md:min-h-0">
          <img
            src={corporate}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white">
            <h3
              className="text-2xl md:text-5xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Workspace Essentials
            </h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-span-12 sm:col-span-6 md:col-span-4 relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 min-h-[280px] md:min-h-0">
          <img
            src={C2}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
          <div className="absolute bottom-4 left-5 text-white">
            <h4
              className="text-lg md:text-2xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Custom Apparel
            </h4>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-span-12 sm:col-span-6 md:col-span-4 relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 min-h-[280px] md:min-h-0">
          <img
            src={conference}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
          <div className="absolute bottom-4 left-5 text-white">
            <h4
              className="text-lg md:text-2xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Conference & Event Kits
            </h4>
          </div>
        </div>

        {/* Festive Hampers */}
        <div className="col-span-12 md:col-span-8 relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 min-h-[320px] md:min-h-0">
          <img
            src={festival1}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent"></div>
          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white">
            <h4
              className="text-xl md:text-3xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Festive Hampers
            </h4>
          </div>
        </div>

        {/* Tech */}
        <div className="col-span-12 sm:col-span-6 md:col-span-4 relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 min-h-[280px] md:min-h-0">
          <img
            src={tech}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
          <div className="absolute bottom-4 left-5 text-white">
            <h4
              className="text-lg md:text-2xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Tech & Gadgets
            </h4>
          </div>
        </div>

      </div>

      {/* ===== GRID 2 ===== */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 md:h-[800px] mt-8 md:mt-12">

        {/* Heritage */}
        <div className="col-span-12 md:col-span-8 md:col-start-5 row-span-3 relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-700 min-h-[320px] md:min-h-0">
          <img
            src={Indian}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white">
            <h3
              className="text-2xl md:text-5xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Heritage Edit
            </h3>
          </div>
        </div>

        {/* Wedding */}
        <div className="col-span-12 sm:col-span-5 md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 min-h-[280px] md:min-h-0">
          <img
            src={wedding}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
          <div className="absolute bottom-4 left-5 text-white">
            <h4
              className="text-lg md:text-2xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Vow Collection
            </h4>
          </div>
        </div>

        {/* Green */}
        <div className="col-span-12 sm:col-span-6 md:col-span-4 relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 min-h-[300px] md:min-h-0">
          <img
            src={green}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
          <div className="absolute bottom-4 left-5 text-white">
            <h4
              className="text-lg md:text-2xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Green Edit
            </h4>
          </div>
        </div>

        {/* Cork */}
        <div className="col-span-12 relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 min-h-[320px] md:min-h-0">
          <img
            src={crok}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent"></div>
          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white">
            <h4
              className="text-xl md:text-3xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Cork Giftings
            </h4>
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="text-center mt-12 md:mt-16">
        <Link to="/Explore">
          <button
            className="bg-slate-800 text-white px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm font-medium tracking-widest hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            READ MORE
          </button>
        </Link>
      </div>

    </div>
  </section>
);

export default CategorySection;