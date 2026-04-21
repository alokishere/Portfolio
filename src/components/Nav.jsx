import React, { useState, useEffect } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-xl font-semibold text-black cursor-pointer"
        >
          Alok.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <button onClick={() => scrollToSection("worksample")} className="hover:text-black transition">
            Work
          </button>

          <button onClick={() => scrollToSection("about")} className="hover:text-black transition">
            About
          </button>

          <button onClick={() => scrollToSection("contact")} className="hover:text-black transition">
            Contact
          </button>

          {/* Hire Me CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-black text-white px-4 py-2 rounded-lg ml-2"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu scrollToSection={scrollToSection} />
      </nav>
    </header>
  );
};

const MobileMenu = ({ scrollToSection }) => {
  const [open, setOpen] = useState(false);

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
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center gap-4">
          <button onClick={() => {scrollToSection("worksample"); setOpen(false);}}>
            Work
          </button>

          <button onClick={() => {scrollToSection("about"); setOpen(false);}}>
            About
          </button>

          <button onClick={() => {scrollToSection("contact"); setOpen(false);}}>
            Contact
          </button>

          <button
            onClick={() => {scrollToSection("contact"); setOpen(false);}}
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