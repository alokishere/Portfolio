import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHomeThenScroll = (id) => {
    navigate('/');
    setTimeout(() => {
      scrollToSection(id);
    }, 140);
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      scrollToSection('contact');
      return;
    }

    goHomeThenScroll('contact');
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate('/');
  };

  const handleWorkClick = () => navigate('/work');
  const handleAboutClick = () => navigate('/about');

  return (
    <header
      className={`fixed w-full z-50 transition-all ${
        scrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          onClick={handleLogoClick}
          className="text-xl font-semibold text-black cursor-pointer"
        >
          Alok.
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <button onClick={handleWorkClick} className="hover:text-black transition">
            Work
          </button>

          <button onClick={handleAboutClick} className="hover:text-black transition">
            About
          </button>

          <button onClick={handleContactClick} className="hover:text-black transition">
            Contact
          </button>

          <button
            onClick={handleContactClick}
            className="bg-black text-white px-4 py-2 rounded-lg ml-2"
          >
            Hire Me
          </button>
        </div>

        <MobileMenu
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onContactClick={handleContactClick}
        />
      </nav>
    </header>
  );
};

const MobileMenu = ({ onWorkClick, onAboutClick, onContactClick }) => {
  const [open, setOpen] = useState(false);

  const handleWithClose = (fn) => {
    fn();
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)}>
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {open ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-white py-4 flex flex-col items-center gap-4">
          <button onClick={() => handleWithClose(onWorkClick)}>Work</button>

          <button onClick={() => handleWithClose(onAboutClick)}>About</button>

          <button onClick={() => handleWithClose(onContactClick)}>Contact</button>

          <button
            onClick={() => handleWithClose(onContactClick)}
            className="bg-black text-white px-5 py-2 rounded-lg"
          >
            Hire Me
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
