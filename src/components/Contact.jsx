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
    <div>
      <Header />

      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-slate-600 mb-4">
              CONTACT US
            </p>

            <h2
              className="text-5xl md:text-6xl font-light text-slate-800 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let’s Connect
            </h2>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-8"></div>

            <p
              className="text-xl text-slate-600"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Get in touch. We’d love to hear from you.
            </p>
          </div>

          {/* Parallel Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

            {/* Left: Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col justify-between">

              {/* TOP: Primary Contact Methods */}
              <div className="space-y-6 text-stone-600">

                {/* Email */}
                <a
                  href="mailto:rashmi@northcurations.com"
                  className="flex items-center gap-4 hover:text-orange-500 transition"
                >
                  <Mail className="w-5 h-5" />
                  <span>rashmi@northcurations.com</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918451852445"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 hover:text-orange-500 transition"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>+91 84518 52445</span>
                </a>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-1" />
                  <div className="space-y-1">
                    <p className="cursor-pointer hover:text-orange-500 transition">
                      +91 84518 52445
                    </p>
                    <p className="cursor-pointer hover:text-orange-500 transition">
                      +91 98444 35492
                    </p>
                  </div>
                </div>

              </div>

              {/* BOTTOM: Social Icons */}
              <div className="flex gap-6 pt-10 text-stone-500">
                <a
                  href="https://linkedin.com/company/yourcompany"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="https://instagram.com/yourhandle"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

            </div>

            {/* Right: Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=Arekere%20Layout%2C%20DHI%20Office%20Spaces%2C%20Bengaluru%20South%2C%20Karnataka%20560076%2C%20India&output=embed"
                className="w-full h-full min-h-[420px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
