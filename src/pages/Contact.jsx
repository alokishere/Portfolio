
import { FaGithub, FaLinkedin, FaXTwitter, FaDownload, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Lottie from "lottie-react";
import contactAnim from "../assets/Contact Us.json"; // Replace with your Lottie animation path

const Contact = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Animation */}
        <div className="w-full md:w-1/2">
          <Lottie animationData={contactAnim} loop className="w-full max-h-[400px]" />
        </div>

        {/* Right: Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500">
          Turning your ideas into impactful digital experiences
          </h2>
          <p className="text-lg text-gray-600">
          Clean code, seamless UI, and full-stack power at your service.
          </p>

          <div className="space-y-3 text-gray-800 font-medium">
            <p>
              <a href="tel:+919580908191" className="text-gray-500">Call or text:</a>{" "}
              <a href="tel:+919580908191" className="bg-gray-100 px-3 py-1 rounded-md">(+91) 9580908191</a>
            </p>
            <p>
              <a href="mailto:alokvishwakarmabdh@gmail.com" className="text-gray-500">Email me:</a>{" "}
              <a href="mailto:alokvishwakarmabdh@gmail.com" className="bg-gray-100 px-3 py-1 rounded-md">alokvishwakarmabdh@gmail.com</a>
            </p>
            <p>
              <span className="text-gray-500">GitHub:</span>{" "}
              <a
                href="https://github.com/alokishere"
                target="_blank"
                className="bg-gray-100 px-3 py-1 rounded-md inline-flex items-center gap-2 hover:bg-gray-200 transition"
              >
                <FaGithub /> alokishere
              </a>
            </p>
            <p>
              <span className="text-gray-500">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/alok-webdev"
                target="_blank"
                className="bg-gray-100 px-3 py-1 rounded-md inline-flex items-center gap-2 hover:bg-gray-200 transition"
              >
                <FaLinkedin /> alok-webdev
              </a>
            </p>
            <p>
              <span className="text-gray-500">X.com:</span>{" "}
              <a
                href="https://x.com/alok_vihwakarma"
                target="_blank"
                className="bg-gray-100 px-3 py-1 rounded-md inline-flex items-center gap-2 hover:bg-gray-200 transition"
              >
                <FaXTwitter /> @alokdev
              </a>
            </p>
            <p>
              <span className="text-gray-500">Instagram:</span>{" "}
              <a
                href="https://instagram.com/_alok_coder/"
                target="_blank"
                className="bg-gray-100 px-3 py-1 rounded-md inline-flex items-center gap-2 hover:bg-gray-200 transition"
              >
                <FaInstagram /> @_alok_coder
              </a>
            </p>
            <p>
              <span className="text-gray-500">Whatsapp:</span>{" "}
              <a
                href="https://instagram.com/_alok_coder/"
                target="_blank"
                className="bg-gray-100 px-3 py-1 rounded-md inline-flex items-center gap-2 hover:bg-gray-200 transition"
              >
                <FaWhatsapp /> +91 9580908191
              </a>
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
