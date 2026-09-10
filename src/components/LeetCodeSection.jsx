import React, { useEffect, useMemo, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { LuCalendarDays, LuClock3, LuFlame, LuRotateCw } from "react-icons/lu";
import { ActivityCalendar } from "react-activity-calendar";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { fetchLeetCodeActivity } from "../data/leetcode";

const COLORS = { Easy: "#22c55e", Medium: "#f59e0b", Hard: "#ef4444" };

function parseCalendar(calendar) {
  if (!calendar) return {};

  if (typeof calendar === "object") return calendar;

  if (typeof calendar === "string") {
    try {
      const parsed = JSON.parse(calendar);
      if (parsed && typeof parsed === "object") {
        return parsed;
      }
    } catch (error) {
      console.error("Failed to parse LeetCode submissionCalendar:", error);
    }
  }

  return {};
}

function getDateKeyFromTimestamp(timestamp) {
  const date = new Date(Number(timestamp) * 1000);

  if (Number.isNaN(date.getTime())) return null;

  return date.toISOString().slice(0, 10);
}

function getLevel(count, maxCount) {
  if (count <= 0 || maxCount <= 0) {
    return 0;
  }

  const ratio = count / maxCount;

  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;

  return 4;
}

function buildActivityData(calendar) {
  const parsedCalendar = parseCalendar(calendar);
  const entries = Object.entries(parsedCalendar)
    .map(([timestamp, count]) => {
      const numericTimestamp = Number(timestamp);
      const numericCount = Number(count);

      return {
        timestamp: numericTimestamp,
        count: Number.isFinite(numericCount) ? numericCount : 0,
      };
    })
    .filter(
      ({ timestamp }) => Number.isFinite(timestamp) && timestamp > 0,
    );

  if (!entries.length) return [];

  const submissionMap = new Map();
  for (const { timestamp, count } of entries) {
    const dateKey = getDateKeyFromTimestamp(timestamp);
    if (!dateKey) continue;

    const previousCount = submissionMap.get(dateKey) || 0;
    submissionMap.set(dateKey, previousCount + count);
  }

  if (!submissionMap.size) return [];

  const startDate = new Date(Date.UTC(2026, 0, 1));
  const submissionDates = [...submissionMap.keys()].sort();
  const endDate = new Date(`${submissionDates.at(-1)}T00:00:00Z`);

  if (endDate < startDate) {
    return [];
  }

  const displayedCounts = [...submissionMap].filter(([date]) => {
    const currentDate = new Date(`${date}T00:00:00Z`);
    return currentDate >= startDate && currentDate <= endDate;
  });
  const maxCount = Math.max(...displayedCounts.map(([, count]) => count));

  const activityData = [];
  const cursor = new Date(startDate);

  while (cursor <= endDate) {
    const date = cursor.toISOString().slice(0, 10);
    const count = submissionMap.get(date) || 0;

    activityData.push({
      date,
      count,
      level: getLevel(count, maxCount),
    });

    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  activityData.sort((a, b) => a.date.localeCompare(b.date));

  return activityData;
}

function formatDate(timestamp) {
  const date = new Date(Number(timestamp) * 1000);
  if (Number.isNaN(date.getTime())) return "Date unavailable";
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function statValue(stats, difficulty) {
  return stats.find((item) => item.difficulty === difficulty)?.count ?? 0;
}

function DifficultyChart({ stats }) {
  const data = ["Easy", "Medium", "Hard"].map((difficulty) => ({
    name: difficulty,
    value: statValue(stats, difficulty),
  }));
  const total = statValue(stats, "All");
  return (
    <div className="leetcode-chart-block">
      <div className="leetcode-chart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="68%"
              outerRadius="92%"
              paddingAngle={3}
              stroke="none"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={COLORS[item.name]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="leetcode-chart-center">
          <strong>{total}</strong>
          <span>Solved</span>
        </div>
      </div>
      <div className="leetcode-legend">
        {data.map((item) => (
          <div key={item.name}>
            <span style={{ backgroundColor: COLORS[item.name] }} />
            {item.name}
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubmissionCalendar({ userCalendar }) {
  const activityData = useMemo(
    () => buildActivityData(userCalendar?.submissionCalendar),
    [userCalendar?.submissionCalendar],
  );
  const activityYears = [
    ...new Set(activityData.map(({ date }) => date.slice(0, 4))),
  ];
  return (
    <div className="leetcode-calendar-block">
      <div className="leetcode-calendar-heading">
        <div>
          <p className="activity-preview-title">Submission activity</p>
          <p className="text-xs text-[#71809b]">
            A view of the days I kept showing up.
          </p>
        </div>
        <div className="leetcode-calendar-meta">
          <span>
            <LuFlame />
            {userCalendar?.streak ?? 0} day streak
          </span>
          <span>
            <LuCalendarDays />
            {userCalendar?.totalActiveDays ?? 0} active days
          </span>
        </div>
      </div>
      {activityData.length ? (
        <div className="leetcode-calendar">
          <ActivityCalendar
            data={activityData}
            colorScheme="light"
            fontSize={10}
            blockSize={11}
            blockMargin={3}
            showTotalCount={false}
            showWeekdayLabels
            theme={{ light: ["#f0f2f6", "#14532d"] }}
          />
        </div>
      ) : (
        <p className="leetcode-empty">
          No submission calendar data is available yet.
        </p>
      )}
      <div className="leetcode-calendar-footer">
        <span>
          Active Years:{" "}
          {activityYears.join(", ") || "—"}
        </span>
      </div>
    </div>
  );
}

function RecentSubmissions({ submissions }) {
  const latest = Array.isArray(submissions) ? submissions.slice(0, 5) : [];
  return (
    <div className="leetcode-recent">
      <p className="activity-preview-title">Recent Accepted Submissions</p>
      {latest.length ? (
        latest.map((submission) => (
          <a
            className="leetcode-submission"
            href={`https://leetcode.com/problems/${submission.titleSlug}/`}
            target="_blank"
            rel="noreferrer"
            key={submission.id}
          >
            <div>
              <strong>{submission.title}</strong>
              <span className="leetcode-language">{submission.lang}</span>
            </div>
            <time>
              <LuClock3 />
              {formatDate(submission.timestamp)}
            </time>
          </a>
        ))
      ) : (
        <p className="leetcode-empty">No recent accepted submissions found.</p>
      )}
    </div>
  );
}

export default function LeetCodeSection() {
  const [payload, setPayload] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetchLeetCodeActivity(controller.signal)
      .then((data) => {
        setPayload(data);
        setStatus("ready");
      })
      .catch((requestError) => {
        if (requestError.name !== "AbortError") {
          setError(requestError.message);
          setStatus("error");
        }
      });
    return () => controller.abort();
  }, []);

  const matchedUser = payload?.matchedUser;
  const stats = matchedUser?.submitStats?.acSubmissionNum || [];
  const userCalendar = matchedUser?.userCalendar || {};

  return (
    <section className="activity-section leetcode-section">
      <div className="leetcode-section-header">
        <div className="flex items-start gap-4">
          <div className="activity-platform-icon text-[#f5a623]">
            <SiLeetcode aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xl font-medium tracking-tight text-[#101d39]">
              LeetCode
            </h2>
            <p className="mt-1 text-sm text-[#71809b]">
              Keep solving, keep improving.
            </p>
            <p className="mt-3 font-mono text-xs text-[#9aa5ba]">
              @{matchedUser?.username || "DyIhE889d2"}
            </p>
          </div>
        </div>
        <a
          className="leetcode-external-link"
          href="https://leetcode.com/u/DyIhE889d2/"
          target="_blank"
          rel="noreferrer"
        >
          View on LeetCode <FaExternalLinkAlt size={10} />
        </a>
      </div>
      {status === "loading" && (
        <div className="leetcode-state">
          <LuRotateCw className="animate-spin" />
          Loading LeetCode activity…
        </div>
      )}
      {status === "error" && (
        <div className="leetcode-state leetcode-error">
          Unable to load LeetCode activity. {error}
        </div>
      )}
      {status === "ready" && (
        <>
          <div className="leetcode-stats">
            {[
              ["All", "Total Solved", "total"],
              ["Easy", "Easy", "easy"],
              ["Medium", "Medium", "medium"],
              ["Hard", "Hard", "hard"],
            ].map(([key, label, tone]) => (
              <div key={key}>
                <strong className={`leetcode-${tone}`}>
                  {statValue(stats, key)}
                </strong>
                <span>{label}</span>
              </div>
            ))}
            <div>
              <strong className="leetcode-streak">
                {userCalendar.streak ?? 0}
              </strong>
              <span>Current Streak</span>
            </div>
            <div>
              <strong className="leetcode-days">
                {userCalendar.totalActiveDays ?? 0}
              </strong>
              <span>Active Days</span>
            </div>
          </div>
          <div className="leetcode-analysis">
            <DifficultyChart stats={stats} />
            <SubmissionCalendar userCalendar={userCalendar} />
          </div>
          <RecentSubmissions submissions={payload?.recentAcSubmissionList} />
        </>
      )}
    </section>
  );
}
