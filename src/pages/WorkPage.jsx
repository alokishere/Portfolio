import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Contact from './Contact';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const cardsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const categories = ['All', 'Full Stack', 'Chrome Extension', 'SaaS'];

// const projects = [
//   {
//     category: 'Full Stack',
//     title: 'Employee Management System',
//     year: '2026',
//     description:
//       'Real-time WebSocket chat with typing indicators and seen receipts. Browser push notifications scheduled via node-cron. JWT authentication with role-based access.',
//     tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Web Push API', 'JWT'],
//   },
//   {
//     category: 'Chrome Extension',
//     title: 'Google Maps Lead Scraper',
//     year: '2026',
//     description:
//       'Auto-scrolling with MutationObserver to detect new listings. Click-per-listing phone number extraction. Clean CSV export for lead generation workflows.',
//     tech: ['JavaScript', 'Chrome Extension API', 'DOM'],
//   },
//   {
//     category: 'SaaS',
//     title: 'ARVI Chatbot',
//     year: '2025',
//     description:
//       'Hinglish-speaking AI assistant. Migrated from Gemini to Groq llama-3.3-70b for chat. Retained Gemini gemini-embedding-001 for vector search.',
//     tech: ['Node.js', 'Groq API', 'Gemini Embeddings', 'Vector DB'],
//   },
//   {
//     category: 'Full Stack',
//     title: 'Sarathi India Portfolio',
//     year: '2025',
//     description:
//       'Corporate portfolio for Lucknow-based IT company. Custom DNS setup with CNAME records. Dynamic Axios base URL for local/production switching.',
//     tech: ['React', 'Tailwind', 'Vercel', 'Hostinger DNS'],
//   },
//   {
//     category: 'Full Stack',
//     title: 'BeFit Gym Website',
//     year: '2026',
//     description:
//       'Production-ready gym landing page for a Lucknow client. Fully responsive with modern UI, service sections, and contact integration.',
//     tech: ['React', 'Tailwind CSS'],
//   },
//   {
//     category: 'Full Stack',
//     title: 'React Admin Dashboard',
//     year: '2026',
//     description:
//       'Blog creation interface with SERP preview. SEO meta fields, slug generation, rich text. Fixed layout and scrolling bugs in complex nested layouts.',
//     tech: ['React', 'react-hook-form', 'SEO fields'],
//   },
// ];

const projects = [
  {
    category: 'Full Stack',
    title: 'Lebrostone E-Commerce',
    year: '2026',
    description:
      'End-to-end MERN-based medicine e-commerce platform. Real-time features using Socket.io. Includes product management, orders, authentication, and live deployment.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    github: 'https://github.com/yourusername/lebrostone-ecom',
  },
  {
    category: 'Full Stack',
    title: 'Employee Management System',
    year: '2026',
    description:
      'Full-stack MERN system with role-based access and real-time chat. Includes authentication, employee management, and live messaging features.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    github: 'https://github.com/yourusername/employee-management',
  },
  {
    category: 'Backend',
    title: 'Project Management System',
    year: '2026',
    description:
      'Jira-like backend system with admin/member roles. Supports project creation, tasks, subtasks, and notes with structured access control.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/yourusername/project-management-backend',
  },
  {
    category: 'Frontend',
    title: 'Ankur Tax Consultancy Website',
    year: '2025',
    description:
      'Lead-generation website built in React. Optimized UI for service showcasing and client inquiry conversion.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/ankur-tax',
  },
  {
    category: 'SaaS',
    title: 'ARVI Chatbot',
    year: '2025',
    description:
      'AI SaaS chatbot with Hinglish support. Integrated AI APIs with real-time interaction using sockets and scalable backend.',
    tech: ['Node.js', 'React', 'Socket.io', 'AI APIs', 'MongoDB'],
    github: 'https://github.com/yourusername/arvi-chatbot',
  },
  {
    category: 'SaaS',
    title: 'Email Blast System',
    year: '2026',
    description:
      'Bulk email sender SaaS platform with queue system for handling large-scale email campaigns efficiently.',
    tech: ['Node.js', 'Queue System', 'MongoDB', 'SMTP'],
    github: 'https://github.com/yourusername/email-blast',
  },
  {
    category: 'Full Stack',
    title: 'Moody Player',
    year: '2026',
    description:
      'AI-powered music suggestion app using camera input and mood detection. Integrated with Gemini AI for intelligent recommendations.',
    tech: ['React', 'Node.js', 'Camera API', 'Gemini AI'],
    github: 'https://github.com/alokishere/Moody-Player',
  },{
  category: 'Full Stack',
  title: 'Postly - AI Caption Generator Social Platform',
  year: '2025',
  description:
    'MERN-based social platform where users upload images to generate AI captions with trending hashtags. Includes personalized feed system similar to Instagram with user-based content recommendations.',
  tech: ['React', 'Node.js', 'MongoDB', 'AI API', 'Image Upload', 'JWT'],
  github: 'https://github.com/yourusername/postly',
},
  {
    category: 'Full Stack',
    title: 'Sarathi India Portfolio',
    year: '2025',
    description:
      'Corporate portfolio website for an IT company with responsive design and service-focused sections.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/sarathi-portfolio',
  },
  {
    category: 'Frontend',
    title: 'Mulico Travels Website',
    year: '2025',
    description:
      'Tour and travel website built in React with modern UI and lead generation focus. Live at mulicott.com.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/mulico-travels',
  },
];
const WorkPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-12 text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <motion.button
          type="button"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="text-sm font-mono text-gray-400 hover:text-gray-900 transition mb-14 mt-5"
        >
          ← Back
        </motion.button>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-light tracking-tight">Work</h1>
          <p className="text-sm text-gray-400 font-mono mt-3">Selected projects & experiments</p>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-10 flex flex-wrap gap-2"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`text-xs font-mono border border-gray-100 rounded-full px-3 py-1 transition ${
                  isActive ? 'bg-gray-900 text-white' : 'text-gray-400 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.section>

        <motion.section
          variants={cardsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              className="relative border border-gray-100 rounded-2xl p-6 transition-all duration-200 hover:border-gray-300 hover:-translate-y-1"
            >
              <span className="absolute top-6 right-6 text-[10px] font-mono text-gray-300">{project.year}</span>
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-3">{project.category}</p>
              <h2 className="text-lg font-medium text-gray-900 tracking-tight mb-3 pr-10">{project.title}</h2>
              <p className="text-sm text-gray-400 font-light leading-relaxed mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border border-gray-100 rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
                onClick={() => navigate('/')}
              >
                View project →
              </button>
            </motion.article>
          ))}
        </motion.section>
      </div>
      <Contact/>
    </div>
  );
};

export default WorkPage;
