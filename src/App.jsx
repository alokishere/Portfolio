import React, { Suspense, lazy, useEffect } from "react";
import Nav from "./components/Nav";
import MouseFollower from "./components/MouseFollower";
import Lenis from "lenis";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));

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
      <div className="relative">
        <MouseFollower
          COLOR="#A855F7"
        />

        <div className="sticky top-0 z-50">
          <Nav />
        </div>
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
