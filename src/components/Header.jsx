import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/North Curations (main).png'; 

const Header = () => {
    return (
        <div>
            {/* Top Banner */}
            {/* Header */}
            <header className="bg-stone-50 border-b border-stone-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 ">
                    <div className="flex items-center justify-between">

                        

                        {/* Center Logo */}
                        <div className="text-start pl-28" >
                            <Link to="/">
                                <img 
                                    src={logo} 
                                    alt="Logo" 
                                    className="mx-auto h-16 w-auto object-contain md:h-20"
                                />
                            </Link>
                        </div>

                        {/* Right Nav + Social */}
                        <div className="flex items-center space-x-8">
                            <nav className="hidden md:flex items-center space-x-8">
                               <Link to="/" className="text-slate-700 hover:text-[#AF4110] transition-colors text-sm font-medium tracking-wide">Home</Link>
                               <Link to="/explore" className="text-slate-700 hover:text-[#AF4110] transition-colors text-sm font-medium tracking-wide">Explore</Link> 
                                <Link to="/about" className="text-slate-700 hover:text-[#AF4110] transition-colors text-sm font-medium tracking-wide">About</Link>
                               <Link to={'/contact'} className="text-slate-700 hover:text-[#AF4110] transition-colors text-sm font-medium tracking-wide">Contact</Link>
                            </nav>

                            {/* Social Icons */}
                            <div className="flex items-center space-x-3">
                                {/* <svg className="w-5 h-5 text-slate-600 hover:text-slate-800 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609..."/>
                                </svg>
                                <svg className="w-5 h-5 text-slate-600 hover:text-slate-800 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367..."/>
                                </svg> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;