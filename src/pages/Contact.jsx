import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import contactAnim from "../assets/Contact Us.json";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const socials = [
  { label: "GitHub", icon: FaGithub, handle: "alokishere", href: "https://github.com/alokishere" },
  { label: "LinkedIn", icon: FaLinkedin, handle: "alok-js", href: "https://linkedin.com/in/alok-js" },
  { label: "X.com", icon: FaXTwitter, handle: "@alokd-js", href: "https://x.com/alok_js" },
  { label: "Instagram", icon: FaInstagram, handle: "@_alok_coder", href: "https://instagram.com/_alok_coder/" },
  { label: "WhatsApp", icon: FaWhatsapp, handle: "+91 9580908191", href: "https://wa.me/919580908191?text=Hello, I am interested in your services." },
];

const services = [
  "Full Stack Web Apps",
  "REST API Development",
  "React UI Development",
  "Chrome Extensions",
  "SaaS MVPs",
  "Website Redesign",
];

const Contact = () => {
  return (
    <section className="w-full bg-white border-t border-gray-100">

      {/* Top CTA band */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
        >

          {/* Left */}
          <div>
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4"
            >
              Let's work together
            </motion.p>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="text-3xl md:text-5xl font-light tracking-tight text-gray-900 leading-[1.15] mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Got a project<br />
              <em style={{ fontStyle: "italic" }}>in mind?</em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-sm md:text-base text-gray-600 leading-relaxed mb-10 max-w-sm"
            >
              I'm available for freelance projects, full-time roles, and
              consulting. Clean code, scalable architecture, shipped fast.
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="mailto:alokvishwakarmabdh@gmail.com"
                className="text-sm md:text-base font-medium text-white bg-gray-900 px-5 py-2.5 rounded-full hover:opacity-80 active:scale-95 transition-all duration-150 w-full md:w-auto text-center"
              >
                Send Email
              </a>

              <a
                href="https://wa.me/919580908191?text=Hello, I am interested in your services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-gray-600 border border-gray-200 px-5 py-2.5 rounded-full hover:border-gray-400 hover:text-gray-900 active:scale-95 transition-all duration-150 inline-flex items-center justify-center gap-2 w-full md:w-auto"
              >
                <FaWhatsapp size={13} /> WhatsApp
              </a>

              <a
                href="tel:+919580908191"
                className="text-sm md:text-base text-gray-600 border border-gray-200 px-5 py-2.5 rounded-full hover:border-gray-400 hover:text-gray-900 active:scale-95 transition-all duration-150 w-full md:w-auto text-center"
              >
                Call Me
              </a>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeUp} custom={0.4}>
              <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">
                Services
              </p>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono text-gray-600 border border-gray-200 rounded-full px-3 py-1 uppercase tracking-widest"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8 md:gap-12">

            {/* Lottie */}
            <motion.div variants={fadeUp} custom={0.2}>
              <Lottie
                animationData={contactAnim}
                loop
                className="w-full max-h-[220px]"
              />
            </motion.div>

            {/* Company card */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="border border-gray-100 rounded-2xl p-6"
            >
              <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">
                My Studio
              </p>
              <h3
                className="text-lg font-medium text-gray-900 tracking-tight mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Alok Labs
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                Independent dev studio offering web development, SaaS MVPs, and
                digital consulting for startups and businesses. Operating under{" "}
                <span className="font-mono text-gray-500">alok.company</span>
              </p>
              <div className="flex gap-3">
                <a
                  href="mailto:alokvishwakarmabdh@gmail.com"
                  className="text-xs font-mono uppercase tracking-widest text-gray-600 border border-gray-200 rounded-full px-3 py-1 hover:border-gray-300 hover:text-gray-900 transition-all"
                >
                  Hire the studio →
                </a>
              </div>
            </motion.div>

            {/* Contact details */}
            <motion.div variants={fadeUp} custom={0.4} className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">
                Direct
              </p>
              <a
                href="tel:+919580908191"
                className="flex items-center justify-between py-2.5 border-b border-gray-100 group"
              >
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Phone</span>
                <span className="text-sm md:text-base text-gray-600 group-hover:text-gray-900 transition-colors">
                  +91 9580908191 →
                </span>
              </a>

              <a
                href="mailto:alokvishwakarmabdh@gmail.com"
                className="flex items-center justify-between py-2.5 border-b border-gray-100 group"
              >
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Email</span>
                <span className="text-sm md:text-base text-gray-600 group-hover:text-gray-900 transition-colors">
                  alokvishwakarmabdh@gmail.com →
                </span>
              </a>
              <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Location</span>
                <span className="text-sm md:text-base text-gray-600">Lucknow, India</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Status</span>
                <span className="inline-flex items-center gap-1.5 text-sm md:text-base text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for work
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Socials */}
          <div className="flex items-center gap-5">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="text-gray-500 hover:text-gray-900 transition-colors duration-150"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Center */}
          <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
            Alok Vishwakarma · Alok Labs · {new Date().getFullYear()}
          </p>

          {/* Right */}
          <p className="text-xs font-mono text-gray-500">
            Built with React + Tailwind
          </p>

        </div>
      </div>

    </section>
  );
};

export default React.memo(Contact);
