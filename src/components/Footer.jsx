import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#121212] mx-2 md:mx-4 max-w-[96%] rounded-3xl mt-4 mb-6 border border-[#222] text-[#A0A0A0] overflow-hidden">
      <div className="px-8 md:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="flex flex-col gap-3">
          <span className="text-white text-xl font-bold tracking-tight">
            Nadee Senanayake
          </span>
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-[#7A1F3D]"></div>
            <span className="text-[9px] text-[#7A1F3D] uppercase tracking-[0.2em] font-medium">
              Digital Business Strategy
            </span>
          </div>
          <p className="text-sm text-[#A0A0A0] mt-2 leading-relaxed">
            Helping brands grow with data-driven digital strategy.
          </p>
        </div>

        {/* Company links */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-3">Company</h4>
          <div className="h-[2px] w-8 bg-[#7A1F3D] mb-4"></div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#7A1F3D] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#7A1F3D] transition-colors">About Us</Link></li>
            <li><Link to="/experience" className="hover:text-[#7A1F3D] transition-colors">Experience</Link></li>
          </ul>
        </div>

        {/* Explore links */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-3">Explore</h4>
          <div className="h-[2px] w-8 bg-[#7A1F3D] mb-4"></div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/experience" className="hover:text-[#7A1F3D] transition-colors">Experience</Link></li>
            <li><Link to="/projects" className="hover:text-[#7A1F3D] transition-colors">Projects</Link></li>
            <li><Link to="/research" className="hover:text-[#7A1F3D] transition-colors">Research</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-3">Connect</h4>
          <div className="h-[2px] w-8 bg-[#7A1F3D] mb-4"></div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-[#7A1F3D]" />
              <a href="mailto:info@nadeesenanayake.com" className="hover:text-[#7A1F3D] transition-colors">
                info@nadeesenanayake.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-[#7A1F3D]" />
              <a href="tel:+94707803698" className="hover:text-[#7A1F3D] transition-colors">
                0707803698
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-[#7A1F3D]" />
              <span>Colombo, Sri Lanka</span>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://www.linkedin.com/in/nadee-senanayake/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ color: '#0A66C2' }}
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ color: '#E1306C' }}
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#222] px-8 md:px-12 py-5 text-center text-xs text-[#A0A0A0] tracking-widest uppercase">
        © {new Date().getFullYear()} Nadee Senanayake. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
