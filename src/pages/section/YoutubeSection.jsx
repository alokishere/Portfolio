import React from "react";
import { activityData } from "../../data/activityData";
import PlatformSection from "./PlatformSection";

export default function YoutubeSection() {
  return (
    <PlatformSection type="youtube">
      <div className="activity-preview activity-video-preview">
        <div className="mb-3 flex items-center justify-between">
          <p className="activity-preview-title">Latest videos</p>
          <a href="#" className="text-xs text-[#71809b] hover:text-[#101d39]">
            View All <span className="ml-1">→</span>
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {activityData.youtube.videos.map((video) => (
            <article className="activity-video group" key={video.title}>
              <div className="relative aspect-[1.7] overflow-hidden rounded-md bg-[#172543]">
                <img
                  src={video.image}
                  alt={`${video.title} video thumbnail`}
                  width="800"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-1 right-1 rounded bg-[#101d39] px-1.5 py-0.5 text-[10px] text-white">
                  {video.duration}
                </span>
              </div>
              <h3 className="mt-2 line-clamp-2 text-xs font-medium leading-4 text-[#172543]">
                {video.title}
              </h3>
              <p className="mt-1 text-[11px] text-[#71809b]">
                {video.views} · {video.time}
              </p>
            </article>
          ))}
        </div>
      </div>
    </PlatformSection>
  );
}
