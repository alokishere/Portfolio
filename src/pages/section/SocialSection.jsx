import React from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  LuHeart,
  LuMessageCircle,
  LuRepeat2,
  LuThumbsUp,
} from "react-icons/lu";
import { activityData } from "../../data/activityData";
import PlatformSection from "./PlatformSection";

export default function SocialSection({ type }) {
  const post = activityData[type].latestPost;
  const Icon = type === "x" ? FaXTwitter : FaLinkedin;
  return (
    <PlatformSection type={type}>
      <div className="activity-preview">
        <p className="activity-preview-title">Latest post</p>
        <article className="activity-post">
          <div className="flex items-start gap-3">
            <div
              className={`activity-avatar ${type === "linkedin" ? "bg-[#172543]" : "bg-[#111827]"}`}
            >
              <span>AV</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
                <strong className="text-[#101d39]">{post.name}</strong>
                {type === "x" && (
                  <span className="text-[#71809b]">{post.handle}</span>
                )}
                <span className="text-[#71809b]">· {post.time}</span>
              </div>
              <p className="mt-3 whitespace-pre-line text-sm leading-5 text-[#283754]">
                {post.body}
              </p>
            </div>
            <Icon
              className="hidden shrink-0 text-[#71809b] sm:block"
              size={15}
            />
          </div>
          <div className="mt-5 flex gap-8 text-xs text-[#71809b]">
            {post.metrics.map(([label, value], index) => {
              const MetricIcon =
                type === "linkedin"
                  ? [LuThumbsUp, LuMessageCircle, LuRepeat2][index]
                  : [LuMessageCircle, LuRepeat2, LuHeart][index];
              return (
                <span className="inline-flex items-center gap-2" key={label}>
                  <MetricIcon size={15} />
                  {value}
                </span>
              );
            })}
          </div>
        </article>
      </div>
    </PlatformSection>
  );
}
