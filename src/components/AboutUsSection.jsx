import React from "react";
import about1 from "../assests/main3.JPG";
import about2 from "../assests/Explore/Workspace essentials.jpg";
import about3 from "../assests/Explore/Custom apparel.jpg";
import Header from "./Header";
import Footer from "./Footer";
import founder from "../assests/founder/founder pic 2.jpg";
import whyyus from "../assests/founder/image.png";
import aboutus from "../assests/founder/about.jpg";

export default function AboutUsSection() {
  return (
    <div>
      <Header />

 
    <div className="w-full bg-white font-light py-12 md:py-24">

      <div className="text-center mb-14 md:mb-20">
      <h2
          className="text-3xl md:text-6xl font-semibold text-slate-800 mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
         About Us
        </h2>
      </div>
        
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16 md:space-y-28">

        {/* SECTION 1 — Image Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl">
            <img
              src={whyyus}
              alt="Our Story"
              className="w-full h-[260px] md:h-[380px] lg:h-[460px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div>
            <h3
              className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Why Us?
            </h3>

            <p
              className="text-gray-600 leading-relaxed text-base md:text-xl max-w-lg text-justify"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
             Because exceptional gifting is never accidental- it is carefully designed. At North Curations, we take complete ownership of the entire experience, from ideation and curation to quality, packaging, and seamless delivery. 
              <br /><br />
              What truly sets us apart is our passion for originality. We source rare finds, create unexpected combinations, and add thoughtful twists that transform ordinary gifts into something unforgettable. With a keen eye for detail and a love for meaningful moments, we make every gift feel intentional, luxurious, and deeply memorable. 
              <br /><br />
              Because at North Curations, we are Wrapping Experiences, Not Just Gifts.             
            </p>
          </div>
        </div>


        {/* SECTION 2 — Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
 <div>
            <h3
              className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
             About Us
            </h3>

            <p
              className="text-gray-600 leading-relaxed text-base md:text-xl max-w-lg text-justify"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              North Curations is where gifting meets intention, emotion, and refined storytelling. Rooted in the idea of a compass, the name reflects our commitment to helping clients navigate their journey and move confidently in the right direction.
              <br /><br />
               We don’t just customize gifts- we curate experiences that feel thoughtful, elevated, and emotionally rich. From the first spark of an idea to the final beautifully delivered package, every step is handled with care, precision, and quiet luxury. Each product is chosen not only for how it looks, but for how it makes someone feel. We believe a gift should do more than impress- it should connect, surprise, and stay in the heart long after it is received.
               <br /><br />
                At North Curations, every detail is designed to reflect meaning, emotion, and craftsmanship, turning simple gestures into unforgettable moments that feel truly personal.
                Every piece we curate carries thought, detail, and quiet luxury. We design experiences that feel personal, refined, and meaningful.
            </p>
          </div>
          

          <div className="overflow-hidden rounded-tr-3xl rounded-bl-3xl">
            <img
              src={aboutus}
              alt="Our Philosophy"
              className="w-full h-[260px] md:h-[380px] lg:h-[460px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>


        {/* SECTION 3 — Image Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

       
<div className="overflow-hidden rounded-tl-3xl rounded-br-3xl">
  <img
    src={founder}
    alt="Founder"
    className="w-full h-[260px] md:h-[380px] lg:h-[460px] object-cover object-[50%_20%] transition-transform duration-700 hover:scale-105"
  />
</div>

          <div>
            <h3
              className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              About The Founder
            </h3>

            <p
              className="text-gray-600 leading-relaxed text-base md:text-xl max-w-lg"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Rashmi Shivkumar<br></br>
              Founder, NORTH CURATIONS

              <br /><br />
              Born in Vijayapura and trained at NIFT Mumbai, I began my journey creating sustainable, artisan-led fashion with RAEH. A side venture into corporate gifting revealed a deeper passion—crafting meaningful, personal, and premium gifting experiences.
              <br /><br />
              
              Today, NORTH CURATIONS thrives with trusted clients, thoughtful hampers, and 2.5 years of milestones. My vision is simple: to make NORTH a name synonymous with creativity, integrity, and curated gifting that truly stands out.
            </p>
          </div>
        </div>

      </div>
    </div>
    <Footer />
        </div>
  );
}