import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Work Samples', to: '/worksample' },
  { name: 'Contact', to: '/contact' },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  // GSAP refs
  const headerRef = useRef(null);
  const navLinksRef = useRef([]);
  const logoRef = useRef(null);

  // Animate nav bar in on mount
  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
      );
    }
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: 'power3.out' }
      );
    }
    if (navLinksRef.current && navLinksRef.current.length) {
      gsap.fromTo(
        navLinksRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.35,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  // Animate mobile menu open/close
  const mobileMenuRef = useRef(null);
  useEffect(() => {
    if (menuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out' }
      );
    }
  }, [menuOpen]);

  // Scroll logic (unchanged)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY.current) {
        setShowNav(true); // Hide on scroll up
      } else {
        setShowNav(false); // Show on scroll down
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`transition-all duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'} w-full z-50 bg-white/1 backdrop-blur-md backdrop-saturate-110 backdrop-brightness-100 fixed top-0`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 md:py-5 max-w-7xl mx-auto relative">
        {/* Logo/Brand */}
        <Link
          to="/"
          ref={logoRef}
          className="flex items-center text-xl md:text-2xl font-bold text-gray-800"
        >
          <span className="text-pink-500 mr-1">Alok Vishwakarma</span>
          <span className="font-light text-gray-500 ml-1">Portfolio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-12">
          {navLinks.map((link, idx) => (
            <Link
              to={link.to}
              key={link.name}
              ref={el => (navLinksRef.current[idx] = el)}
              className="list-none inline px-5 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-pink-100 bg-zinc-200 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-zinc-100 transition"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-7 h-7 text-pink-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-full left-0 w-full bg-white shadow-lg z-50 md:hidden animate-fade-in"
          >
            <div className="flex flex-col items-center py-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="w-11/12 text-center px-5 py-3 rounded-full text-base font-medium text-gray-700 hover:bg-pink-100 bg-zinc-200 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;