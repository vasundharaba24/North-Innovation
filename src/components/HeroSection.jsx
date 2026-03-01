// import { ImageDown } from 'lucide-react'; 
import React, { useState, useEffect } from 'react'; 
import hero_slide2 from '../assests/hero/slide2.png'
import hero_slide1 from '../assests/hero/hero slide 1.jpg'
import hero_side1 from '../assests/hero/Hero slide 1 side pic.  .jpg'
import hero_side2 from '../assests/hero/Hero slide 1 side pic2.jpg'
import hero_side3 from '../assests/hero/Hero slide 1 side pic3.jpg'

import { Link } from 'react-router-dom';


const slides = [
	(
			<div className="flex h-full flex-col md:flex-row">
				{/* Main Content Area */}
				<div className="flex-1 relative overflow-hidden h-[70vh] md:h-screen">
				{/* Background Image */}
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
					backgroundImage: "url('" + hero_slide1 + "')",
					}}
				/>

				{/* Blur Overlay */}
				<div
					className="absolute inset-0"
					style={{
					backdropFilter: 'blur(5px)',
					WebkitBackdropFilter: 'blur(5px)', // Safari
					backgroundColor: 'rgba(0, 0, 0, 0.25)', // controls darkness
					}}
				/>

				{/* Decorative Circles - Hidden on mobile */}
				<div className="hidden md:block absolute inset-0 opacity-20 pointer-events-none z-10">
					<div className="absolute top-20 left-20 w-32 h-32 border border-white/40 rounded-full"></div>
					<div className="absolute bottom-32 right-32 w-24 h-24 border border-white/40 rounded-full"></div>
					<div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/40 rounded-full"></div>
				</div>

				{/* Content */}
				<div className="relative z-20 h-full flex items-center justify-center px-3 md:px-8"> <div className="text-center text-white max-w-2xl"> <p className="text-xs md:text-lg font-medium tracking-widest mb-2 md:mb-4 opacity-90" > CORPORATE GIFTING </p> <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-2 md:mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", textShadow: '0 6px 30px rgba(0,0,0,0.5)', }} > North Curation </h1> <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", textShadow: '0 4px 20px rgba(0,0,0,0.5)', }} > Thoughtful Gifting </h2> <p className="text-lg md:text-xl lg:text-2xl text-white max-w-xl mx-auto opacity-90" style={{ fontFamily: "'Cormorant Garamond', serif", textShadow: '0 4px 20px rgba(0,0,0,0.4)', }} > Wrapping Experiences, Not Just Gifts. Rare finds, meaningful combinations, and custom creations with heart and luxury. </p> </div> </div>
				
				{/* Decorative Product Elements */}
				<div className="absolute bottom-10 left-10 opacity-20 hidden md:block">
				</div>
			</div>
			{/* Side Thumbnails - Hidden on mobile */}
			<div className="hidden md:flex w-80 bg-stone-100 flex-col">
				{/* Thumbnail 1 */}
				<div className="flex-1 relative group cursor-pointer overflow-hidden">
					<img
						src={hero_side1}
						alt="Luxury Candles Collection"
						className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						loading="lazy"
						onError={(e) => {
							e.currentTarget.src =
								'https://images.pexels.com/photos/5639416/pexels-photo-5639416.jpeg?auto=compress&cs=tinysrgb&w=800';
						}}
					/>
					<div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
					<div className="absolute bottom-6 left-6 text-white">
						
					</div>
				</div>
				{/* Thumbnail 2 */}
				<div className="flex-1 relative group cursor-pointer overflow-hidden">
					<img src={hero_side2} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
					<div className="absolute bottom-6 left-6 text-white">
						
					</div>
				</div>
				{/* Thumbnail 3 */}
				<div className="flex-1 relative group cursor-pointer overflow-hidden">
					<img
						src={hero_side3}
						alt="Wall Decor Collection"
						className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						loading="lazy"
						onError={(e) => {
							e.currentTarget.src =
								'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800';
						}}
					/>
					<div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
					<div className="absolute bottom-6 left-6 text-white">
						<p
							className="text-sm font-medium tracking-wide"
							style={{ fontFamily: 'Inter, sans-serif' }}
						>
							
						</p>
					</div>
				</div>
			</div>
		</div>
	),
	(
		(
  (
  <div className="relative h-[70vh] md:h-screen w-full overflow-hidden">

    {/* Background Image */}
    <img
      src={hero_slide2}
      alt="Premium Home Decor Collection"
      className="absolute inset-0 w-full h-full object-cover object-center"
      loading="lazy"
    />

    {/* Strong Gradient Overlay for Left Content */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

    {/* Soft Depth Effect - Hidden on mobile */}
    <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(255,255,255,0.06),transparent_60%)]" />

    {/* Content */}
    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-2xl ml-4 md:ml-24 text-white px-4 md:px-0">

        <h2
          className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 md:mb-6 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Curated Gifting,
          <br />
          Elevated
        </h2>

        <p
          className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 opacity-90"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            lineHeight: 1.6
          }}
        >
          Premium, personalised gifts for celebrations, milestones, and moments.
          <br className="hidden md:block" />
          Designed to feel intentional, elegant, and uniquely yours.
        </p>

        <Link to="/Contact">
          <button
            className="
              border border-white
              px-4 md:px-10
              py-2 md:py-4
              text-xs md:text-sm tracking-widest
              hover:bg-white hover:text-black
              transition-all duration-300
            "
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            REACH OUT FOR CUSTOM CURATIONS
          </button>
        </Link>

      </div>
    </div>

    {/* Subtle Decorative Element - Hidden on mobile */}
    <div className="hidden md:block absolute bottom-24 right-24 w-28 h-28 border border-white/20 rotate-45 opacity-40" />

  </div>
)
)
	),
];
const HeroSection = () => {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 6000);
		return () => clearInterval(timer);
	}, []);

	const goToSlide = (idx) => setCurrent(idx);
	const prevSlide = () =>
		setCurrent(current === 0 ? slides.length - 1 : current - 1);
	const nextSlide = () => setCurrent((current + 1) % slides.length);

	return (
		<main className="relative">
			{/* Carousel Container */}
			<div className="carousel-container relative h-[70vh] md:h-screen overflow-hidden">
				{slides.map((slide, idx) => (
					<div
						key={idx}
						className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${
							current === idx
								? 'opacity-100 pointer-events-auto'
								: 'opacity-0 pointer-events-none'
						}`}
					>
						{slide}
					</div>
				))}
			</div>

			{/* Carousel Navigation Dots */}
			<div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-4 z-20">
				{slides.map((_, idx) => (
					<button
						key={idx}
						className={`carousel-dot w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
							current === idx ? 'bg-white' : 'bg-white/50'
						}`}
						onClick={() => goToSlide(idx)}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>

			{/* Carousel Navigation Arrows */}
			<button
				className="carousel-prev absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
				onClick={prevSlide}
				aria-label="Previous Slide"
			>
				<svg
					className="w-4 h-4 md:w-6 md:h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>
			<button
				className="carousel-next absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
				onClick={nextSlide}
				aria-label="Next Slide"
			>
				<svg
					className="w-4 h-4 md:w-6 md:h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</button>
		</main>
	);
};
 
export default HeroSection;
