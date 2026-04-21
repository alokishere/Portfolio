import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiMongodb, SiJavascript,
  SiTailwindcss, SiGit, SiGithub, SiExpress,
} from "react-icons/si";

const skills = [
  { icon: SiReact,       name: "React",      color: "text-sky-500" },
  { icon: SiNodedotjs,   name: "Node.js",    color: "text-green-600" },
  { icon: SiExpress,     name: "Express",    color: "text-gray-700" },
  { icon: SiMongodb,     name: "MongoDB",    color: "text-green-700" },
  { icon: SiJavascript,  name: "JavaScript", color: "text-yellow-400" },
  { icon: SiTailwindcss, name: "Tailwind",   color: "text-cyan-500" },
  { icon: SiGit,         name: "Git",        color: "text-red-500" },
  { icon: SiGithub,      name: "GitHub",     color: "text-gray-800" },
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "Sarathi India Pvt. Ltd.",
    duration: "Current",
    desc: "End-to-end development — frontend, backend, APIs, and deployment.",
  },
  {
    role: "Web Developer Intern",
    company: "Sarathi India Pvt. Ltd.",
    duration: "3 months",
    desc: "Built and improved web interfaces and application features.",
  },
  {
    role: "Junior Full Stack Developer",
    company: "Life Infotech",
    duration: "1 month",
    desc: "Developed and deployed a full e-commerce app — lebrosstone.com.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const About = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">

        {/* Section label + heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3"
          >
            Who I am
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="text-3xl md:text-5xl font-light tracking-tight text-gray-900"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            About
          </motion.h2>
        </motion.div>

        {/* Intro + Experience grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20"
        >
          {/* Intro */}
          <motion.div variants={fadeUp} custom={0}>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
              Full stack developer based in Lucknow, building scalable web
              applications using React, Node.js, and MongoDB. I focus on clean
              architecture, performance, and real-world usability.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Outside of client work, I run{" "}
              <span className="font-mono text-gray-600">Alok Labs</span> — an
              independent studio where I build SaaS products and tools for
              Indian businesses.
            </p>
          </motion.div>

          {/* Experience timeline */}
          <motion.div variants={fadeUp} custom={0.1}>
            <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
              Experience
            </p>
            <div className="flex flex-col gap-6">
              {experience.map((exp, i) => (
                <div key={i} className="flex gap-4">
                  {/* Timeline dot + line */}
                  <div className="flex flex-col items-center pt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                    {i !== experience.length - 1 && (
                      <div className="w-px flex-1 bg-gray-100 mt-1" />
                    )}
                  </div>
                  <div className="pb-2">
                    <p className="text-sm font-medium text-gray-900 tracking-tight">
                      {exp.role}
                    </p>
                    <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-1">
                      {exp.company} · {exp.duration}
                    </p>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-16" />

        {/* Tech stack + Education grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Skills */}
          <motion.div variants={fadeUp} custom={0}>
            <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-5">
              {skills.map(({ icon: Icon, name, color }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1.5 cursor-default"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Icon
                    className={`w-7 h-7 transition-all duration-200 ${
                      hovered === index ? color : "text-gray-300"
                    }`}
                  />
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education + extras */}
          <motion.div variants={fadeUp} custom={0.1} className="flex flex-col gap-8">

            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">
                Education
              </p>
              <p className="text-sm font-medium text-gray-900 tracking-tight">
                Diploma in Computer Science
              </p>
              <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mt-0.5">
                Lucknow · 2023
              </p>
            </div>

            <div className="w-full h-px bg-gray-100" />

            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">
                Currently
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Building SaaS products at Alok Labs",
                  "Open to freelance projects",
                  "Exploring micro-SaaS for Indian market",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* More link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-100"
        >
          <button
            type="button"
            onClick={() => navigate("/about")}
            className="text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors duration-150"
          >
            More about me →
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default React.memo(About);
