import React from "react";

const TrustedBrands = () => {
  const brandList = [
    {
      name: "American Express",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg"
    },
    {
      name: "Kotak Mahindra Bank",
      url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Kotak_Mahindra_Group_logo.svg"
    },
    {
      name: "Novo Nordisk",
      url: "https://upload.wikimedia.org/wikipedia/commons/1/16/Novo_Nordisk_logo.svg"
    },
    {
      name: "Sodexo",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/09/Sodexo_logo.svg"
    },
    {
      name: "NTPC",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/NTPC_Logo.svg"
    },
    // For now use placeholder logos (replace later with real URLs or put PNGs inside /public/logos/)
    { name: "Brand Raga", url: "https://via.placeholder.com/150x80?text=Brand+Raga" },
    { name: "Vrukshathon", url: "https://via.placeholder.com/150x80?text=Vrukshathon" },
    { name: "Bijapur", url: "https://via.placeholder.com/150x80?text=Bijapur" },
    { name: "MRPL", url: "https://via.placeholder.com/150x80?text=MRPL" },
    { name: "Evotek", url: "https://via.placeholder.com/150x80?text=Evotek" },
    { name: "Vultec", url: "https://via.placeholder.com/150x80?text=Vultec" },
    { name: "Inspire", url: "https://via.placeholder.com/150x80?text=Inspire" },
    { name: "Custard Apple", url: "https://via.placeholder.com/150x80?text=Custard+Apple" },
    { name: "EduTech", url: "https://via.placeholder.com/150x80?text=EduTech" }
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-[#F4F1ED]">
      {/* Section heading */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#07325F" }}>
          Trusted by Leading Brands
        </h2>
        <p className="mt-2 italic" style={{ color: "#AF4110" }}>And growing…</p>
      </div>

      {/* Logo Marquee */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {brandList.map((brand, idx) => (
            <img
              key={idx}
              src={brand.url}
              alt={brand.name}
              className="h-20 w-auto mx-10 object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-xl"
            />
          ))}
          {/* Duplicate for seamless infinite scroll */}
          {brandList.map((brand, idx) => (
            <img
              key={`dup-${idx}`}
              src={brand.url}
              alt={`${brand.name} duplicate`}
              className="h-20 w-auto mx-10 object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;