import React, { useEffect, useMemo, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { LuCalendarDays, LuClock3, LuFlame, LuRotateCw } from "react-icons/lu";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { fetchLeetCodeActivity } from "../data/leetcode";

const COLORS = { Easy: "#22c55e", Medium: "#f59e0b", Hard: "#ef4444" };
const EMPTY_CALENDAR = { cells: [], months: [], years: [] };

function parseCalendar(calendar) {
  if (!calendar) return {};
  if (typeof calendar === "object") return calendar;
  try {
    return JSON.parse(calendar);
  } catch {
    return {};
  }
}

function calendarDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function buildCalendar(calendar, activeYears = []) {
  const entries = Object.entries(calendar).map(([timestamp, count]) => ({
    date: new Date(Number(timestamp) * 1000),
    count: Number(count) || 0,
  }));
  const years = activeYears.length
    ? activeYears
    : [...new Set(entries.map(({ date }) => date.getFullYear()))].sort();
  if (!years.length) return EMPTY_CALENDAR;

  const start = new Date(Math.min(...years), 0, 1);
  start.setDate(start.getDate() - start.getDay());
  const end = new Date(Math.max(...years), 11, 31);
  end.setDate(end.getDate() + (6 - end.getDay()));
  const lookup = new Map(
    entries.map(({ date, count }) => [calendarDateKey(date), count]),
  );
  const cells = [];
  const months = [];
  const cursor = new Date(start);
  let column = 0;
  while (cursor <= end) {
    for (let row = 0; row < 7; row += 1) {
      const date = new Date(cursor);
      date.setDate(cursor.getDate() + row);
      cells.push({
        date,
        count: lookup.get(calendarDateKey(date)) || 0,
        row,
        column,
      });
    }
    if (cursor.getDate() <= 7)
      months.push({
        label: cursor.toLocaleString("en-US", { month: "short" }),
        column,
      });
    cursor.setDate(cursor.getDate() + 7);
    column += 1;
  }
  return { cells, months, years };
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
  const parsed = parseCalendar(userCalendar?.submissionCalendar);
  const calendar = useMemo(
    () => buildCalendar(parsed, userCalendar?.activeYears || []),
    [parsed, userCalendar?.activeYears],
  );
  const maxCount = Math.max(1, ...calendar.cells.map((cell) => cell.count));
  const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
      {calendar.cells.length ? (
        <div className="leetcode-calendar-scroll">
          <div className="leetcode-calendar">
            <div className="leetcode-weekdays">
              {weekdayLabels.map((day) => (
                <span key={day}>{day.slice(0, 2)}</span>
              ))}
            </div>
            <div className="leetcode-grid-wrap">
              <div className="leetcode-months">
                {calendar.months.map((month) => (
                  <span
                    key={`${month.label}-${month.column}`}
                    style={{ left: `${month.column * 15}px` }}
                  >
                    {month.label}
                  </span>
                ))}
              </div>
              <div className="leetcode-grid">
                {calendar.cells.map((cell) => {
                  const intensity = cell.count
                    ? Math.max(1, Math.ceil((cell.count / maxCount) * 4))
                    : 0;
                  return (
                    <span
                      key={cell.date.toISOString()}
                      className={`leetcode-cell level-${intensity}`}
                      title={`${cell.count} submission${cell.count === 1 ? "" : "s"} · ${cell.date.toLocaleDateString()}`}
                      style={{
                        gridRow: cell.row + 1,
                        gridColumn: cell.column + 1,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="leetcode-empty">
          No submission calendar data is available yet.
        </p>
      )}
      <div className="leetcode-calendar-footer">
        <span>
          Active Years:{" "}
          {(userCalendar?.activeYears || calendar.years).join(", ") || "—"}
        </span>
        <span className="leetcode-scale">
          Less <i className="level-0" />
          <i className="level-1" />
          <i className="level-2" />
          <i className="level-3" />
          <i className="level-4" /> More
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
