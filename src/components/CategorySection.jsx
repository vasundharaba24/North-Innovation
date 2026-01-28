import React from 'react';
import { Link } from 'react-router-dom';
import C2 from '../assests/C2.png'
import corporate from '../assests/corporate.png'
import workspace from '../assests/workspace.png'
import tech from '../assests/tech.png'
import conference from '../assests/conference.png'
import festival1 from '../assests/festival1.png'
import Indian from "../assests/Indian.png";
import crok from '../assests/crok.png'
import wedding from '../assests/wedding.png'
import green from '../assests/green_edit.png';

const CategorySection = () => (
  <section className="py-24 bg-gradient-to-b from-stone-50 to-stone-100">
    <div className="max-w-7xl mx-auto px-8 py-8">

      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="mb-6">
          <p
            className="text-sm font-medium tracking-widest text-slate-600 mb-4"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.25em' }}
          >
            DISCOVER 
          </p>
          <h2
            className="text-5xl md:text-6xl font-light text-slate-800 mb-6"
            style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
          >
           The Core Curations
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-8"></div>
        </div>
        <p
          className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          The heart of what we create.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-12 gap-8 h-[800px] p-2 md:p-6">

        {/* Card 1 - Large Rectangle (Featured Image) */}
        <div className="col-span-12 md:col-span-8 row-span-2 relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-700">
          <img
            src={corporate}
            alt="Luxury Home Decor Collection"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <div className="mb-4">
              <h3
                className="text-4xl md:text-5xl font-light mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Workspace Essentials
              </h3>
             
            </div>
          </div>
          <div className="absolute top-8 right-8 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            <div className="w-12 h-12 border border-white rounded-full"></div>
          </div>
        </div>

        {/* Card 2 - Square */}
        <div className="col-span-6 md:col-span-4 relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
          <div className="h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
            <img
              src={C2}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
              onError={e => { e.currentTarget.src = 'https://images.pexels.com/photos/5639416/pexels-photo-5639416.jpeg?auto=compress&cs=tinysrgb&w=600'; }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent group-hover:from-slate-900/80 transition-all duration-500"></div>
          <div className="absolute bottom-4 left-5 text-white">
            <h4
              className="text-2xl font-light"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Custom Apparel
            </h4>
          </div>
        </div>

        {/* Card 3 - Square */}
        <div className="col-span-6 md:col-span-4 relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
          <div className="h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
             <img
              src={conference}
              alt="Wood Accessories"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
              onError={e => { e.currentTarget.src = 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=600'; }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent group-hover:from-slate-900/80 transition-all duration-500"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h4
              className="text-2xl font-light"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Conference & Event Kits
            </h4>
          </div>
        </div>

        {/* Card 4 - Rectangle */}
        <div className="col-span-12 md:col-span-8 relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
          <div className="h-full bg-gradient-to-r from-stone-300 to-stone-200">
            <img
              src={festival1}
              alt="Wall Decor"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              onError={e => { e.currentTarget.src = 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200'; }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/20 to-transparent group-hover:from-slate-900/70 transition-all duration-500"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h4
              className="text-3xl font-light"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Festive Hampers
            </h4>
          </div>
        </div>

        {/* Card 5 - Square */}
        <div className="col-span-6 md:col-span-4 relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
          <div className="h-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
            <img
              src={tech}
              alt="Plant & Planters"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
              onError={e => { e.currentTarget.src = 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=600'; }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent group-hover:from-slate-900/80 transition-all duration-500"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h4
              className="text-2xl font-light"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tech & Gadgets
            </h4>
          </div>
        </div>     
      </div>


{/* Category Grid 2 (FIXED) */}
<div className="grid grid-cols-12 gap-8 h-[800px] p-2 md:p-6 grid-flow-dense">


  {/* Card 1 - Large Rectangle (NOW ON RIGHT) */}
  <div className="col-span-12 md:col-span-8 md:col-start-5 row-span-2 relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-700">
    <img
      src={Indian} 
      alt="Luxury Home Decor Collection"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
    <div className="absolute bottom-8 left-8 text-white">
      <div className="mb-4">
        <h3
          className="text-4xl md:text-5xl font-light mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Heritage Edit
        </h3>
        {/* <p
          className="text-lg opacity-80 max-w-lg leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Curated apparel, desk accessories, kits, and premium gifts crafted to elevate every moment.
        </p> */}
      </div>
    </div>
    <div className="absolute top-8 right-8 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
      <div className="w-12 h-12 border border-white rounded-full"></div>
    </div>
  </div>

  {/* Card 2 - Square (LEFT) */}
  <div className="col-span-6 md:col-span-4 relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
    <div className="h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
      <img
        src={wedding}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent group-hover:from-slate-900/80 transition-all duration-500"></div>
    <div className="absolute bottom-4 left-5 text-white">
      <h4
        className="text-2xl font-light"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        The Vow Collection
      </h4>
    </div>
  </div>

  {/* Card 3 - Square (LEFT) */}
  <div className="col-span-6 md:col-span-4 relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
    <div className="h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
      <img
        src={green}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent group-hover:from-slate-900/80 transition-all duration-500"></div>
    <div className="absolute bottom-6 left-6 text-white">
      <h4
        className="text-2xl font-light"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
       The Green Edit
      </h4>
    </div>
  </div>

  {/* Card 4 - Rectangle (RIGHT, BELOW LARGE) */}
  <div className="col-span-12 md:col-span-12 relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
    <div className="h-full bg-gradient-to-r from-stone-300 to-stone-200">
      <img
        src={crok}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/20 to-transparent group-hover:from-slate-900/70 transition-all duration-500"></div>
    <div className="absolute bottom-8 left-8 text-white">
      <h4
        className="text-3xl font-light"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Cork Giftings
      </h4>
    </div>
  </div>

  {/* Card 5 - Square (LEFT) */}
  {/* <div className="col-span-6 md:col-span-4 relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
    <div className="h-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
      <img
        src={tech}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent group-hover:from-slate-900/80 transition-all duration-500"></div>
    <div className="absolute bottom-6 left-6 text-white">
      <h4
        className="text-2xl font-light"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Tech & Gadgets
      </h4>
    </div>
  </div> */}

</div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-8">

          {/* FIX: external link must not use Link */}
          <Link to="/Explore">
            <button
              className="bg-slate-800 text-white px-10 py-4 text-sm font-medium tracking-widest hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
             READ MORE
            </button>
          </Link>

        </div>
        </div>
  
      </div>

  </section>
);

export default CategorySection;