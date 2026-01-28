import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import G1 from "../assests/gallery/G1.JPG";
import G2 from "../assests/gallery/G2.JPG";
import G3 from "../assests/gallery/G3.JPG";
import G4 from "../assests/gallery/G4.JPG";
import G5 from "../assests/gallery/G5.JPG";
import G6 from "../assests/gallery/G6.JPG";
import G7 from "../assests/gallery/G7.JPG";
import G8 from "../assests/gallery/G8.JPG";
import G9 from "../assests/gallery/G9.JPG";
import G10 from "../assests/gallery/G10.JPG";
import G11 from "../assests/gallery/G11.JPG";
import G12 from "../assests/gallery/G12.JPG";
import G13 from "../assests/gallery/G13.JPG";
import G14 from "../assests/gallery/G14.JPG";
import G15 from "../assests/gallery/G15.JPG";
import G16 from "../assests/gallery/G16.JPG";
import G17 from "../assests/gallery/G17.JPG";
import G18 from "../assests/gallery/G18.JPG";
import G19 from "../assests/gallery/G19.JPG";

export default function PhotoGallery() {
  return (
    <div>
      <Header />

      <section className="relative w-full py-20">
        <div className="relative max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-20">
            <h2
              className="text-5xl md:text-6xl font-semibold text-slate-800 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Curations by North
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-2"></div>
            <p
              className="text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Custom-crafted pieces designed to feel personal,<br></br> uniquely yours, and timeless.
            </p>
          </div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-12 gap-6">

            {/* ===== ROW 1 ===== */}
            <div className="col-span-12 lg:col-span-7 h-[420px] overflow-hidden">
              <img src={G8} className="w-full h-full object-cover" />
            </div>

            <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-6">
              <div className="h-[200px] overflow-hidden">
                <img src={G2} className="w-full h-full object-cover" />
              </div>
              <div className="h-[200px] overflow-hidden">
                <img src={G3} className="w-full h-full object-cover" />
              </div>
              <div className="h-[200px] overflow-hidden">
                <img src={G4} className="w-full h-full object-cover" />
              </div>
              <div className="h-[200px] overflow-hidden">
                <img src={G9} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* ===== ROW 2 ===== */}
            <div className="col-span-12 lg:col-span-4 h-[260px] overflow-hidden">
              <img src={G6} className="w-full h-full object-cover" />
            </div>
            <div className="col-span-12 lg:col-span-4 h-[260px] overflow-hidden">
              <img src={G7} className="w-full h-full object-cover" />
            </div>
            <div className="col-span-12 lg:col-span-4 h-[260px] overflow-hidden">
              <img src={G1} className="w-full h-full object-cover" />
            </div>

            {/* ===== ROW 3 (SAME PATTERN CONTINUES) ===== */}
            <div className="col-span-12 lg:col-span-7 h-[420px] overflow-hidden">
              <img src={G5} className="w-full h-full object-cover" />
            </div>

            <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-6">
              <div className="h-[200px] overflow-hidden">
                <img src={G10} className="w-full h-full object-cover" />
              </div>
              <div className="h-[200px] overflow-hidden">
                <img src={G11} className="w-full h-full object-cover" />
              </div>
              <div className="h-[200px] overflow-hidden">
                <img src={G12} className="w-full h-full object-cover" />
              </div>
              <div className="h-[200px] overflow-hidden">
                <img src={G13} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* ===== ROW 4 ===== */}
            <div className="col-span-12 lg:col-span-4 h-[260px] overflow-hidden">
              <img src={G14} className="w-full h-full object-cover" />
            </div>
            <div className="col-span-12 lg:col-span-4 h-[260px] overflow-hidden">
              <img src={G15} className="w-full h-full object-cover" />
            </div>
            <div className="col-span-12 lg:col-span-4 h-[260px] overflow-hidden">
              <img src={G16} className="w-full h-full object-cover" />
            </div>

            {/* ===== FINAL ROW ===== */}
            <div className="col-span-12 lg:col-span-4 h-[260px] overflow-hidden">
              <img src={G17} className="w-full h-full object-cover" />
            </div>
            {/* <div className="col-span-12 lg:col-span-4 h-[260px] overflow-hidden">
              <img src={G18} className="w-full h-full object-cover" />
            </div> */}
            <div className="col-span-12 lg:col-span-4 h-[260px] overflow-hidden">
              <img src={G19} className="w-full h-full object-cover" />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
