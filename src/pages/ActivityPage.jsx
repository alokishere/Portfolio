import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube, FaCode } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { LuArrowUpRight, LuBox, LuMessageCircle, LuRepeat2, LuHeart, LuThumbsUp } from 'react-icons/lu';
import { activityData } from '../data/activityData';

const platformMeta = {
  github: { name: 'GitHub', description: 'Open source, side projects and experiments.', icon: FaGithub, color: 'text-black' },
  leetcode: { name: 'LeetCode', description: 'Keep solving, keep improving.', icon: SiLeetcode, color: 'text-[#f5a623]' },
  x: { name: 'X (Twitter)', description: 'Thoughts, updates and everything in between.', icon: FaXTwitter, color: 'text-black' },
  linkedin: { name: 'LinkedIn', description: 'Professional journey and updates.', icon: FaLinkedin, color: 'text-[#0a66c2]' },
  youtube: { name: 'YouTube', description: 'Tutorials, projects and tech content.', icon: FaYoutube, color: 'text-[#ff0000]' },
};

function Stats({ items }) {
  return <div className="flex flex-wrap gap-x-8 gap-y-5">{items.map(([value, label, tone]) => <div key={label} className="min-w-[4.8rem]"><p className={`text-xl font-medium tracking-tight ${tone ? `activity-${tone}` : 'text-[#101d39]'}`}>{value}</p><p className="mt-1 text-xs text-[#71809b]">{label}</p></div>)}</div>;
}

function PlatformIntro({ type }) {
  const meta = platformMeta[type];
  const Icon = meta.icon;
  return <div className="flex min-w-0 flex-col justify-between gap-10 md:w-[42%] md:pr-8">
    <div>
      <div className="mb-3 flex items-start justify-between gap-4 md:justify-start">
        <div className={`activity-platform-icon ${meta.color}`}><Icon aria-hidden="true" /></div>
        <a href="#" aria-label={`Open ${meta.name}`} className="group mt-2 text-[#14213d] md:ml-auto"><LuArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={17} /></a>
      </div>
      <h2 className="text-xl font-medium tracking-tight text-[#101d39]">{meta.name}</h2>
      <p className="mt-1 max-w-[17rem] text-sm leading-5 text-[#71809b]">{meta.description}</p>
    </div>
    <Stats items={activityData[type].stats} />
  </div>;
}

function GithubActivity() {
  return <div className="activity-preview"><p className="activity-preview-title">Latest 5 commits</p><div>{activityData.github.commits.map(([message, repo, time]) => <div className="activity-row" key={message}><LuBox className="shrink-0 text-[#71809b]" size={16} /><p className="min-w-0 flex-1 truncate text-sm text-[#172543]">{message}</p><span className="hidden text-sm text-[#71809b] sm:block">{repo}</span><time className="text-right text-xs text-[#71809b]">{time}</time></div>)}</div></div>;
}

function LeetCodeActivity() {
  return <div className="activity-preview"><p className="activity-preview-title">Last 5 solved problems</p><div>{activityData.leetcode.solved.map(([title, difficulty, time, tone]) => <div className="activity-row" key={title}><span className={`activity-dot activity-${tone}`} /><p className="min-w-0 flex-1 truncate text-sm text-[#172543]">{title}</p><span className={`activity-difficulty activity-${tone}`}>{difficulty}</span><time className="text-right text-xs text-[#71809b]">{time}</time></div>)}</div></div>;
}

