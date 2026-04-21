import React, { useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    tag: "Full Stack · MERN",
    title: "Moody Player",
    subtitle: "Mood-based music recommendation",
    description:
      "Detects user's real-time mood via camera and recommends songs accordingly. Built with MERN stack — React frontend, Node/Express backend, MongoDB for data persistence.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Camera API", "Tailwind CSS"],
    image: "image/MoodyPlayer.png",
    liveLink: "https://moody-player.vercel.app",
    githubLink: "https://github.com/alokishere/Moody-Player",
    year: "2024",
  },
  {
    tag: "Full Stack · MERN",
    title: "Moody Player",
    subtitle: "Mood-based music recommendation",
    description:
      "Detects user's real-time mood via camera and recommends songs accordingly. Built with MERN stack — React frontend, Node/Express backend, MongoDB for data persistence.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Camera API", "Tailwind CSS"],
    image: "image/MoodyPlayer.png",
    liveLink: "https://moody-player.vercel.app",
    githubLink: "https://github.com/alokishere/Moody-Player",
    year: "2024",
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const WorkSample = () => {
  return (
    <div className="bg-white px-8 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-3"
          >
            Selected Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="text-4xl md:text-5xl font-light tracking-tight text-gray-900"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Projects
          </motion.h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
            >
              {/* Image */}
              <motion.div
                variants={fadeUp}
                custom={0}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-50"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                {/* Year badge */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-500 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {project.year}
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex flex-col gap-5">
                <motion.div variants={fadeUp} custom={0.1}>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-3">
                    {project.tag}
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-light tracking-tight text-gray-900 mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light italic">
                    {project.subtitle}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  custom={0.2}
                  className="w-8 h-px bg-gray-200"
                />

                <motion.p
                  variants={fadeUp}
                  custom={0.3}
                  className="text-sm text-gray-400 font-light leading-relaxed"
                >
                  {project.description}
                </motion.p>

                {/* Tech pills */}
                <motion.div
                  variants={fadeUp}
                  custom={0.4}
                  className="flex flex-wrap gap-2"
                >
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-gray-400 border border-gray-100 rounded-full px-2.5 py-1 uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Links */}
                <motion.div
                  variants={fadeUp}
                  custom={0.5}
                  className="flex items-center gap-6 pt-2"
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-900 border border-gray-200 rounded-full px-5 py-2 hover:border-gray-400 active:scale-95 transition-all duration-150"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 font-mono hover:text-gray-900 transition-colors duration-150"
                  >
                    GitHub →
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-32 pt-8 border-t border-gray-100 flex items-center justify-between"
        >
          <p className="text-[10px] font-mono uppercase tracking-widest text-gray-300">
            More projects on GitHub
          </p>

          <a
            href="https://github.com/alokishere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono text-gray-400 hover:text-gray-900 transition-colors"
          >
            github.com/alokishere →
          </a>
        </motion.div>

      </div >
    </div >
  );
};

export default WorkSample;