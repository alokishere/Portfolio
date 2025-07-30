import React from "react";
import TechStack from "../components/TechStack";
import Education from "../components/Education";

const About = () => {
  return (
    <>
    <section className="text-center pt-24 px-4 max-w-3xl mx-auto relative">
      <div className="inline-block mb-6 animate-bounce">
        <span className="text-5xl md:text-6xl">👋</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 mb-4 drop-shadow-lg">
        Hey, I'm Alok.
      </h2>
      <p className="text-lg md:text-2xl text-gray-700 font-medium mb-8">
        <span className="bg-yellow-100 px-2 py-1 rounded-lg">Web Wizard</span> from <span className="text-pink-500 font-bold">Lucknow</span> — I turn ideas into <span className="italic text-purple-500">pixel-perfect</span> digital experiences.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
        <span className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full font-semibold shadow inline-flex items-center gap-2">
          <span role="img" aria-label="code">💻</span> Frontend Enthusiast
        </span>
        <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-semibold shadow inline-flex items-center gap-2">
          <span role="img" aria-label="rocket">🚀</span> UI/UX Explorer
        </span>
        <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold shadow inline-flex items-center gap-2">
          <span role="img" aria-label="fire">🔥</span> Animation Lover
        </span>
      </div>
      <p className="text-md md:text-lg text-gray-600 mb-4">
        I craft <span className="font-semibold text-sky-500">modern</span>, <span className="font-semibold text-pink-500">responsive</span> & <span className="font-semibold text-purple-500">interactive</span> websites with <span className="font-bold">React.js</span>, <span className="font-bold">Tailwind CSS</span>, and a sprinkle of <span className="font-bold">GSAP</span> magic.
      </p>
      <p className="text-md md:text-lg text-gray-600 mb-4">
        Always curious, I'm leveling up my <span className="font-semibold text-green-600">backend</span> skills to become a <span className="font-bold">full-stack</span> creator. I love building things that make people say <span className="italic text-pink-400">"wow!"</span>
      </p>
      <p className="text-md md:text-lg text-gray-600 mb-0">
        Let’s make the web a more <span className="underline decoration-wavy decoration-pink-400">beautiful</span> & <span className="underline decoration-wavy decoration-sky-400">fun</span> place, one project at a time.
      </p>
    </section>
    <TechStack/>
<Education/>
    </>
  );
};

export default About;
