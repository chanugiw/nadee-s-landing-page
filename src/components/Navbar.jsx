import React, { useState, useEffect } from 'react';
import { BriefcaseBusiness, FolderKanban, Home, Info, Menu, MessageSquareText, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', route: '/', icon: Home },
    { name: 'About', route: '/about', icon: Info },
    { name: 'Consultation', route: '/contact', icon: MessageSquareText },
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

  const handleNav = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const goHome = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      const element = document.getElementById('home');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky left-0 right-0 top-4 z-50 mb-6 w-full px-2 sm:px-4 md:px-6">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between rounded-[22px] border border-[#2b2b30] bg-[#0d0d0f]/95 px-3 py-3 shadow-[0_18px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:px-4 md:px-6">
        <button onClick={goHome} className="flex shrink-0 items-center gap-3 text-left text-white">
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
        </button>

        <div className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.name}
                onClick={() => handleNav(link.route)}
                className="group flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e5e7eb] transition-colors hover:text-[#d9a6b4]"
              >
                <Icon size={12} className="opacity-80" />
                <span>{link.name}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => handleNav('/contact')}
          className="hidden md:inline-flex items-center justify-center rounded-full bg-[#7A1F3D] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_20px_rgba(122,31,61,0.18)] transition-transform hover:-translate-y-0.5"
        >
          Book a Consultation
        </button>

        <button onClick={() => setIsOpen(!isOpen)} className="z-50 inline-flex items-center justify-center text-white lg:hidden" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-2 flex max-w-[1400px] flex-col items-center space-y-4 rounded-[22px] border border-[#2c2c31] bg-[#0d0d0f]/95 px-4 py-6 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.route)}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-[#313136] bg-[#16171a] px-4 py-3 text-sm uppercase tracking-[0.2em] text-[#f3f4f6]"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNav('/contact')}
            className="mt-2 w-full rounded-full bg-[#7A1F3D] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white"
          >
            Book a Consultation
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
