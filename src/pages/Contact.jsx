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
  { label: "LinkedIn", icon: FaLinkedin, handle: "alok-webdev", href: "https://linkedin.com/in/alok-webdev" },
  { label: "X.com", icon: FaXTwitter, handle: "@alokdev", href: "https://x.com/alok_vihwakarma" },
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
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >

          {/* Left */}
          <div>
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-4"
            >
              Let's work together
            </motion.p>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-[1.15] mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Got a project<br />
              <em style={{ fontStyle: "italic" }}>in mind?</em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-sm text-gray-400 font-light leading-relaxed mb-10 max-w-sm"
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
                className="text-sm font-medium text-white bg-gray-900 px-5 py-2.5 rounded-full hover:opacity-80 active:scale-95 transition-all duration-150"
              >
                Send Email
              </a>

              <a
                href="https://wa.me/919580908191?text=Hello, I am interested in your services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 border border-gray-200 px-5 py-2.5 rounded-full hover:border-gray-400 hover:text-gray-900 active:scale-95 transition-all duration-150 inline-flex items-center gap-2"
              >
                <FaWhatsapp size={13} /> WhatsApp
              </a>

              <a
                href="tel:+919580908191"
                className="text-sm text-gray-500 border border-gray-200 px-5 py-2.5 rounded-full hover:border-gray-400 hover:text-gray-900 active:scale-95 transition-all duration-150"
              >
                Call Me
              </a>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeUp} custom={0.4}>
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-3">
                Services
              </p>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono text-gray-400 border border-gray-100 rounded-full px-3 py-1 uppercase tracking-wide"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-10">

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
              className="border border-gray-100 rounded-2xl p-5"
            >
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-3">
                My Studio
              </p>
              <h3
                className="text-lg font-medium text-gray-900 tracking-tight mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Alok Labs
              </h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                Independent dev studio offering web development, SaaS MVPs, and
                digital consulting for startups and businesses. Operating under{" "}
                <span className="font-mono text-gray-500">alok.company</span>
              </p>
              <div className="flex gap-3">
                <a
                  href="mailto:alokvishwakarmabdh@gmail.com"
                  className="text-[10px] font-mono text-gray-400 border border-gray-100 rounded-full px-3 py-1.5 hover:border-gray-300 hover:text-gray-900 transition-all"
                >
                  Hire the studio →
                </a>
              </div>
            </motion.div>

            {/* Contact details */}
            <motion.div variants={fadeUp} custom={0.4} className="space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-3">
                Direct
              </p>
              <a
                href="tel:+919580908191"
                className="flex items-center justify-between py-2.5 border-b border-gray-100 group"
              >
                <span className="text-xs text-gray-400 font-mono">Phone</span>
                <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
                  +91 9580908191 →
                </span>
              </a>

              <a
                href="mailto:alokvishwakarmabdh@gmail.com"
                className="flex items-center justify-between py-2.5 border-b border-gray-100 group"
              >
                <span className="text-xs text-gray-400 font-mono">Email</span>
                <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
                  alokvishwakarmabdh@gmail.com →
                </span>
              </a>
              <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                <span className="text-xs text-gray-400 font-mono">Location</span>
                <span className="text-xs text-gray-600">Lucknow, India</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="text-xs text-gray-400 font-mono">Status</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-600">
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
        <div className="max-w-5xl mx-auto px-8 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Socials */}
          <div className="flex items-center gap-5">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="text-gray-300 hover:text-gray-900 transition-colors duration-150"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Center */}
          <p className="text-[10px] font-mono text-gray-300 tracking-widest uppercase">
            Alok Vishwakarma · Alok Labs · {new Date().getFullYear()}
          </p>

          {/* Right */}
          <p className="text-[10px] font-mono text-gray-300">
            Built with React + Tailwind
          </p>

        </div>
      </div>

    </section>
  );
};

export default Contact;