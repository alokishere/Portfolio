import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const socials = [
  {
    label: "GitHub",
    icon: FaGithub,
    handle: "alokishere",
    href: "https://github.com/alokishere",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    handle: "alok-js",
    href: "https://linkedin.com/in/alok-js",
  },
  {
    label: "X.com",
    icon: FaXTwitter,
    handle: "@alokd-js",
    href: "https://x.com/alok_js",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    handle: "@_alok_coder",
    href: "https://instagram.com/_alok_coder/",
  },
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    handle: "+91 9580908191",
    href: "https://wa.me/919580908191?text=Hello, I am interested in your services.",
  },
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
    <section className="w-full bg-gradient-to-b from-white via-white to-slate-50/60 border-t border-gray-100">
      {/* Top CTA band */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start"
        >
          {/* Left */}
          <div className="space-y-10">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 border border-gray-200 rounded-full px-3 py-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Let's work together
            </motion.p>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="text-4xl md:text-6xl font-light tracking-tight text-gray-900 leading-[1.05] -mt-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Got a project
              <br />
              <em style={{ fontStyle: "italic" }} className="text-gray-700">
                in mind?
              </em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md"
            >
              I'm available for freelance projects, full-time roles, and
              consulting. Clean code, scalable architecture, shipped fast.
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="flex flex-wrap gap-3"
            >
              <a
                href="mailto:alokvishwakarmabdh@gmail.com"
                className="text-sm md:text-base font-medium text-white bg-gray-900 px-6 py-3 rounded-full shadow-[0_12px_28px_-18px_rgba(15,23,42,0.9)] hover:bg-gray-800 active:scale-95 transition-all duration-150 w-full md:w-auto text-center"
              >
                Send Email
              </a>

              <a
                href="https://wa.me/919580908191?text=Hello, I am interested in your services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-gray-600 border border-gray-300 bg-white px-6 py-3 rounded-full hover:border-gray-500 hover:text-gray-900 active:scale-95 transition-all duration-150 inline-flex items-center justify-center gap-2 w-full md:w-auto"
              >
                <FaWhatsapp size={13} /> WhatsApp
              </a>

              <a
                href="tel:+919580908191"
                className="text-sm md:text-base text-gray-600 border border-gray-300 bg-white px-6 py-3 rounded-full hover:border-gray-500 hover:text-gray-900 active:scale-95 transition-all duration-150 w-full md:w-auto text-center"
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
                    className="text-xs font-mono text-gray-600 border border-gray-200 bg-white rounded-full px-3 py-1 uppercase tracking-widest hover:border-gray-400 hover:text-gray-900 transition-colors duration-150"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6 md:gap-8">


            {/* Company card */}

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="flex-1 border border-slate-200 rounded-3xl bg-white p-6 md:p-7 flex flex-col gap-6 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.55)]"
            >
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">
                  My Studio
                </p>
                <h3
                  className="text-2xl font-medium text-gray-900 tracking-tight mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Alok Labs
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
                  Independent dev studio offering web development, SaaS MVPs,
                  and digital consulting for startups and businesses. Operating
                  under{" "}
                  <span className="font-mono text-gray-500">alok.company</span>
                </p>
              </div>

              {/* Card footer buttons */}
              <motion.div className="-mt-1">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://alok.company"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono uppercase tracking-widest text-white bg-gray-900 rounded-full px-4 py-2.5 hover:bg-gray-800 active:scale-95 transition-all"
                  >
                    Visit Site →
                  </a>
                  <a
                    href="mailto:alokvishwakarmabdh@gmail.com"
                    className="text-xs font-mono uppercase tracking-widest text-gray-600 border border-gray-300 rounded-full px-4 py-2.5 hover:border-gray-500 hover:text-gray-900 transition-all"
                  >
                    Hire the Studio →
                  </a>
                </div>
              </motion.div>

              {/* Contact details */}
              <motion.div
                variants={fadeUp}
                custom={0.4}
                className="rounded-2xl border border-gray-100 bg-slate-50/70 p-4"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">
                  Direct
                </p>
                <div className="space-y-0">
                  <a
                    href="tel:+919580908191"
                    className="flex items-center justify-between py-3 border-b border-gray-100 group"
                  >
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                      Phone
                    </span>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors text-right">
                      +91 9580908191 →
                    </span>
                  </a>

                  <a
                    href="mailto:alokvishwakarmabdh@gmail.com"
                    className="flex items-center justify-between py-3 border-b border-gray-100 group"
                  >
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                      Email
                    </span>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors text-right break-all sm:break-normal">
                      alokvishwakarmabdh@gmail.com →
                    </span>
                  </a>

                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                      Location
                    </span>
                    <span className="text-sm text-gray-600">
                      Lucknow, India
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                      Status
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Available for work
                    </span>
                  </div>
                </div>
              </motion.div>
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
                aria-label={`${label} profile`}
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
