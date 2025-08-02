import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    title: "Job Ready AI Powered Cohort",
    institution: "Sheryians Coding School",
    year: "Currently Enrolled",
    description:
      "Hands-on training in modern web development and AI integration. Building real-world projects to become industry-ready.",
    icon: "🤖",
    highlight: true,
  },
  {
    title: "Diploma in Computer Science & Engineering",
    institution: "Ambekeshwar Group of Institutions",
    year: "2023 – 2026",
    description:
      "Core computer science, web development, and software engineering. Consistently among top performers.",
    icon: "💻",
    highlight: false,
  },
  {
    title: "Advanced Diploma in Computer Applications (ADCA)",
    institution: "Private Institute",
    year: "2022 – 2023",
    description:
      "Mastered office tools, programming basics, and foundational computer knowledge.",
    icon: "🖥️",
    highlight: false,
  },
  {
    title: "Intermediate (12th), Science",
    institution: "UP Board",
    year: "2023",
    description:
      "Excelled in science stream with a focus on logical thinking and problem-solving.",
    icon: "🔬",
    highlight: false,
  },
  {
    title: "High School (10th)",
    institution: "UP Board",
    year: "2021",
    description:
      "Strong academic performance and active participation in tech events.",
    icon: "🏫",
    highlight: false,
  },
];

const gradientBorder =
  "bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 p-[2px] rounded-xl";

const Education = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const dotRefs = useRef([]);

  useEffect(() => {
    // Animate section heading
    gsap.fromTo(
      sectionRef.current.querySelector(".edu-heading"),
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate timeline cards
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate timeline dots with a pop effect
    dotRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.18,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-8 max-w-4xl mx-auto relative overflow-x-clip"
    >
      <h2 className="edu-heading text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 mb-14 drop-shadow-lg tracking-tight opacity-0">
        <span role="img" aria-label="graduation cap" className="mr-2">
          🎓
        </span>
        My Education Journey
      </h2>
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-sky-400 rounded-full opacity-30 z-0 hidden md:block"></div>
        <div className="space-y-10 relative z-10">
          {educationData.map((item, index) => (
            <div
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              className={`flex items-start gap-5 md:gap-8 group transition-transform duration-300 relative
                ${
                  item.highlight
                    ? "scale-105 shadow-2xl border-2 border-pink-400/60"
                    : ""
                }
              `}
              style={{ zIndex: educationData.length - index }}
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <div
                  ref={el => (dotRefs.current[index] = el)}
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-3xl font-bold shadow-xl border-4 transition-all duration-300
                    ${
                      item.highlight
                        ? "border-pink-400 bg-white animate-bounce"
                        : "border-sky-300 bg-white"
                    }
                    group-hover:scale-110 group-hover:shadow-pink-200 group-hover:ring-4 group-hover:ring-pink-200/40
                  `}
                  style={{
                    zIndex: 2,
                    boxShadow:
                      item.highlight
                        ? "0 0 24px 4px #f472b6, 0 2px 8px 0 #a78bfa33"
                        : "0 2px 8px 0 #38bdf833",
                    transition: "box-shadow 0.3s, transform 0.3s",
                  }}
                >
                  {item.icon}
                </div>
                {index !== educationData.length - 1 && (
                  <div className="w-1 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-sky-400 opacity-40 mt-1 hidden md:block"></div>
                )}
              </div>
              {/* Card */}
              <div
                className={`flex-1 ${item.highlight ? gradientBorder : ""}`}
              >
                <div
                  className={`bg-white rounded-xl shadow-md p-6 transition-all duration-300 relative overflow-hidden
                    ${
                      item.highlight
                        ? "bg-gradient-to-r from-pink-50 via-purple-50 to-sky-50"
                        : ""
                    }
                    group-hover:shadow-2xl group-hover:scale-[1.03] hover:-translate-y-2 hover:ring-4 hover:ring-sky-200/40
                  `}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {/* Animated floating gradient blob */}
                  <div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-tr from-pink-400 via-blue-300 to-purple-300 opacity-20 blur-2xl pointer-events-none animate-pulse"
                    aria-hidden="true"
                  ></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1 flex items-center gap-2 group-hover:text-pink-600 transition-colors duration-200">
                      {item.title}
                      {item.highlight && (
                        <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-pink-100 text-pink-600 font-semibold animate-pulse shadow">
                          Current
                        </span>
                      )}
                    </h3>
                    <span className="text-sm text-sky-600 font-semibold bg-sky-100 px-3 py-1 rounded-full shadow group-hover:bg-sky-200 transition-colors duration-200">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-md text-gray-700 mt-2 font-medium group-hover:text-purple-700 transition-colors duration-200">
                    {item.institution}
                  </p>
                  <p className="mt-2 text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                    {item.description}
                  </p>
                  {/* Sparkle effect on hover */}
                  <span className="absolute top-3 right-3 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow pointer-events-none">
                    ✨
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Floating animated gradient background for extra attractiveness */}
      <div className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-pink-200 via-blue-100 to-purple-100 opacity-30 blur-3xl animate-pulse"></div>
    </section>
  );
};

export default Education;
