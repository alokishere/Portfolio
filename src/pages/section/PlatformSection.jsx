import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { LuArrowUpRight } from "react-icons/lu";
import { activityData } from "../../data/activityData";

const platformMeta = {
  github: {
    name: "GitHub",
    description: "Open source, side projects and experiments.",
    icon: FaGithub,
    color: "text-black",
  },
  x: {
    name: "X (Twitter)",
    description: "Thoughts, updates and everything in between.",
    icon: FaXTwitter,
    color: "text-black",
  },
  linkedin: {
    name: "LinkedIn",
    description: "Professional journey and updates.",
    icon: FaLinkedin,
    color: "text-[#0a66c2]",
  },
  youtube: {
    name: "YouTube",
    description: "Tutorials, projects and tech content.",
    icon: FaYoutube,
    color: "text-[#ff0000]",
  },
  leetcode: {
    name: "LeetCode",
    description: "Keep solving, keep improving.",
    icon: SiLeetcode,
    color: "text-[#f5a623]",
  },
};

function Stats({ items }) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-5">
      {items.map(([value, label, tone]) => (
        <div key={label} className="min-w-[4.8rem]">
          <p
            className={`text-xl font-medium tracking-tight ${tone ? `activity-${tone}` : "text-[#101d39]"}`}
          >
            {value}
          </p>
          <p className="mt-1 text-xs text-[#71809b]">{label}</p>
        </div>
      ))}
    </div>
  );
}

export default function PlatformSection({ type, stats, children }) {
  const meta = platformMeta[type];
  const Icon = meta.icon;
  return (
    <section className="activity-section">
      <div className="flex min-w-0 flex-col justify-between gap-10 md:w-[42%] md:pr-8">
        <div>
          <div className="mb-3 flex items-start justify-between gap-4 md:justify-start">
            <div className={`activity-platform-icon ${meta.color}`}>
              <Icon aria-hidden="true" />
            </div>
            <a
              href="#"
              aria-label={`Open ${meta.name}`}
              className="group mt-2 text-[#14213d] md:ml-auto"
            >
              <LuArrowUpRight
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={17}
              />
            </a>
          </div>
          <h2 className="text-xl font-medium tracking-tight text-[#101d39]">
            {meta.name}
          </h2>
          <p className="mt-1 max-w-[17rem] text-sm leading-5 text-[#71809b]">
            {meta.description}
          </p>
        </div>
      <Stats items={stats || activityData[type].stats} />
      </div>
      {children}
    </section>
  );
}
