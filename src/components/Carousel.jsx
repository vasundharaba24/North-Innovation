import React, { useEffect, useState } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            id: 1,
            content: (
                <div className="flex h-full">
                    <div className="flex-1 relative" style={{ background: 'linear-gradient(135deg, #6884AA 0%, #8fa4c4 100%)' }}>
                        <div className="absolute inset-0 opacity-10"></div>
                        <div className="relative z-10 h-full flex items-center justify-center"></div>
                        <div className="absolute bottom-10 left-10 opacity-20"></div>
                    </div>
                    <div className="w-80 bg-stone-100 flex flex-col">
                        <div className="flex-1 relative group cursor-pointer overflow-hidden"></div>
                        <div className="flex-1 relative group cursor-pointer overflow-hidden"></div>
                        <div className="flex-1 relative group cursor-pointer overflow-hidden"></div>
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            content: (
                <div className="relative h-full">
                    <img
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1920&auto=format&fit=crop"
                        alt="Premium Home Decor Collection"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                            e.currentTarget.src = 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920';
                        }}
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(45deg, rgba(104, 132, 170, 0.7) 0%, rgba(104, 132, 170, 0.4) 100%)' }}></div>
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-2xl mx-16 text-white"></div>
                    </div>
                    <div className="absolute top-20 right-20 opacity-30">
                        <div className="w-24 h-24 border border-white rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute bottom-32 right-1/4 opacity-20">
                        <div className="w-16 h-16 border border-white rotate-45"></div>
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            content: (
                <div className="flex h-full">
                    <div className="w-1/2 relative flex items-center justify-center" style={{ background: 'linear-gradient(225deg, #6884AA 0%, #7691b8 100%)' }}>
                        <div className="absolute inset-0 opacity-10"></div>
                        <div className="relative z-10 text-white text-center max-w-md px-8"></div>
                    </div>
                    <div className="w-1/2 bg-stone-100">
                        <div className="grid grid-cols-2 h-full"></div>
                    </div>
                </div>
            ),
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative">
            <div className="carousel-container relative h-screen overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            currentSlide === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {slide.content}
                    </div>
                ))}
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === index ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
            <button
                className="carousel-prev absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
                onClick={prevSlide}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                className="carousel-next absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
                onClick={nextSlide}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default Carousel;