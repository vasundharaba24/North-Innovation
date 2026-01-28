   // import { ImageDown } from 'lucide-react'; 
import React, { useState, useEffect } from 'react'; 
// import Image1 from '../assests/Image1.jpg'
import Image2 from '../assests/Image2.jpg'
// import bg3 from '../assests/bg3.png'
import image from '../assests/image.JPG'
// import PS1 from '../assests/PS1.JPG'
// import PS2 from '../assests/PS2.JPG'
// import PS3 from '../assests/PS3.JPG'
// import main3 from '../assests/main3.JPG'
// import main2 from '../assests/main2.jpg'
// import CP1 from '../assests/CP1.JPG'
// import CP2 from '../assests/CP2.JPG'
// import image3 from '../assests/image3.png'
import I1 from '../assests/I1.png'
import I2 from '../assests/I2.png'
import I3 from '../assests/I3.png'

import { Link } from 'react-router-dom';


const slides = [
	(
		<div className="flex h-full">
			{/* Main Content Area */}
			<div className="flex-1 relative overflow-hidden min-h-screen">
				{/* Background Image */}
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
					backgroundImage: "url('" + Image2 + "')",
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

				{/* Decorative Circles */}
				<div className="absolute inset-0 opacity-20 pointer-events-none z-10">
					<div className="absolute top-20 left-20 w-32 h-32 border border-white/40 rounded-full"></div>
					<div className="absolute bottom-32 right-32 w-24 h-24 border border-white/40 rounded-full"></div>
					<div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/40 rounded-full"></div>
				</div>

				{/* Content */}
				<div className="relative z-20 h-full flex items-center justify-center">
					<div className="text-center text-white max-w-2xl px-8">
					<p
						className="text-sm font-medium tracking-widest mb-3 opacity-90"
						style={{ fontFamily: 'Inter, sans-serif' }}
					>
						CORPORATE GIFTING
					</p>

					<h1
						className="text-6xl md:text-7xl font-light mb-6"
						style={{
						fontFamily: 'Playfair Display, serif',
						lineHeight: 0.95,
						textShadow: '0 6px 30px rgba(0,0,0,0.5)',
						}}
					>
						North Curation Thoughtful Gifting
					</h1>

					<p
						className="text-2xl font-light opacity-90"
						style={{
						fontFamily: 'Cormorant Garamond, serif',
						textShadow: '0 4px 20px rgba(0,0,0,0.4)',
						}}
					>
						Wrapping Experiences, Not Just Gifts. Rare finds, meaningful combinations, and custom creations with heart and luxury. Every gift is a story waiting to be shared.
					</p>
					</div>
				</div>
				
				{/* Decorative Product Elements */}
				<div className="absolute bottom-10 left-10 opacity-20">
					{/* <svg
						className="w-16 h-16 text-white"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M12 2L13.09 8.26L19 7.27L14.18 12.73L21 14.09L12 19L3 14.09L9.82 12.73L5 7.27L10.91 8.26L12 2Z" />
					</svg> */}
				</div>
			</div>
			{/* Side Thumbnails */}
			<div className="w-80 bg-stone-100 flex flex-col">
				{/* Thumbnail 1 */}
				<div className="flex-1 relative group cursor-pointer overflow-hidden">
					<img
						src={Image2}
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
						{/* <p
							className="text-sm font-medium tracking-wide"
							style={{ fontFamily: 'Inter, sans-serif' }}
						>
							shop candles
						</p> */}
					</div>
				</div>
				{/* Thumbnail 2 */}
				<div className="flex-1 relative group cursor-pointer overflow-hidden">
					<img src={I1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
					<div className="absolute bottom-6 left-6 text-white">
						{/* <p
							className="text-sm font-medium tracking-wide"
							style={{ fontFamily: 'Inter, sans-serif' }}
						>
							shop vases
						</p> */}
					</div>
				</div>
				{/* Thumbnail 3 */}
				<div className="flex-1 relative group cursor-pointer overflow-hidden">
					<img
						src={I3}
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
		<div className="relative h-full">
			<img
				src={I2}
				alt="Premium Home Decor Collection"
				className="w-full h-full object-cover"
				loading="lazy"
				onError={(e) => {
					e.currentTarget.src =
						'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920';
				}}
			/>
			{/* Overlay */}
			<div
				className="absolute inset-0"
				style={{
					background:
						'linear-gradient(45deg, rgba(104, 132, 170, 0.7) 0%, rgba(104, 132, 170, 0.4) 100%)',
				}}
			></div>
			{/* Content Overlay */}
			<div className="absolute inset-0 flex items-center">
				<div className="max-w-2xl mx-16 text-white">
					<h2
						className="text-5xl md:text-6xl font-light mb-6"
						style={{ fontFamily: 'Playfair Display, serif', lineHeight: 1.1 }}
					>
						Curated Gifting, 
						<br />
						Elevated
					</h2>
					<p
						className="text-xl mb-8 opacity-90"
						style={{ fontFamily: 'Cormorant Garamond, serif', lineHeight: 1.6 }}
					>
						Premium, personalised gifts for celebrations, milestones, and moments. <br></br>
						Designed to feel intentional, elegant, and uniquely yours.
					</p>
					<div className="flex space-x-4">
						
						<Link to={'/Contact'}>
						<button
							className="border-2 border-white text-white px-10 py-4 text-sm font-medium tracking-widest hover:bg-white hover:text-slate-800 transition-all duration-300"
							style={{ fontFamily: 'Inter, sans-serif' }}
						>
							REACH OUT FOR CUSTOM CURATIONS
						</button>
						</Link>
					</div>
				</div>
			</div>
			{/* Decorative Elements */}
			<div className="absolute top-20 right-20 opacity-30">
				<div className="w-24 h-24 border border-white rounded-full animate-pulse"></div>
			</div>
			<div className="absolute bottom-32 right-1/4 opacity-20">
				<div className="w-16 h-16 border border-white rotate-45"></div>
			</div>
		</div>
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
			<div className="carousel-container relative h-screen overflow-hidden">
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
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
				{slides.map((_, idx) => (
					<button
						key={idx}
						className={`carousel-dot w-3 h-3 rounded-full transition-all duration-300 ${
							current === idx ? 'bg-white' : 'bg-white/50'
						}`}
						onClick={() => goToSlide(idx)}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>

			{/* Carousel Navigation Arrows */}
			<button
				className="carousel-prev absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
				onClick={prevSlide}
				aria-label="Previous Slide"
			>
				<svg
					className="w-6 h-6"
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
				className="carousel-next absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
				onClick={nextSlide}
				aria-label="Next Slide"
			>
				<svg
					className="w-6 h-6"
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
 