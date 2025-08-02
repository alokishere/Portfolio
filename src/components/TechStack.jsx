import React, { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiGreensock,
  SiSass,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiFigma,
  SiCanva,
} from "react-icons/si";

const skills = [
  { icon: SiHtml5, label: "HTML", color: "text-orange-600" },
  { icon: SiCss3, label: "CSS", color: "text-blue-600" },
  { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
  { icon: SiReact, label: "React", color: "text-sky-500" },
  { icon: SiTailwindcss, label: "Tailwind", color: "text-cyan-500" },
  { icon: SiGit, label: "Git", color: "text-red-500" },
  { icon: SiGithub, label: "GitHub", color: "text-gray-800" },
  { icon: SiGreensock, label: "GSAP", color: "text-green-600" },
  { icon: SiSass, label: "Sass", color: "text-pink-500" },
  { icon: SiMongodb, label: "MongoDB", color: "text-green-700" },
  { icon: SiExpress, label: "Express", color: "text-gray-700" },
  { icon: SiNodedotjs, label: "Node.js", color: "text-green-600" },
  { icon: SiCanva, label: "Canva", color: "text-blue-400" },
  { icon: SiFigma, label: "Figma", color: "text-pink-600" },
];

const getScale = (hovered, idx) => {
  if (hovered === null) return 1;
  const distance = Math.abs(hovered - idx);
  if (distance === 0) return 1.5; // hovered
  if (distance === 1) return 1.2; // neighbors
  if (distance === 2) return 1.05; // next neighbors
  return 1;
};

const TechStack = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="mt-10 py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-900 to-sky-100 mb-14 drop-shadow-lg tracking-tight">
        🛠️ Technologies That Power My Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map(({ icon: Icon, label, color }, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{ cursor: "pointer" }}
          >
            <Icon
              className={`w-12 h-12 mb-2 transition-transform duration-200 ${color}`}
              style={{
                transform: `scale(${getScale(hovered, index)})`,
                zIndex: hovered === index ? 2 : 1,
              }}
            />
            <span className="text-sm font-medium text-gray-700">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
