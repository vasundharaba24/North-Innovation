import React from 'react';

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "John D.",
      title: "Exceptional craftsmanship.",
      text: "The craftsmanship is top-notch. Every detail is perfect and the attention to detail is outstanding.",
      image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Marcus K.",
      title: "Outstanding quality and craftsmanship.",
      text: "Every piece exceeded my expectations. The attention to detail is remarkable and the materials are top-notch quality.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Sarah M.",
      title: "Transformed our entire home.",
      text: "The consultation was thorough and professional. Every recommendation was perfect for our space and lifestyle needs.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Emily R.",
      title: "Incredible attention to detail.",
      text: "From the initial consultation to final delivery, everything was handled with care. Highly recommend to everyone!",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - styled like CategorySection */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <p
              className="text-sm font-medium tracking-widest text-slate-600 mb-4"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.25em' }}
            >
              WHAT CLIENTS SAY
            </p>
            <h2
              className="text-5xl md:text-6xl font-light text-slate-800 mb-6"
              style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
            >
              Reviews <span className='text-[#AF4110]'>&</span> Experiences
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-8"></div>
          </div>
          <p
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Discover how our curated collections have transformed homes and lives. Real stories, real satisfaction.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative mt-8 group"
            >
              {/* Profile Picture - Overlapping the top of the card, with hover animation */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                />
              </div>

              {/* Review Card with hover effect */}
              <div
                className="relative w-full px-6 py-8 pt-12 text-center h-80 flex flex-col transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-2xl group-hover:bg-[#b7c3d6]"
                style={{ backgroundColor: '#c8d1e0', fontFamily: "'Inter', sans-serif" }}
              >
                {/* Inner decorative border */}
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-white"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Name */}
                  <h3 className="text-lg font-medium text-gray-800 mb-4 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {review.name}
                  </h3>

                  {/* Content Area */}
                  <div className="flex-1 flex flex-col justify-center space-y-4">
                    {/* Title */}
                    <p className="text-gray-800 font-semibold text-sm leading-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {review.title}
                    </p>

                    {/* Review Text */}
                    <p className="text-gray-800 text-xs leading-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {review.text}
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gray-800 text-base" style={{ fontFamily: "'Playfair Display', serif" }}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;