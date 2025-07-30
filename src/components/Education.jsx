import React from "react";

const educationData = [
  {
    title: "Job Ready AI Powered Cohort",
    institution: "Sheryians Coding School",
    year: "Currently Enrolled",
    description:
      "Hands-on training in modern web development and AI integration. Building real-world projects to become industry-ready.",
    icon: "🤖",
    highlight: true,
  },
  {
    title: "Diploma in Computer Science & Engineering",
    institution: "Ambekeshwar Group of Institutions",
    year: "2023 – 2026",
    description:
      "Core computer science, web development, and software engineering. Consistently among top performers.",
    icon: "💻",
    highlight: false,
  },
  {
    title: "Advanced Diploma in Computer Applications (ADCA)",
    institution: "Private Institute",
    year: "2022 – 2023",
    description:
      "Mastered office tools, programming basics, and foundational computer knowledge.",
    icon: "🖥️",
    highlight: false,
  },
  {
    title: "Intermediate (12th), Science",
    institution: "UP Board",
    year: "2023",
    description:
      "Excelled in science stream with a focus on logical thinking and problem-solving.",
    icon: "🔬",
    highlight: false,
  },
  {
    title: "High School (10th)",
    institution: "UP Board",
    year: "2021",
    description:
      "Strong academic performance and active participation in tech events.",
    icon: "🏫",
    highlight: false,
  },
];

const gradientBorder =
  "bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 p-[2px] rounded-xl";

const Education = () => {
  return (
    <section className="py-20 px-8 max-w-4xl mx-auto relative">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 mb-14 drop-shadow-lg tracking-tight">
        <span role="img" aria-label="graduation cap" className="mr-2">🎓</span>
        My Education Journey
      </h2>
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-sky-400 rounded-full opacity-30 z-0 hidden md:block"></div>
        <div className="space-y-10 relative z-10">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-5 md:gap-8 group transition-transform duration-300 ${
                item.highlight
                  ? "scale-105 shadow-xl border-2 border-pink-400/60"
                  : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg border-4 ${
                    item.highlight
                      ? "border-pink-400 bg-white animate-bounce"
                      : "border-sky-300 bg-white"
                  }`}
                  style={{ zIndex: 2 }}
                >
                  {item.icon}
                </div>
                {index !== educationData.length - 1 && (
                  <div className="w-1 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-sky-400 opacity-40 mt-1 hidden md:block"></div>
                )}
              </div>
              {/* Card */}
              <div
                className={`flex-1 ${item.highlight ? gradientBorder : ""}`}
              >
                <div
                  className={`bg-white rounded-xl shadow-md p-6 transition-all duration-300 ${
                    item.highlight
                      ? "bg-gradient-to-r from-pink-50 via-purple-50 to-sky-50"
                      : ""
                  } group-hover:shadow-lg`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1 flex items-center gap-2">
                      {item.title}
                      {item.highlight && (
                        <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-pink-100 text-pink-600 font-semibold animate-pulse">
                          Current
                        </span>
                      )}
                    </h3>
                    <span className="text-sm text-sky-600 font-semibold bg-sky-100 px-3 py-1 rounded-full shadow">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-md text-gray-700 mt-2 font-medium">
                    {item.institution}
                  </p>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
