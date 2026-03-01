import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import CategorySection from '../components/CategorySection';
import ReviewSection from '../components/ReviewSection';
import Review from '../components/Review';
import InfoSection from '../components/InfoSection';
import DifferentiatorsSection from '../components/DifferentiatorsSection';
import LogoMarquee from '../components/LogoMarquee';
import NShapeCards from '../components/NShapeCards';

const LandingPage = () => {
    return (
        <div className="bg-white text-slate-800">
            <Header />
                <HeroSection />
                <LogoMarquee />
                <NShapeCards />
                <CategorySection />
                <Review />
                <DifferentiatorsSection />
                <InfoSection />
            <Footer />
        </div>
    );
};

export default LandingPage;