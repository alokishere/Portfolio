import React, { useEffect, useMemo, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { LuBox, LuExternalLink, LuLoaderCircle } from "react-icons/lu";
import PlatformSection from "./PlatformSection";

const GITHUB_USERNAME = "alokishere";
const GITHUB_PROFILE_ENDPOINT = `https://api.github.com/users/${GITHUB_USERNAME}`;
const GITHUB_EVENTS_ENDPOINT = `https://api.github.com/users/${GITHUB_USERNAME}/events/public`;

function createDummyContributionData() {
  const today = new Date();
  const contributions = [];

  for (let daysAgo = 364; daysAgo >= 0; daysAgo -= 1) {
    const date = new Date(today);
    date.setHours(0, 0, 0, 0);
    date.setDate(today.getDate() - daysAgo);

    // Deterministic placeholder values so the calendar stays stable between renders.
    const seed = (date.getDate() * 17 + (date.getMonth() + 1) * 13 + date.getFullYear()) % 19;
    const level = seed < 9 ? 0 : seed < 13 ? 1 : seed < 16 ? 2 : seed < 18 ? 3 : 4;

    contributions.push({
      date: date.toISOString().slice(0, 10),
      count: level === 0 ? 0 : level * 2,
      level,
    });
  }

  return contributions;
}

function formatRelativeTime(dateValue) {
  const ageInSeconds = Math.max(0, (Date.now() - new Date(dateValue).getTime()) / 1000);
  if (ageInSeconds < 60) return "just now";
  if (ageInSeconds < 3600) return `${Math.floor(ageInSeconds / 60)}m ago`;
  if (ageInSeconds < 86400) return `${Math.floor(ageInSeconds / 3600)}h ago`;
  return `${Math.floor(ageInSeconds / 86400)}d ago`;
}

function getCommitEvents(events) {
  return events
    .filter((event) => event.type === "PushEvent" && event.payload?.commits?.length)
    .flatMap((event) => event.payload.commits.map((commit) => ({
      message: commit.message.split("\n")[0],
      repository: event.repo?.name?.replace(`${GITHUB_USERNAME}/`, "") || "GitHub",
      time: formatRelativeTime(event.created_at),
      url: commit.sha
        ? `https://github.com/${event.repo.name}/commit/${commit.sha}`
        : `https://github.com/${event.repo.name}`,
    })))
    .slice(0, 5);
}

export default function GithubSection() {
  const [profile, setProfile] = useState(null);
  const [commits, setCommits] = useState([]);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const contributionData = useMemo(() => createDummyContributionData(), []);

  useEffect(() => {
    const controller = new AbortController();

    Promise.all([
      fetch(GITHUB_PROFILE_ENDPOINT, { signal: controller.signal }),
      fetch(GITHUB_EVENTS_ENDPOINT, { signal: controller.signal }),
    ])
      .then(async ([profileResponse, eventsResponse]) => {
        if (!profileResponse.ok) {
          throw new Error(`GitHub profile request failed (${profileResponse.status})`);
        }

        const githubProfile = await profileResponse.json();
        const githubEvents = eventsResponse.ok ? await eventsResponse.json() : [];

        setProfile(githubProfile);
        setCommits(getCommitEvents(githubEvents));
        setStatus("ready");
      })
      .catch((requestError) => {
        if (requestError.name !== "AbortError") {
          setErrorMessage(requestError.message);
          setStatus("error");
        }
      });

    return () => controller.abort();
  }, []);

  const githubStats = profile
    ? [
        [profile.public_repos, "Repositories"],
        [profile.followers, "Followers"],
        [profile.following, "Following"],
        [profile.public_gists, "Public Gists"],
      ]
    : undefined;

  return (
    <PlatformSection type="github" stats={githubStats}>
      <div className="activity-preview">
        {status === "loading" && (
          <div className="flex min-h-40 items-center justify-center gap-2 text-sm text-[#71809b]">
            <LuLoaderCircle className="animate-spin" size={16} /> Loading GitHub activity…
          </div>
        )}

        {status === "error" && (
          <div className="flex min-h-40 items-center justify-center text-sm text-red-700">
            Unable to load GitHub activity. {errorMessage}
          </div>
        )}

        {status === "ready" && (
          <>
            <div className="mb-5 flex items-start gap-3">
              <img className="h-12 w-12 rounded-full" src={profile.avatar_url} alt={`${profile.name || profile.login} avatar`} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h3 className="font-medium text-[#101d39]">{profile.name || profile.login}</h3>
                  <span className="text-sm text-[#71809b]">@{profile.login}</span>
                </div>
                <p className="mt-1 text-xs leading-5 text-[#71809b]">{profile.bio || "Building in public on GitHub."}</p>
              </div>
              <a className="text-[#71809b] hover:text-[#101d39]" href={profile.html_url} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
                <LuExternalLink size={16} />
              </a>
            </div>

            <p className="activity-preview-title">Latest public commits</p>
            <div>
              {commits.length ? commits.map((commit) => (
                <a className="activity-row" href={commit.url} target="_blank" rel="noreferrer" key={`${commit.repository}-${commit.message}-${commit.time}`}>
                  <LuBox className="shrink-0 text-[#71809b]" size={16} />
                  <p className="min-w-0 flex-1 truncate text-sm text-[#172543]">{commit.message}</p>
                  <span className="hidden text-sm text-[#71809b] sm:block">{commit.repository}</span>
                  <time className="text-right text-xs text-[#71809b]">{commit.time}</time>
                </a>
              )) : <p className="py-3 text-sm text-[#71809b]">No recent public commits found.</p>}
            </div>

            <div className="mt-6 border-t border-[#edf0f5] pt-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="activity-preview-title">Contribution activity</p>
                  <p className="text-xs text-[#71809b]">Placeholder data for now — real contributions can be connected later.</p>
                </div>
                <span className="whitespace-nowrap text-xs text-[#71809b]">Last year</span>
              </div>
              <div className="mt-3 min-w-0 overflow-hidden">
                <ActivityCalendar
                  data={contributionData}
                  colorScheme="light"
                  fontSize={10}
                  blockSize={11}
                  blockMargin={3}
                  showTotalCount={false}
                  showWeekdayLabels
                  theme={{ light: ["#f0f2f6", "#dbeafe", "#93c5fd", "#3b82f6", "#1d4ed8"] }}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </PlatformSection>
  );
}
