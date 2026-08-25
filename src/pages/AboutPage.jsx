
import React from 'react';
import { motion as Motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiTailwindcss,
  SiSocketdotio,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiSlack,
  SiNpm,
  SiOpenai,
} from 'react-icons/si';
import { FaTerminal } from 'react-icons/fa';
import Contact from './Contact';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AboutPage = () => {
  const navigate = useNavigate();

  const skills = {
    Frontend: [
      { icon: SiReact, name: 'React', color: 'text-sky-500' },
      { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-400' },
      { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-500' },
      { icon: SiHtml5, name: 'HTML', color: 'text-red-500' },
      { icon: SiCss3, name: 'CSS', color: 'text-blue-500' },
    ],
    Backend: [
      { icon: SiNodedotjs, name: 'Node.js', color: 'text-green-600' },
      { icon: SiExpress, name: 'Express', color: 'text-gray-700' },
      { icon: SiSocketdotio, name: 'Socket.io', color: 'text-gray-900' },
    ],
    Database: [
      { icon: SiMongodb, name: 'MongoDB', color: 'text-green-700' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-600' },
    ],
    Tools: [
      { icon: SiGit, name: 'Git', color: 'text-red-500' },
      { icon: SiGithub, name: 'GitHub', color: 'text-gray-800' },
      { icon: SiPostman, name: 'Postman', color: 'text-orange-500' },
      { icon: SiDocker, name: 'Docker', color: 'text-blue-500' },
      { icon: SiSlack, name: 'Slack', color: 'text-purple-600' },
      { icon: SiNpm, name: 'npm', color: 'text-red-600' },
      { icon: FaTerminal, name: 'CLI', color: 'text-gray-800' },
      { icon: SiOpenai, name: 'AI', color: 'text-gray-800' },
    ],
  };

  const experience = [
    { year: '2026 - May 2026', title: 'Full Stack Developer', company: 'Sarathi India Pvt. Ltd.' },
    { year: '2026', title: 'Web Developer Intern', company: 'Sarathi India Pvt. Ltd. (3 months)' },
    { year: '2026', title: 'Junior Full Stack Developer', company: 'Life Infotech (1 month)' },
  ];

  const floatingIcons = [
    { icon: SiReact, color: 'text-sky-500', position: 'top-8 left-8', rotate: -10, delay: 0 },
    { icon: SiNodedotjs, color: 'text-green-600', position: 'top-24 right-12', rotate: 8, delay: 0.2 },
    { icon: SiJavascript, color: 'text-yellow-400', position: 'top-48 left-24', rotate: 12, delay: 0.4 },
    { icon: SiDocker, color: 'text-blue-500', position: 'bottom-32 right-20', rotate: -8, delay: 0.1 },
    { icon: SiGithub, color: 'text-gray-800', position: 'bottom-12 left-10', rotate: 7, delay: 0.3 },
    { icon: SiMongodb, color: 'text-green-700', position: 'bottom-4 right-4', rotate: -14, delay: 0.5 },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-light px-8 md:px-16 py-12 max-w-5xl mx-auto">
      {/* Back Button */}
      <Motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-20 group mt-5"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
      </Motion.button>

      {/* Hero Section */}
      <Motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Alok Vishwakarma
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm font-mono text-gray-400 uppercase tracking-widest mb-8">
          <span>Full Stack Developer</span>
          <span className="hidden md:block">•</span>
          <span>Lucknow, India</span>
        </div>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
          Building high-performance web applications with a focus on clean code, scalability, and seamless user experiences.
        </p>
      </Motion.section>

      {/* Story Section */}
      <Motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-24"
      >
        <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 mb-8">The Story</h2>
        <div className="grid md:grid-cols-2 gap-12 text-gray-500 leading-relaxed">
          <p>
            My journey into the world of development started with a curiosity about how things work on the internet. What began as experimenting with HTML and CSS quickly evolved into a passion for building complex, full-stack applications. I thrive on the challenge of turning abstract ideas into functional, pixel-perfect reality.
          </p>
          <p>
            Over the past few months, I've dedicated myself to mastering the MERN stack. I believe that great software is not just about writing code, but about solving real-world problems and creating value for users. Whether it's a real-time chat system or a complex dashboard, I approach every project with a focus on performance and maintainability.
          </p>
        </div>
      </Motion.section>

      {/* Skills Section */}
      <Motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mb-24"
      >
        <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <Motion.div key={category} variants={fadeUp}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-900 mb-6">{category}</h3>
              <div className="grid grid-cols-2 gap-x-3 gap-y-5">
                {items.map(({ icon, name, color }) => (
                  <div key={name} className="group flex items-center gap-2.5 min-w-0">
                    {React.createElement(icon, {
                      className: `w-5 h-5 shrink-0 ${color} transition-transform duration-200 group-hover:scale-110`,
                      'aria-hidden': true,
                    })}
                    <span className="truncate text-[10px] font-mono uppercase tracking-widest text-gray-500 group-hover:text-gray-900 transition-colors">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.section>

      {/* Experience Section */}
      <Motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-24"
      >
        <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 mb-12">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr] gap-12 md:gap-20 items-start">
          <div className="relative pl-8 border-l border-gray-100 space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-white border border-gray-200" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                  <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest">{exp.year}</span>
                  <h3 className="text-lg font-medium text-gray-900 tracking-tight">{exp.title}</h3>
                </div>
                <p className="text-sm text-gray-400 font-light">{exp.company}</p>
              </div>
            ))}
          </div>

          <div className="relative hidden md:block h-[22rem] overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-slate-50 via-white to-sky-50/50" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.14)_1px,transparent_1px)] [background-size:18px_18px]" />
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200/70 bg-white/70 shadow-[0_20px_45px_-28px_rgba(15,23,42,0.55)] backdrop-blur-sm" />
            {floatingIcons.map(({ icon, color, position, rotate, delay }) => (
                <Motion.div
                key={position}
                initial={{ opacity: 0, scale: 0.7, rotate: rotate - 8 }}
                whileInView={{ opacity: 1, scale: 1, rotate }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
                animate={{ y: [0, -7, 0] }}
                className={`absolute ${position} flex h-12 w-12 items-center justify-center rounded-2xl border border-white/90 bg-white/75 shadow-[0_15px_30px_-20px_rgba(15,23,42,0.7)] backdrop-blur-md ${color}`}
              >
                {React.createElement(icon, { className: 'h-6 w-6' })}
                </Motion.div>
            ))}
            <p className="absolute bottom-5 left-0 right-0 text-center text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
              Building with curiosity
            </p>
          </div>
        </div>
      </Motion.section>
      <Contact/>
    </div>
  );
};

export default AboutPage;
