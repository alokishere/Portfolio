import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    tag: "Full Stack · SaaS",
    title: "ARVI Chat",
    subtitle: "AI-powered Hinglish chatbot",
    description:
      "SaaS AI chatbot with Hinglish conversation support. Uses LLM APIs (Groq/Gemini) for contextual chat responses, vector search for long-term memory retrieval, and Socket.io for real-time messaging. Scalable full-stack architecture with MongoDB.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "AI APIs", "Vector DB"],
    image: "image/Arvi.png",
    liveLink: "https://chat.alokdev.in",
    githubLink: "https://github.com/alokishere/ChatGPTClone",
    hasLiveDemo: true,
    liveLabel: "Live landing page",
    year: "2025",
  },{
    tag: "Full Stack · SaaS",
    title: "Email Blast System",
    subtitle: "Bulk email sender with queue system",
    description:
      "SaaS platform for sending bulk personalized emails via Gmail OAuth/API. Queue-based processing with rate limiting prevents API abuse. Supports delivery status tracking, campaign analytics, and large-scale recipient management.",
    techStack: ["React", "Node.js", "MongoDB", "Gmail API", "Queue System", "SMTP"],
    image: "image/emailblast.png",
    liveLink: "https://mailblast.alokdev.in",
    githubLink: "https://github.com/alokishere/EmailBlast",
    hasLiveDemo: true,
    liveLabel: "Live Demo",
    year: "2026",
  },
  {
    tag: "Full Stack · MERN",
    title: "Postly",
    subtitle: "AI caption generator with social feed",
    description:
      "AI-powered social platform: upload images to generate captions and trending hashtags. Includes JWT-authenticated personalized feed, image upload system, and hashtag recommendations — inspired by Instagram UX patterns.",
    techStack: ["React", "Node.js", "MongoDB", "AI API", "Image Upload", "JWT"],
    image: "image/postly.png",
    liveLink: null,
    githubLink: "https://github.com/alokishere/Postly",
    hasLiveDemo: false,
    year: "2025",
  },
  {
    tag: "Full Stack · MERN",
    title: "Moody Player",
    subtitle: "Mood-based music recommendation",
    description:
      "Detects user mood via webcam using AI-powered image analysis, then recommends songs matching the detected emotion. Built with MERN stack, Camera API for real-time capture, and Tailwind CSS for a polished UI.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Camera API", "Tailwind CSS", "AI API"],
    image: "image/MoodyPlayer.png",
    liveLink: "https://moody-player.vercel.app",
    githubLink: "https://github.com/alokishere/Moody-Player",
    hasLiveDemo: true,
    liveLabel: "Live Demo",
    year: "2025",
  },
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
    <div className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
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
            Selected Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="text-3xl md:text-5xl font-light tracking-tight text-gray-900"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Projects
          </motion.h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
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
                  width="800"
                  height="600"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                {/* Year badge */}
                <div className="absolute top-4 right-4 text-xs font-mono uppercase tracking-widest text-gray-500 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  {project.year}
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex flex-col gap-5">
                <motion.div variants={fadeUp} custom={0.1}>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">
                    {project.tag}
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-light tracking-tight text-gray-900 mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed italic">
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
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
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
                      className="text-xs font-mono text-gray-600 border border-gray-200 rounded-full px-3 py-1 uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Links */}
                <motion.div
                  variants={fadeUp}
                  custom={0.5}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  {project.hasLiveDemo && project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.liveLabel || 'Live Demo'} for ${project.title}`}
                      className="text-sm md:text-base font-medium text-gray-900 border border-gray-200 rounded-full px-5 py-2 hover:border-gray-400 active:scale-95 transition-all duration-150 w-full md:w-auto text-center"
                    >
                      {project.liveLabel || 'Live Demo'}
                    </a>
                  )}

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="text-sm md:text-base text-gray-600 font-mono hover:text-gray-900 transition-colors duration-150"
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
          className="mt-16 md:mt-24 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-gray-500">
            More projects on GitHub
          </p>

          <a
            href="https://github.com/alokishere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors"
          >
            github.com/alokishere →
          </a>
        </motion.div>

      </div >
    </div >
  );
};

export default React.memo(WorkSample);
