import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PS1 from "../assests/PS3.JPG";

const AboutUsSection = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-20">

            {/* LEFT TEXT — UNCHANGED */}
            <div className="flex-1 max-w-lg">
              <h1 className="text-6xl font-serif text-stone-600 mb-8">
                About Us
              </h1>

              <p className="text-justify">
                At North Curations, we believe gifting is an experience one that
                inspires connection, reflects your brand, and strengthens
                relationships. Based in Bengaluru, we specialize in thoughtful,
                customized corporate gifting for companies ranging from Fortune
                500 organizations to fast-growing startups.
              </p>

              <p className="text-justify">
                Every curation is crafted with intention. We take the time to
                understand your brand, your people, and the purpose behind each
                moment. Whether it’s onboarding kits, client appreciation,
                festival gifting, or milestone celebrations, we bring together
                meaningful design, personalization, and seamless execution to
                deliver gifts that truly resonate.
              </p>

              <p className="text-justify">
                With a commitment to quality, creativity, and corporate
                sensibility, North Curations transforms ordinary gifting into
                lasting impressions making every gesture count.
              </p>
            </div>

            {/* RIGHT — ARCH IMAGE WITH OPEN WHITE OUTLINE */}
            <div className="flex-1 flex justify-center">
              <div
                className="relative w-[340px] h-[500px] overflow-hidden"
                style={{
                  borderRadius: "170px 170px 5px 5px"
                }}
              >
                {/* Image */}
                <img
                  src={PS1}
                  alt="About visual"
                  className="w-full h-full object-cover"
                />

                {/* INNER WHITE ARCH (NO BOTTOM LINE) */}
                <div
                  className="absolute inset-[20px] pointer-events-none"
                  style={{
                    borderLeft: "2px solid white",
                    borderRight: "2px solid white",
                    borderTop: "2px solid white",
                    borderBottom: "none",
                    borderRadius: "150px 150px 0 0"
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsSection;
