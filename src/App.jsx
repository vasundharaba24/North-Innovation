import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutUsSection from './components/AboutUsSection';
import './styles/tailwind.css';
import './styles/main.css';
import Explore from './pages/Explore';
import Contact from './components/Contact';
import LoginPage from './components/LoginPage';
import NShapeCards from './components/NShapeCards.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutUsSection />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/nshapecards" element={<NShapeCards />} />
                    <Route path='/gallery' element={<PhotoGallery/>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;