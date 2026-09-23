import React from "react";

export default function ActivityFooter() {
  return (
    <footer className="mt-12 flex flex-col gap-6 border-t border-[#edf0f5] py-8 text-sm md:flex-row md:items-center md:justify-between">
      <span className="text-lg font-semibold text-[#101d39]">Alok.</span>
      <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[#71809b]">
        <a href="/activity">Activity</a>
        <a href="/work">Work</a>
        <a href="/about">About</a>
        <a href="/#contact">Contact</a>
      </nav>
      <a
        href="http://alok.company/"
        target="_blank"
        rel="noreferrer"
        className="w-fit rounded-full bg-[#101d39] px-5 py-2.5 text-white transition hover:bg-[#1b2e50]"
      >
        Hire Studio
      </a>
    </footer>
  );
}
