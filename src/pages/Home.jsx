import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import About from './About';
import WorkSample from './Wroksample';
import Contact from './Contact';
import Cirtificates from '../components/Cirtificates';



gsap.registerPlugin(ScrollTrigger);

const Home = ({ homeRef, aboutRef, workRef, contactRef }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

 
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.fromTo('.tagline-part-1', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 })
      .fromTo('.hero-title-word', { y: 80, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 1 }, "-=0.5")
      .fromTo('.hero-description', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.7")
      .fromTo('.hero-buttons button', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.2, duration: 0.6 }, "-=0.5");


  
    ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: 'bottom top',
      pin: false,
      pinSpacing: false,
      scrub: 1,

      onLeave: () => gsap.to(el, { opacity: 0, y: -100, duration: 0.5, ease: 'power2.in' }),
      onEnterBack: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
    });

   
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  const sayHi = () => {
    const phoneNumber = '919580908191';
    const message = 'Hello, I am interested in your services.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const resume = () => {
    window.open("https://docs.google.com/document/d/1MKt0MI-H64HYG0mlX1WpELxqz3AhZ6BpmxpSZFJhsuo/edit?usp=sharing", "_blank");
  };

  return (
    <>
      <section ref={homeRef} id="home" className="relative">
        <div ref={heroRef} className="h-screen w-full flex flex-col items-center justify-center bg-white text-gray-800 p-4 overflow-hidden">

          <div className="flex items-center gap-4 mb-8 p-2 rounded-full bg-white/60 backdrop-blur-sm shadow-lg">
            <span className="tagline-part-1 bg-white px-6 py-2 rounded-full shadow text-lg font-semibold flex items-center gap-2 text-gray-700">
              Code <span role="img" aria-label="code">💻</span>
            </span>
            <span className="tagline-part-1 text-purple-600 text-lg font-semibold flex items-center gap-2 pr-4">
              <span role="img" aria-label="paint">🎨</span> Design
            </span>
          </div>

          <div className="flex flex-col items-center mb-6 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#373737] tracking-tight">
                <span className="hero-title-word inline-block">I&nbsp;</span>
                <span className="hero-title-word inline-block">love&nbsp;</span>
                <span className="hero-title-word inline-block">to&nbsp;</span>
                <span className="hero-title-word inline-block">create&nbsp;</span>
                <span className="hero-title-word inline-block text-pink-500 italic text-6xl md:text-8xl align-middle" style={{ fontFamily: 'cursive' }}>
                    "flawless"
                </span>
                <br />
                <span className="hero-title-word inline-block">products&nbsp;</span>
                <span className="hero-title-word inline-block">for&nbsp;</span>
                <span className="hero-title-word inline-block">Brands.</span>
            </h1>
          </div>

          <p className="hero-description text-center text-gray-600 text-lg mt-4 mb-10 max-w-2xl">
            I am a Developer/Designer from Lucknow, India. I love to create great website user experiences & website designs for brands.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-6 mt-4">
            <motion.button
              onClick={sayHi}
              className="bg-sky-500 text-white cursor-pointer px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-3 shadow-lg hover:bg-sky-600"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              Say Hi <span role="img" aria-label="wave">👋</span>
            </motion.button>
            <motion.button
              onClick={resume}
              className="bg-pink-500 cursor-pointer text-white px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-3 shadow-lg hover:bg-pink-600"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              View Resume<span role="img" aria-label="resume">📄</span>
            </motion.button>
          </div>
        </div>
      </section>

      <section ref={aboutRef} id="about" className="min-h-screen relative z-10 bg-white"><About /></section>
      <section className="min-h-screen relative z-10 bg-white"><Cirtificates  /></section>
      <section ref={workRef} id="worksample" className="min-h-screen relative z-10 bg-white"><WorkSample /></section>
      <section ref={contactRef} id="contact" className="min-h-screen relative z-10 bg-white"><Contact /></section>
    </>
  );
};

export default Home;
