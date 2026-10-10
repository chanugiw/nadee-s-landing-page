import React, { useState, useEffect } from 'react';
import { BriefcaseBusiness, FolderKanban, Home, Info, Menu, MessageSquareText, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Real <a href> link for normal items; a plain (non-link) element for "coming soon" items.
const NavItem = ({ to, disabled, onNavigate, className, children }) =>
  disabled ? (
    <span aria-disabled="true" className={className}>{children}</span>
  ) : (
    <Link to={to} onClick={onNavigate} className={className}>{children}</Link>
  );

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', route: '/', icon: Home },
    { name: 'About', route: '/about', icon: Info },
    { name: 'Consultation', route: '/contact', icon: MessageSquareText },
    { name: 'Research', route: '#', icon: FolderKanban, comingSoon: true },
    { name: 'FAQ', route: '/faq', icon: BriefcaseBusiness },
  ];

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const id = location.state.scrollTo;
      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location]);

  const closeMenu = () => setIsOpen(false);

  // Logo is a real link to "/". When already on the home page, scroll to the top instead.
  const goHome = (event) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      event.preventDefault();
      const element = document.getElementById('home');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar-shell sticky left-0 right-0 top-4 z-50 mb-6 w-full">
      <nav className="mx-auto flex w-full items-center justify-between rounded-[22px] border border-[#2b2b30] bg-[#0d0d0f]/95 px-3 py-3 shadow-[0_18px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:px-4 md:px-6">
        <Link to="/" onClick={goHome} aria-label="Nadee Senanayake - Home" className="flex shrink-0 items-center gap-3 text-left text-white">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-[8px] border border-[#3a3a3f] bg-[#0e0e10] p-1 shadow-inner md:h-12 md:w-12">
            <img
              src="/assets/ns-monogram.svg"
              alt="Nadee Senanayake logo"
              className="h-full w-full object-contain object-center"
            />
          </div>
          <div className="leading-none">
            <div className="text-[0.5rem] font-black tracking-[0.26em] text-white md:text-[0.56rem]">NADEE</div>
            <div className="text-[0.5rem] font-black tracking-[0.26em] text-white md:text-[0.56rem]">SENANAYAKE</div>
          </div>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isDisabled = link.comingSoon;

            return (
              <NavItem
                key={link.name}
                to={link.route}
                disabled={isDisabled}
                onNavigate={closeMenu}
                className={`group flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  isDisabled
                    ? 'cursor-not-allowed text-[#c9b1ba] opacity-80 pointer-events-none'
                    : 'text-[#e5e7eb] hover:text-[#d9a6b4]'
                }`}
              >
                <Icon size={12} className="opacity-80" />
                <span className="flex flex-col items-center gap-1 leading-none">
                  <span>{link.name}</span>
                  {isDisabled && (
                    <span className="inline-flex items-center rounded-full border border-[#7A1C3E]/70 bg-[#7A1C3E]/10 px-1.5 py-[2px] text-[8px] font-bold uppercase tracking-[0.12em] text-[#d8a8b7]">
                      Coming Soon
                    </span>
                  )}
                </span>
              </NavItem>
            );
          })}
        </div>

        <Link
          to="/contact"
          onClick={closeMenu}
          className="hidden md:inline-flex items-center justify-center rounded-full bg-[#7A1F3D] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_20px_rgba(122,31,61,0.18)] transition-transform hover:-translate-y-0.5"
        >
          Book a Consultation
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className="z-50 inline-flex items-center justify-center text-white lg:hidden" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-2 flex max-w-[1400px] flex-col items-center space-y-4 rounded-[22px] border border-[#2c2c31] bg-[#0d0d0f]/95 px-4 py-6 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm lg:hidden">
          {navLinks.map((link) => {
            const isDisabled = link.comingSoon;

            return (
              <NavItem
                key={link.name}
                to={link.route}
                disabled={isDisabled}
                onNavigate={closeMenu}
                className={`flex w-full items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm uppercase tracking-[0.2em] ${
                  isDisabled
                    ? 'cursor-not-allowed border-[#3a2b33] bg-[#1b171a] text-[#d4bcc5] opacity-90 pointer-events-none'
                    : 'border-[#313136] bg-[#16171a] text-[#f3f4f6]'
                }`}
              >
                <span className="flex flex-col items-center gap-1">
                  <span>{link.name}</span>
                  {isDisabled && (
                    <span className="inline-flex items-center rounded-full border border-[#7A1C3E]/60 bg-[#7A1C3E]/10 px-2 py-[3px] text-[8px] font-bold uppercase tracking-[0.12em] text-[#f4cad8]">
                      Coming Soon
                    </span>
                  )}
                </span>
              </NavItem>
            );
          })}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-2 w-full rounded-full bg-[#7A1F3D] px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.18em] text-white"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
