import React from 'react';
import logo from '../assests/North Curations (main).png'; // <-- update path to your logo
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-[#cfd8e4] border-t border-stone-300 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="mb-6">
                            {/* <h2 className="text-2xl font-light tracking-widest text-slate-800" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.2em' }}>NORTH CURATION</h2> */}

                        <div className="flex-1 text-center">
                            <Link to="/">
                                <img 
                                    src={logo} 
                                    alt="Logo" 
                                    className="h-16 object-contain md:h-20"
                                />
                            </Link>
                        </div>

                        </div>
                        <p className="text-slate-600 mb-6 max-w-md" style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.6 }}>
                            Delivering premium, thoughtfully curated gifting solutions that reflect craftsmanship, intention, and modern elegance.
                        </p>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-stone-300 mt-12 pt-8">
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