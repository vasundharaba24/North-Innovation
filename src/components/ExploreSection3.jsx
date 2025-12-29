import React from "react";
import Indian from "../assests/Indian.png";
import Bamboo from "../assests/bamboo.png";
import crok from '../assests/crok.png'
import reuse from '../assests/Reuse.png'
const ExploreSection3 = () => {
  return (
    <div>

      {/* Heading Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-slate-600 mb-4">
              HOW ABOUT
            </p>

            <h2
              className="text-5xl md:text-6xl font-light text-slate-800 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Something unusual
            </h2>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-8"></div>

            <p
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Every detail considered. Every choice deliberate.
              Let’s create something that reflects discernment, quality, and quiet confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Card Layout Section */}
      <section className="max-w-7xl mx-auto px-8 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Card 1 */}
          <div className="flex bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <div className="w-[320px] h-[350px] flex-shrink-0 bg-stone-100">
              <img src={Indian} alt="Indian Heritage Crafts" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl text-slate-800 mb-3 font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                Indian Heritage Crafts
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Timeless handcrafted pieces that carry legacy, culture, and meaning — gifting that feels rare, personal, and deeply considered.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <div className="w-[320px] h-[350px] flex-shrink-0 bg-stone-100">
              <img src={Bamboo} alt="Bamboo Giftings" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl text-slate-800 mb-3 font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                Bamboo Giftings
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Naturally refined essentials that signal responsibility without compromise — sustainable gifting with elevated taste.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <div className="w-[320px] h-[350px] flex-shrink-0 bg-stone-100">
              <img src={crok} alt="Cork Giftings" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl text-slate-800 mb-3 font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                Cork Giftings
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Distinctive textures and modern utility combined — gifting that feels thoughtful, contemporary, and intentionally different.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <div className="w-[320px] h-[350px] flex-shrink-0 bg-stone-100">
              <img src={reuse} alt="Reduce Reuse Recycle" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl text-slate-800 mb-3 font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                Reduce Reuse Recycle
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Conscious choices transformed into meaningful gifts — where values, impact, and brand intent quietly align.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ExploreSection3;