function SocialActivity({ type }) {
  const post = activityData[type].latestPost;
  const Icon = type === 'x' ? FaXTwitter : FaLinkedin;
  return <div className="activity-preview"><p className="activity-preview-title">Latest post</p><article className="activity-post"><div className="flex items-start gap-3"><div className={`activity-avatar ${type === 'linkedin' ? 'bg-[#172543]' : 'bg-[#111827]'}`}><span>AV</span></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm"><strong className="text-[#101d39]">{post.name}</strong>{type === 'x' && <span className="text-[#71809b]">{post.handle}</span>}<span className="text-[#71809b]">· {post.time}</span></div><p className="mt-3 whitespace-pre-line text-sm leading-5 text-[#283754]">{post.body}</p></div><Icon className="hidden shrink-0 text-[#71809b] sm:block" size={15} /></div><div className="mt-5 flex gap-8 text-xs text-[#71809b]">{post.metrics.map(([label, value], index) => { const MetricIcon = type === 'linkedin' ? [LuThumbsUp, LuMessageCircle, LuRepeat2][index] : [LuMessageCircle, LuRepeat2, LuHeart][index]; return <span className="inline-flex items-center gap-2" key={label}><MetricIcon size={15} />{value}</span>; })}</div></article></div>;
}

function YoutubeActivity() {
  return <div className="activity-preview activity-video-preview"><div className="mb-3 flex items-center justify-between"><p className="activity-preview-title">Latest videos</p><a href="#" className="text-xs text-[#71809b] hover:text-[#101d39]">View All <span className="ml-1">→</span></a></div><div className="grid gap-4 sm:grid-cols-3">{activityData.youtube.videos.map((video) => <article className="activity-video group" key={video.title}><div className="relative aspect-[1.7] overflow-hidden rounded-md bg-[#172543]"><img src={video.image} alt="" className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105" /><span className="absolute bottom-1 right-1 rounded bg-[#101d39] px-1.5 py-0.5 text-[10px] text-white">{video.duration}</span></div><h3 className="mt-2 line-clamp-2 text-xs font-medium leading-4 text-[#172543]">{video.title}</h3><p className="mt-1 text-[11px] text-[#71809b]">{video.views} · {video.time}</p></article>)}</div></div>;
}

function ActivitySection({ type, children }) {
  return <section className="activity-section"><PlatformIntro type={type} />{children}</section>;
}

const ActivityPage = () => <main className="activity-page min-h-screen bg-white text-[#101d39]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
  <div className="mx-auto max-w-5xl px-6 pb-10 pt-28 md:px-12 lg:px-20">
    <section className="mb-10 flex flex-col justify-between gap-8 md:mb-14 md:flex-row md:items-start"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#71809b]">Activity</p><h1 className="text-4xl font-light tracking-tight text-[#101d39] md:text-5xl">Across the <span className="text-[#9aa5ba]">platforms.</span></h1><p className="mt-3 text-base text-[#71809b]">Code, build, share, learn — a snapshot of my recent activity.</p></div><div className="w-fit rounded-2xl border border-[#edf0f5] px-4 py-3 text-xs text-[#71809b] shadow-[0_12px_32px_-28px_rgba(16,29,57,0.5)]"><p className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />Live Updates</p><p className="mt-1 pl-[18px]">Wed, 9 Sep 2025 · 6:44 PM</p></div></section>
    <div className="space-y-5"><ActivitySection type="github"><GithubActivity /></ActivitySection><ActivitySection type="leetcode"><LeetCodeActivity /></ActivitySection><ActivitySection type="x"><SocialActivity type="x" /></ActivitySection><ActivitySection type="linkedin"><SocialActivity type="linkedin" /></ActivitySection><ActivitySection type="youtube"><YoutubeActivity /></ActivitySection></div>
    <footer className="mt-12 flex flex-col gap-6 border-t border-[#edf0f5] py-8 text-sm md:flex-row md:items-center md:justify-between"><span className="text-lg font-semibold text-[#101d39]">Alok.</span><nav className="flex flex-wrap gap-x-8 gap-y-3 text-[#71809b]"><a href="/activity">Activity</a><a href="/work">Work</a><a href="/about">About</a><a href="/#contact">Contact</a></nav><a href="http://alok.company/" target="_blank" rel="noreferrer" className="w-fit rounded-full bg-[#101d39] px-5 py-2.5 text-white transition hover:bg-[#1b2e50]">Hire Studio</a></footer>
  </div>
</main>;

export default ActivityPage;
