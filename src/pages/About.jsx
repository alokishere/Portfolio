import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiExpress,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: SiReact, name: "React", color: "text-sky-500" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-600" },
  { icon: SiExpress, name: "Express", color: "text-gray-700" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-700" },
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-500" },
  { icon: SiGit, name: "Git", color: "text-red-500" },
  { icon: SiGithub, name: "GitHub", color: "text-gray-800" },
];

const About = () => {
  const sectionRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelectorAll(".fade-item"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="fade-item text-3xl md:text-5xl font-bold text-gray-900 mb-10">
          About
        </h2>

        {/* Intro */}
        <p className="fade-item text-lg text-gray-600 max-w-3xl leading-relaxed mb-6">
          I’m a full stack developer based in Lucknow, building scalable web
          applications using React, Node.js, and MongoDB. I focus on clean
          architecture, performance, and real-world usability.
        </p>

        {/* Experience */}
        <div className="fade-item mt-10">
          <h3 className="text-xl font-semibold text-black mb-4">
            Experience
          </h3>

          <div className="space-y-4 text-gray-600">

            <div>
              <p className="font-medium text-gray-800">
                Full Stack Developer — Sarathi India Pvt. Ltd.
              </p>
              <p className="text-sm">
                Handling end-to-end development including frontend, backend,
                APIs, and deployment.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800">
                Web Developer Intern — Sarathi India Pvt. Ltd. (3 months)
              </p>
              <p className="text-sm">
                Built and improved web interfaces and application features.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800">
                Junior Full Stack Developer — Life Infotech (1 month)
              </p>
              <p className="text-sm">
                Developed and deployed a full e-commerce application (lebrosstone.com)
                end-to-end.
              </p>
            </div>

          </div>
        </div>

        {/* Skills + Education merged */}
        <div className="fade-item mt-14 grid md:grid-cols-2 gap-10">

          {/* Tech Stack with logos */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-6">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-6">
              {skills.map(({ icon: Icon, name, color }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Icon
                    className={`w-10 h-10 transition-all duration-200 ${
                      hovered === index ? color : "text-gray-400"
                    }`}
                  />
                  <span className="text-xs mt-2 text-gray-600">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-6">
              Education
            </h3>

            <p className="text-gray-600">
              Diploma in Computer Science — Lucknow
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;