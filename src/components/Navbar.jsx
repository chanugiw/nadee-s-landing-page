import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Consultation', route: '/contact' },
    { name: 'Research', route: '/research', comingSoon: true },
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
    <div className="sticky top-4 left-0 right-0 z-50 w-full px-4 md:px-8 lg:px-16">
      <nav className="bg-[#0d0d0d] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] px-5 md:px-6 py-3.5 flex items-center justify-between border border-[#1f1f1f]">
        <button onClick={goHome} className="flex items-center gap-2 text-white text-left">
          <span className="text-[1.1rem] md:text-[1.35rem] font-black tracking-[0.12em] uppercase">Nadee</span>
        </button>

        <div className="hidden lg:flex items-center justify-center flex-1 gap-8">
          {navLinks.map((link) => (
            <button
              key={link.route}
              onClick={() => handleNav(link.route)}
              className="group text-[#d6d6d6] hover:text-white text-[10px] uppercase tracking-[0.16em] font-semibold transition-all duration-300 relative"
            >
              {link.name}
              {link.comingSoon && (
                <span className="ml-2 inline-block text-[8px] uppercase tracking-[0.12em] text-[#c9c9c9] opacity-70">Coming Soon</span>
              )}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#b86d96] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button
          onClick={() => handleNav('/contact')}
          className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#3f67ff] text-[10px] uppercase tracking-[0.16em] font-bold text-white shadow-lg shadow-[#3f67ff]/20 transition-transform hover:scale-[1.02]"
        >
          Book Now
        </button>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white z-50" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden mt-2 bg-[#0d0d0d] rounded-2xl border border-[#1f1f1f] flex flex-col items-center py-6 space-y-4 shadow-2xl transition-all duration-300">
          {navLinks.map((link) => (
            <button
              key={link.route}
              onClick={() => handleNav(link.route)}
              className="text-[#d6d6d6] hover:text-white text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
