import React from "react";

// Image imports
import PS1 from "../assests/Image1.jpg";
import PS2 from "../assests/Image2.jpg";
import PS3 from "../assests/art.jpg";

const cards = [
  {
    id: 1,
    title: "ABOUT FOUNDER",
    text: `Rashmi Shivkumar
Founder, NORTH CURATIONS

Born in Vijayapura and trained at NIFT Mumbai, Rashmi began her journey creating sustainable, artisan-led fashion with her brand RAEH. What started as a passion for conscious design soon evolved into a deeper calling — crafting thoughtful, personal, and premium gifting experiences.

A side venture into corporate gifting revealed the power of meaningful curation, storytelling, and emotional connection. Today, NORTH CURATIONS reflects that journey with creativity, integrity, and refined attention to detail.`,
    image: PS1,
  },
  {
    id: 2,
    title: "ABOUT NORTH",
    text: `North Curations is where gifting meets intention, emotion, and refined storytelling. Inspired by the idea of a compass, the name reflects guidance and purpose.

We don’t simply customize gifts — we curate experiences. From ideation to delivery, every detail is handled with care, precision, and quiet luxury.`,
    image: PS2,
  },
  {
    id: 3,
    title: "WHY US",
    text: `Because exceptional gifting is never accidental — it is designed.

From sourcing to execution, we create thoughtful, elevated gifting experiences that leave a lasting impression.`,
    image: PS3,
  },
];

export default function NShapedFounderCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {cards.map((card) => (
          <div key={card.id} className="flex justify-center">
            {/* N-SHAPED CARD */}
            <div
              className="w-full max-w-[340px] bg-white border border-slate-200 overflow-hidden"
              style={{ borderRadius: "160px 160px 16px 16px" }}
            >
              {/* IMAGE — CORRECT SIZE */}
              <div
                className="relative h-[360px] m-6 overflow-hidden"
                style={{ borderRadius: "140px 140px 0px 0px" }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* INNER WHITE ARCH */}
                <div
                  className="absolute inset-[16px] pointer-events-none"
                  style={{
                    borderLeft: "2px solid white",
                    borderRight: "2px solid white",
                    borderTop: "2px solid white",
                    borderBottom: "none",
                    borderRadius: "125px 125px 0 0",
                  }}
                />
              </div>

              {/* TEXT — LEFT ALIGNED, READABLE */}
              <div className="px-8 pb-10">
                <h3
                  className="text-xl font-light mb-4 text-slate-900 text-left"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {card.title}
                </h3>

                <div
                  className="text-slate-600 text-sm leading-relaxed space-y-4 whitespace-pre-line text-left"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {card.text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
