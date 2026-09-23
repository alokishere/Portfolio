import React from "react";
import ActivityFooter from "./section/ActivityFooter";
import ActivityHeader from "./section/ActivityHeader";
import GithubSection from "./section/GithubSection";
import LeetCodeSection from "./section/LeetCodeSection";
import SocialSection from "./section/SocialSection";
import YoutubeSection from "./section/YoutubeSection";

const ActivityPage = () => (
  <main className="activity-page min-h-screen bg-white text-[#101d39]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
    <div className="mx-auto max-w-5xl px-6 pb-10 pt-28 md:px-12 lg:px-20">
      <ActivityHeader />
      <div className="space-y-5">
        <GithubSection />
        <LeetCodeSection />
        <SocialSection type="x" />
        <SocialSection type="linkedin" />
        <YoutubeSection />
      </div>
      <ActivityFooter />
    </div>
  </main>
);

export default ActivityPage;
