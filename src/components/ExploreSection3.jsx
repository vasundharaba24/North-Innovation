import React from "react";
import Indian from "../assests/Indian.png";
import crok from '../assests/Explore/cork giftings.jpg'
import wedding from '../assests/Explore/Vow collection.jpg'
import green from '../assests/green_edit.png';
const ExploreSection3 = () => {
  return (
    <div>

      {/* Heading Section */}
      <section className="py-12 md:py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-base md:text-lg font-medium tracking-widest text-slate-600 mb-3 md:mb-4">
              HOW ABOUT
            </p>

            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-800 mb-4 md:mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Rare Finds
            </h2>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-6 md:mb-8"></div>

            <p
              className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Uncommon pieces with extraordinary charm.
              Curated for those who love the different.
            </p>
          </div>
        </div>
      </section>

      {/* Card Layout Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16 md:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

          {/* Card 1 */}
          <div className="flex flex-col md:flex-row bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <div className="w-full md:w-[320px] h-[250px] md:h-[350px] flex-shrink-0 bg-stone-100">
              <img src={Indian} alt="Indian Heritage Crafts" className="w-full h-full object-cover" />
            </div>
            <div className="p-5 md:p-8 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl text-slate-800 mb-2 md:mb-3 font-bold"  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
               The Heritage Edit
              </h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Timeless crafts from across India. Handmade traditions, passed through generations. Curated to preserve culture in every detail.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <div className="w-full md:w-[320px] h-[250px] md:h-[350px] flex-shrink-0 bg-stone-100">
              <img src={green} alt="Bamboo Giftings" className="w-full h-full object-cover" />
            </div>
            <div className="p-5 md:p-8 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl text-slate-800 mb-2 md:mb-3 font-bold"  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                The Green Edit
              </h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
               Thoughtful gifts, lighter on the earth. Curated with care for people and the planet. Sustainable choices, beautifully presented.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col md:flex-row bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <div className="w-full md:w-[320px] h-[250px] md:h-[350px] flex-shrink-0 bg-stone-100">
              <img src={crok} alt="Cork Giftings" className="w-full h-full object-cover" />
            </div>
            <div className="p-5 md:p-8 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl text-slate-800 mb-2 md:mb-3 font-bold" 
               style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Cork Giftings
              </h3>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed" 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Distinctive textures and modern utility combined gifting that feels thoughtful, contemporary, and intentionally different.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col md:flex-row bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <div className="w-full md:w-[320px] h-[250px] md:h-[350px] flex-shrink-0 bg-stone-100">
              <img src={wedding} alt="Reduce Reuse Recycle" className="w-full h-full object-cover" />
            </div>
            <div className="p-5 md:p-8 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl text-slate-800 mb-2 md:mb-3 font-bold"  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                The Vow Collection
              </h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Gifts that celebrate forever. Designed to honour promises, partnerships, and lifelong togetherness. Timeless keepsakes for timeless bonds.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ExploreSection3;
