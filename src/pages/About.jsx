
import React, { useEffect, useRef } from "react";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headingsRef = useRef([]);
  const badgesRef = useRef([]);
  const parasRef = useRef([]);

  // Scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section scale on scroll
      gsap.to(sectionRef.current, {
        scale: 1.01,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      // Headings animation
      gsap.from(headingsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Badge pop-in
      gsap.from(badgesRef.current, {
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Paragraphs fade up
      gsap.from(parasRef.current, {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
    className="bg-white"
     >
      <section
        ref={sectionRef}
        className="text-center  pt-24 px-4 max-w-3xl mx-auto relative"
      >
        {/* 👋 Bounce Emoji with Framer Motion */}
        <motion.div
          className="inline-block mb-6"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
        >
          <span className="text-5xl md:text-6xl">👋</span>
        </motion.div>

        {/* Animated Headline */}
        <h2
          ref={(el) => (headingsRef.current[0] = el)}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 mb-4 drop-shadow-lg"
        >
          Hey, I'm Alok.
        </h2>

        <p
          ref={(el) => (headingsRef.current[1] = el)}
          className="text-lg md:text-2xl text-gray-700 font-medium mb-8"
        >
          <span className="bg-yellow-100 px-2 py-1 rounded-lg">Web Wizard</span>{" "}
          from <span className="text-pink-500 font-bold">Lucknow</span> — I turn
          ideas into{" "}
          <span className="italic text-purple-500">pixel-perfect</span> digital
          experiences.
        </p>

        {/* Animated Badges */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          {[
            ["💻", "Frontend Enthusiast", "sky"],
            ["🚀", "UI/UX Explorer", "pink"],
            ["🔥", "Animation Lover", "purple"],
          ].map(([emoji, label, color], i) => (
            <div
              key={i}
              ref={(el) => (badgesRef.current[i] = el)}
              className={`bg-${color}-100 text-${color}-700 px-4 py-2 rounded-full font-semibold shadow inline-flex items-center gap-2`}
            >
              <span role="img" aria-label={label}>
                {emoji}
              </span>{" "}
              {label}
            </div>
          ))}
        </div>

        {/* Paragraphs with staggered fade up */}
        <p
          ref={(el) => (parasRef.current[0] = el)}
          className="text-md md:text-lg text-gray-600 mb-4"
        >
          I craft{" "}
          <span className="font-semibold text-sky-500">modern</span>,{" "}
          <span className="font-semibold text-pink-500">responsive</span> &{" "}
          <span className="font-semibold text-purple-500">interactive</span>{" "}
          websites with <span className="font-bold">React.js</span>,{" "}
          <span className="font-bold">Tailwind CSS</span>, and a sprinkle of{" "}
          <span className="font-bold">GSAP</span> magic.
        </p>
        <p
          ref={(el) => (parasRef.current[1] = el)}
          className="text-md md:text-lg text-gray-600 mb-4"
        >
          Always curious, I'm leveling up my{" "}
          <span className="font-semibold text-green-600">backend</span> skills
          to become a <span className="font-bold">full-stack</span> creator. I
          love building things that make people say{" "}
          <span className="italic text-pink-400">"wow!"</span>
        </p>
        <p
          ref={(el) => (parasRef.current[2] = el)}
          className="text-md md:text-lg text-gray-600 mb-0"
        >
          Let’s make the web a more{" "}
          <span className="underline decoration-wavy decoration-pink-400">
            beautiful
          </span>{" "}
          &{" "}
          <span className="underline decoration-wavy decoration-sky-400">
            fun
          </span>{" "}
          place, one project at a time.
        </p>
      </section>

      <TechStack />
      <Education />
    </div>
  );
};

export default About;
