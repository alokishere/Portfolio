import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkSample = () => {
  const projects = [{
      title: "Moody Player - Mood Based Music Recommendation",
      description:
        "A full-stack music player that detects the user's real-time mood using the camera and recommends songs accordingly. Built with MERN stack and Tailwind CSS for styling.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Camera API",
      ],
      image: "image/MoodyPlayer.png",

      liveLink: "https://moody-player.vercel.app",
      githubLink: "https://github.com/alokishere/Moody-Player",
    }];

  const videoRefs = useRef([]);
  const cardRefs = useRef([]);
  const headingRef = useRef(null);

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  useEffect(() => {
    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );
    }

    // Animate each project card
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        {
          y: 80,
          opacity: 0,
          scale: 0.97,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <h2
        ref={headingRef}
        className="text-4xl mt-10 rounded-2xl pt-5 font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-900 to-sky-100  drop-shadow-lg tracking-tight"
      >
        Work showcase
      </h2>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`flex flex-col lg:flex-row gap-8 items-center ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image/Video Container (Left) */}
            <div
              className="w-full lg:w-1/2 h-96 rounded-2xl overflow-hidden shadow-2xl relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Details Container (Right) */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold text-zinc-800">
                {project.title}
              </h3>

              <p className="text-lg text-gray-600">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-pink-400 hover:bg-pink-600 text-white rounded-lg font-medium transition-colors"
                >
                  View Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-gray-300 dark:border-pink-200 hover:bg-gray-100 dark:hover:bg-pink-200 rounded-lg font-medium transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSample;
