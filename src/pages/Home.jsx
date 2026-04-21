import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import About from './About';
import WorkSample from './Wroksample';
import Contact from './Contact';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Home = ({ homeRef, aboutRef, workRef, contactRef }) => {
  const navigate = useNavigate();

  const sayHi = () => {
    const phoneNumber = '919580908191';
    const message = 'Hello, I am interested in your services.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const resume = () => {
    window.open("https://drive.google.com/file/d/1OyhnUMNIA8QcYtzUuLIjTW8UVXoYd6b_/view?usp=sharing", "_blank");
  };

  return (
    <>
      {/* ── HERO ── */}
      <div ref={homeRef} className="min-h-screen w-full bg-white flex flex-col">

        {/* Main hero grid */}
        <div className="flex-1 flex items-center px-8 md:px-12">
          <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center py-20">

            {/* LEFT */}
            <div>
              {/* Status pill */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.1}
                className="inline-flex items-center gap-2 text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1.5 mb-8 font-mono tracking-wide"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                available for work
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.2}
                className="text-4xl md:text-5xl font-light text-gray-900 leading-[1.15] tracking-tight mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                I build{' '}
                <em className="font-light not-italic" style={{ fontStyle: 'italic' }}>
                  scalable
                </em>{' '}
                web apps<br className="hidden md:block" /> that ship.
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.3}
                className="text-sm text-gray-400 leading-relaxed max-w-sm mb-10 font-light"
              >
                MERN stack developer focused on clean architecture, real
                performance, and products that actually work in production.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.4}
                className="flex items-center gap-3 mb-12"
              >
                <button
                  onClick={resume}
                  className="text-sm font-medium text-white bg-gray-900 px-5 py-2.5 rounded-full hover:opacity-80 active:scale-95 transition-all duration-150"
                >
                  View Resume
                </button>
                <button
                  onClick={sayHi}
                  className="text-sm text-gray-500 border border-gray-200 px-5 py-2.5 rounded-full hover:border-gray-400 hover:text-gray-800 active:scale-95 transition-all duration-150"
                >
                  Contact Me
                </button>
              </motion.div>

              {/* Metrics */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.5}
                className="flex items-center gap-8"
              >
                {[
                  { num: '5+', label: 'Projects' },
                  { num: '2y',  label: 'Experience' },
                  { num: '∞',  label: 'Coffee' },
                ].map((m, i) => (
                  <React.Fragment key={m.label}>
                    {i !== 0 && <div className="w-px h-8 bg-gray-100" />}
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xl font-medium text-gray-900 tracking-tight font-mono">
                        {m.num}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-light">
                        {m.label}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Project cards */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="hidden md:flex flex-col gap-3"
            >
              {[
                {
                  tag: 'Featured · Full Stack',
                  title: 'Employee Management System',
                  desc: 'Real-time chat via Socket.io, push notifications with VAPID, JWT auth, and cron jobs.',
                  techs: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
                },
                {
                  tag: 'SaaS · Chrome Extension',
                  title: 'Google Maps Lead Scraper',
                  desc: 'Auto-scroll, MutationObserver, click-per-listing phone extraction and CSV export.',
                  techs: ['Chrome API', 'JavaScript', 'DOM'],
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="group border border-gray-100 rounded-2xl p-5 hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2">
                    {project.tag}
                  </p>
                  <h3 className="text-sm font-medium text-gray-900 mb-1.5 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techs.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-gray-400 border border-gray-100 rounded-full px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate('/work')}
                    className="text-[11px] text-gray-300 group-hover:text-gray-600 mt-3 transition-colors duration-150"
                  >
                    View project →
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => navigate('/work')}
                className="self-start text-xs font-mono text-gray-400 hover:text-gray-900 transition-colors duration-150 pt-1"
              >
                See all work →
              </button>
            </motion.div>

          </div>
        </div>

        {/* Bottom stack ticker */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.6}
          className="border-t border-gray-100 px-8 md:px-12 py-3 flex gap-6"
        >
          {['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Framer Motion', 'GSAP'].map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono uppercase tracking-widest text-gray-300 hover:text-gray-600 transition-colors duration-150 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Other sections */}
      <section ref={aboutRef} id="about" className="min-h-screen relative z-10 bg-white">
        <About />
      </section>
      <section ref={workRef} id="worksample" className="min-h-screen relative z-10 bg-white">
        <WorkSample />
      </section>
      <section ref={contactRef} id="contact" className="min-h-screen relative z-10 bg-white">
        <Contact />
      </section>
    </>
  );
};

export default Home;
