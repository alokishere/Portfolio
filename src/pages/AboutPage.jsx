
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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
    Frontend: ['React', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'HTML', 'CSS'],
    Backend: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io', 'Web Push API'],
    Database: ['MongoDB', 'Mongoose'],
    Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Chrome Extensions'],
  };

  const experience = [
    { year: '2026 - Present', title: 'Full Stack Developer', company: 'Sarathi India Pvt. Ltd.' },
    { year: '2026', title: 'Web Developer Intern', company: 'Sarathi India Pvt. Ltd. (3 months)' },
    { year: '2026', title: 'Junior Full Stack Developer', company: 'Life Infotech (1 month)' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-light px-8 md:px-16 py-12 max-w-5xl mx-auto">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-20 group mt-5"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
      </motion.button>

      {/* Hero Section */}
      <motion.section
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
      </motion.section>

      {/* Story Section */}
      <motion.section
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
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mb-24"
      >
        <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={fadeUp}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-900 mb-6">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="border border-gray-100 rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:border-gray-300 hover:text-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-24"
      >
        <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 mb-12">Experience</h2>
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
      </motion.section>
      <Contact/>
    </div>
  );
};

export default AboutPage;
