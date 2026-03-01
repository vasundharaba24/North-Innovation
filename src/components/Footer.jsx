import React from 'react';
import logo from '../assests/North Curations (main).png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-[#cfd8e4] border-t border-stone-300 py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-6 md:gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="mb-4 md:mb-6">
                            <div className="flex-1 text-center">
                                <Link to="/">
                                    <img 
                                        src={logo} 
                                        alt="Logo" 
                                        className="h-12 md:h-16 object-contain"
                                    />
                                </Link>
                            </div>
                        </div>
                        <p className="text-slate-600 mb-4 md:mb-6 max-w-md text-lg md:text-xl" style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.6 }}>
                            Delivering premium, thoughtfully curated gifting solutions that reflect craftsmanship, intention, and modern elegance.
                        </p>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-stone-300 mt-8 md:mt-12 pt-6 md:pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
                        <p style={{ fontFamily: "'Inter', sans-serif" }}>
                            © 2025 NORTH CURATION. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
