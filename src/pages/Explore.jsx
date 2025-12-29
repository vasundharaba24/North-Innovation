import React from 'react';
import ExploreSection1 from '../components/ExploreSection1';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExploreSection2 from '../components/ExploreSection2';
import ExploreSection3 from '../components/ExploreSection3'; 

const Explore = () => {
    return (
        <div>
            <Header />
            <ExploreSection1 />
            <ExploreSection2 />
            <ExploreSection3 />
            <Footer />
        </div>
    );
};

export default Explore;