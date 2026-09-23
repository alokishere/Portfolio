import React from "react";

function getCurrentDateTime() {
  const date = new Date();
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][date.getMonth()];
  return {
    formattedDate: `${day}, ${date.getDate()} ${month} ${date.getFullYear()}`,
    time: date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  };
}

export default function ActivityHeader() {
  const { formattedDate, time } = getCurrentDateTime();
  return (
    <section className="mb-10 flex flex-col justify-between gap-8 md:mb-14 md:flex-row md:items-start">
      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#71809b]">
          Activity
        </p>
        <h1 className="text-4xl font-light tracking-tight text-[#101d39] md:text-5xl">
          Across the <span className="text-[#9aa5ba]">platforms.</span>
        </h1>
        <p className="mt-3 text-base text-[#71809b]">
          Code, build, share, learn — a snapshot of my recent activity.
        </p>
      </div>
      <div className="w-fit rounded-2xl border border-[#edf0f5] px-4 py-3 text-xs text-[#71809b] shadow-[0_12px_32px_-28px_rgba(16,29,57,0.5)]">
        <p className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          Live Updates
        </p>
        <p className="mt-1 pl-[18px]">
          {formattedDate} · <span className="uppercase">{time}</span>
        </p>
      </div>
    </section>
  );
}
