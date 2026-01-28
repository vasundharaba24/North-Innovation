import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="relative overflow-hidden bg-stone-50">
      <Header />

      {/* 🌫 Soft Gradient Orbs */}
      <div className="pointer-events-none absolute -top-48 -left-48 w-[520px] h-[520px] bg-orange-200/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-48 w-[520px] h-[520px] bg-sky-200/25 rounded-full blur-3xl" />

      {/* ✨ Subtle Line Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px)',
          backgroundSize: '120px 120px'
        }}
      />

      {/* 🧻 Soft Grain Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.4) 1px, transparent 0)',
          backgroundSize: '18px 18px'
        }}
      />

      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-20">
            <p className="text-lg font-medium tracking-widest text-slate-600 mb-4">
              WE ARE JUST A
            </p>

            <h2
              className="text-5xl md:text-6xl font-semibold text-slate-800 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              hello away!
            </h2>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-8"></div>

            <p
              className="text-2xl text-slate-600 max-w-xl mx-auto"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A few details from you, <br></br> a beautiful curation from us. <br></br> <br></br>Let’s begin a gifting experience that delights every time.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-stretch">

            {/* Contact Card */}
            <div className="lg:col-span-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 to-transparent rounded-3xl blur-xl" />

              <div className="relative bg-white/80 backdrop-blur rounded-3xl shadow-xl p-10 h-full flex flex-col justify-between border border-stone-200">

                <div className="space-y-8 text-stone-700">

                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:rashmi@northcurations.com"
                      className="flex items-center gap-4 text-lg hover:text-orange-500 transition"
                    >
                      <Mail className="w-5 h-5" />
                      rashmi@northcurations.com
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/918451852445"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 text-lg hover:text-orange-500 transition"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      +91 84518 52445
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">
                      Phone
                    </p>
                    <p className="text-lg hover:text-orange-500 transition cursor-pointer">
                      +91 84518 52445
                    </p>
                    <p className="text-lg hover:text-orange-500 transition cursor-pointer">
                      +91 98444 35492
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="pt-10 flex items-center justify-between">
                  <p className="text-xs tracking-widest text-stone-400">
                    FOLLOW US
                  </p>
                  <div className="flex gap-6 text-stone-500">
                    <a className="hover:text-orange-500 transition"><Linkedin className="w-5 h-5" /></a>
                    <a className="hover:text-orange-500 transition"><Facebook className="w-5 h-5" /></a>
                    <a className="hover:text-orange-500 transition"><Instagram className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10 z-10 pointer-events-none" />
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=Arekere%20Layout%2C%20DHI%20Office%20Spaces%2C%20Bengaluru%20South%2C%20Karnataka%20560076%2C%20India&output=embed"
                className="w-full h-full min-h-[460px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
