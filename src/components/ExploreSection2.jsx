import React from "react";
import main3 from "../assests/main3.JPG";
import festival from "../assests/festival.jpg";
import snacks from "../assests/snacks.jpg";
import explore1 from "../assests/explore1.png";
import explore2 from "../assests/explore2.png";
import explore3 from "../assests/explore3.png";
import explore4 from "../assests/explore4.png";
import conference from '../assests/conference.png'

export default function ExploreSection2() {
  return (
    <div className="w-full bg-white font-light">
       <section className="pb-10 pt-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-slate-600 mb-4">
              HAVE A LOOK AT
            </p>

            <h2
              className="text-5xl md:text-6xl font-light text-slate-800 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >     
                Corporate Gifting Essentials
            </h2>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-8"></div>

            {/* <p
              className="text-xl text-slate-600 max-w-3xl mx-auto"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Every detail considered. Every choice deliberate.
              Let’s create something that reflects discernment, quality, and quiet confidence.
            </p> */}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-24 space-y-28">

        {/* ROW 1 — Image Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl">
            <img
              src={explore1}
              alt="Custom Apparel"
              className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div>
            <h3 className="text-3xl font-serif text-gray-800 mb-4">
              Custom Apparel
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Premium, thoughtfully curated apparel designed to represent your brand with quiet confidence.
              <br /><br />
              <b>Includes:</b> High-quality T-shirts, polos, shirts & hoodies, subtle logo embroidery or clean branding, brand-aligned colors & refined fits, comfortable and durable fabrics, optional eco-friendly materials, premium minimal packaging.
              <br /><br />
              Perfect for teams, events, onboarding, and brand-led experiences.
            </p>
          </div>
        </div>

        {/* ROW 2 — Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-serif text-gray-800 mb-4">
              Workspace Essentials
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Curated workspace essentials designed to elevate everyday work with function and refined aesthetics.
              <br /><br />
              <b>Includes:</b> Premium notebooks & pens, desk organizers & minimal accessories, laptop sleeves & work pouches, bottles, mugs & desk utilities, brand-aligned colors with subtle branding, clean premium packaging.
              <br /><br />
              Ideal for modern teams, onboarding kits, and thoughtfully designed workspaces.
            </p>
          </div>

          <div className="overflow-hidden rounded-tr-3xl rounded-bl-3xl">
            <img
              src={explore2}
              alt="Workspace Essentials"
              className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* ROW 3 — Image Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl">
            <img
              src={explore3}
              alt="Tech & Gadgets"
              className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div>
            <h3 className="text-3xl font-serif text-gray-800 mb-4">
              Tech & Gadgets
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Smart, functional devices curated to support modern workstyles with precision and ease.
              <br /><br />
              <b>Includes:</b> Wireless mice & keyboards, noise-cancelling headphones, power banks & fast chargers, USB-C hubs, Bluetooth speakers, smart productivity accessories, subtle brand customization, premium protective packaging.
              <br /><br />
              Ideal for tech-forward teams, executive kits, and high-utility gifting.
            </p>
          </div>
        </div>

        {/* ROW 4 — Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-serif text-gray-800 mb-4">
              Festive Hampers
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Thoughtfully curated festive hampers designed to celebrate moments with warmth, culture, and elegance.
              <br /><br />
              <b>Includes:</b> Traditional sweets & delicacies, premium dry fruits, festive décor accents, regional specialties, custom notes & festive packaging, brand-aligned presentation.
              <br /><br />
              Ideal for festivals, celebrations, and meaningful client relationships.
            </p>
          </div>

          <div className="overflow-hidden rounded-tr-3xl rounded-bl-3xl">
            <img
              src={explore4}
              alt="Festive Hampers"
              className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* ROW 5 — Image Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl">
            <img
              src={conference}
              alt="Food & Gourmet Gifting"
              className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div>
           <h3 className="text-3xl font-serif text-gray-800 mb-4">
            Conference & Event Kits
          </h3>
          <p>
            Curated essentials designed to create a seamless and memorable experience at conferences, seminars, and brand-led events.
            <br /><br />

            <b>Includes:</b>
            Branded notebooks & pens, Event badges & lanyards, Welcome kits & information inserts, Drinkware & utility items, Tech accessories for events, Thoughtful brand touchpoints, Clean and professional packaging
            <br /><br />

            Ideal for conferences, corporate meets, seminars, and curated brand experiences.
          </p>
          </div>
        </div>

      </div>
    </div>
  );
}
