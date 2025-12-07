import React, { useEffect, useRef } from "react";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelectorAll(".fade-item"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-white">
      <section
        ref={sectionRef}
        className="text-center pt-24 px-4 max-w-3xl mx-auto"
      >
        {/* Simple CSS bounce – no JS required */}
        <div className="mb-6 animate-bounce-slow">
          <span className="text-5xl md:text-6xl">👋</span>
        </div>

        <h2 className="fade-item text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 mb-4">
          Hey, I'm Alok.
        </h2>

        <p className="fade-item text-lg md:text-2xl text-gray-700 font-medium mb-8">
          <span className="bg-yellow-100 px-2 py-1 rounded-lg">Web Wizard</span>{" "}
          from <span className="text-pink-500 font-bold">Lucknow</span> — I turn
          ideas into{" "}
          <span className="italic text-purple-500">pixel-perfect</span> digital
          experiences.
        </p>

        {/* Badges */}
        <div className="fade-item flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          {[
            ["💻", "Frontend Enthusiast"],
            ["🚀", "UI/UX Explorer"],
            ["🔥", "Animation Lover"],
          ].map(([emoji, label], i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold shadow flex items-center gap-2"
            >
              <span>{emoji}</span> {label}
            </div>
          ))}
        </div>

        {/* Paragraphs */}
        <p className="fade-item text-md md:text-lg text-gray-600 mb-4">
          I craft <span className="font-semibold text-sky-500">modern</span>,{" "}
          <span className="font-semibold text-pink-500">responsive</span> &
          <span className="font-semibold text-purple-500"> interactive</span>{" "}
          websites with <span className="font-bold">React.js</span>,{" "}
          <span className="font-bold">Tailwind CSS</span> and{" "}
          <span className="font-bold">GSAP</span>.
        </p>

        <p className="fade-item text-md md:text-lg text-gray-600 mb-4">
          I'm leveling up my{" "}
          <span className="font-semibold text-green-600">backend</span> skills to
          become a <span className="font-bold">full-stack</span> creator.
        </p>

        <p className="fade-item text-md md:text-lg text-gray-600">
          Let’s make the web a{" "}
          <span className="underline decoration-wavy decoration-pink-400">
            beautiful
          </span>{" "}
          &{" "}
          <span className="underline decoration-wavy decoration-sky-400">
            fun
          </span>{" "}
          place.
        </p>
      </section>

      <TechStack />
      <Education />
    </div>
  );
};

export default About;
