
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import MainRoutes from './routes/MainRoutes';
import MouseFollower from './components/MouseFollower';
import Lenis from 'lenis';

const App = () => {
 useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll spee`d
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
      smoothWheel: true, // smooth mouse wheel
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup when component unmounts
    };
  }, []);


  return (
    <>
        <div className='relative'>
          <MouseFollower />
       
          <div className='sticky top-0 z-50'>
            <Nav />
          </div>
          <MainRoutes />
        </div>
      
    </>
  );
};

export default App;