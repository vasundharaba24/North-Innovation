import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assests/North Curations (main).png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // 🔒 Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => (document.body.style.overflow = '');
  }, [open]);

  // 🔁 Auto-close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-stone-50 border-b border-stone-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between relative min-h-[72px]">

          {/* LOGO — DESKTOP (UNCHANGED) */}
          <div className="hidden md:block text-start pl-28">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="mx-auto h-16 w-auto object-contain md:h-20"
              />
            </Link>
          </div>

          {/* LOGO — MOBILE (CENTERED, SAFE) */}
          <div className="md:hidden flex-1 flex justify-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-14 w-auto object-contain max-w-[70vw]"
              />
            </Link>
          </div>

          {/* DESKTOP NAV — UNCHANGED */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8 whitespace-nowrap">
              <Link to="/" className="text-slate-700 hover:text-[#AF4110] transition-colors text-sm font-medium tracking-wide">Home</Link>
              <Link to="/explore" className="text-slate-700 hover:text-[#AF4110] transition-colors text-sm font-medium tracking-wide">Explore</Link>
              {/* <Link to="/contact" className="text-slate-700 hover:text-[#AF4110] transition-colors text-sm font-medium tracking-wide">Custom Curations</Link> */}
              <Link to="/about" className="text-slate-700 hover:text-[#AF4110] transition-colors text-sm font-medium tracking-wide">About</Link>
              <Link to="/gallery" className="text-slate-700 hover:text-[#AF4110] transition-colors text-sm font-medium tracking-wide">Gallery</Link>
              <Link to="/contact" className="text-slate-700 hover:text-[#AF4110] transition-colors text-sm font-medium tracking-wide">Contact</Link>
            </nav>
          </div>

          {/* MOBILE MENU BUTTON — SAFE TOUCH AREA */}
          <button
            className="md:hidden absolute right-0 p-4 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-[2px] w-6 bg-slate-700 transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-[2px] w-6 bg-slate-700 transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-[2px] w-6 bg-slate-700 transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`
          md:hidden
          fixed
          inset-0
          bg-stone-50
          z-40
          transition-transform
          duration-500
          ease-out
          ${open ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        {/* SAFE AREA + CENTERED NAV */}
        <div className="flex flex-col items-center justify-center h-full gap-7 text-lg px-6 text-center">
          <Link to="/" className="hover:text-[#AF4110] transition">Home</Link>
          <Link to="/explore" className="hover:text-[#AF4110] transition">Explore</Link>
          <Link to="/contact" className="hover:text-[#AF4110] transition">Custom Curations</Link>
          <Link to="/about" className="hover:text-[#AF4110] transition">About</Link>
          <Link to="/gallery" className="hover:text-[#AF4110] transition">Gallery</Link>
          <Link to="/contact" className="hover:text-[#AF4110] transition">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
