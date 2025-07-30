import React from 'react';
import About from './About';
import WorkSample from './Wroksample';
import Contact from './Contact';

const Home = ({ homeRef, aboutRef, workRef, contactRef }) => {
  return (
    
     <>
     <section ref={homeRef} id="home" className="min-h-screen">
     <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white">

<div className="flex items-center gap-4 mb-8 p-2 rounded-xl bg-zinc-100">
  <span className="bg-white px-6 py-2 rounded-xl shadow text-lg font-semibold flex items-center gap-2">
    Code <span role="img" aria-label="code">💻</span>
  </span>
  <span className="text-purple-500 text-lg font-semibold flex items-center gap-2">
    <span role="img" aria-label="paint">🎨</span> Design
  </span>
</div>

<div className="flex flex-col items-center mb-4">
  <h1 className="text-5xl text-[#373737] md:text-7xl font-bold text-center">
    I love to create{' '}
    <span className="text-pink-400 italic text-6xl md:text-8xl align-middle" style={{ fontFamily: 'cursive' }}>
      "flawless"
    </span>
    <br />
    products for Brands.
  </h1>
</div>


<p className="text-center text-[#373737] text-lg mt-4 mb-8 max-w-2xl">
  I am a Developer/Designer from Lucknow, India. I love to create great website user experiences & website designs for brands, other than that
</p>

{/* Buttons */}
<div className="flex gap-6 mt-4">
  <button className="bg-sky-200 text-sky-800 px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 shadow hover:bg-sky-300 transition">
    Say Hi <span role="img" aria-label="wave">👋</span>
  </button>
  <button className="bg-pink-400 text-white px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 shadow hover:bg-pink-500 transition">
    Download Offline Resume <span role="img" aria-label="resume">📄</span>
  </button>
</div>
</div>
     </section>
     <section ref={aboutRef} id="about" className="min-h-screen"><About /></section>
     <section ref={workRef} id="worksample" className="min-h-screen"><WorkSample /></section>
     <section ref={contactRef} id="contact" className="min-h-screen"><Contact /></section>
   </>
  );
};

export default Home;
