"use client";

import { useMemo, useState } from "react";
import { milestones, progressIndicators } from "@/data/dashboard";
import clsx from "clsx";

const filters = [
  { id: "all", label: "All milestones" },
  { id: "positive", label: "Positive" },
  { id: "challenge", label: "Challenges" },
];

export const ProgressTimeline = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredMilestones = useMemo(() => {
    if (activeFilter === "all") return milestones;
    return milestones.filter((mile) => mile.type === activeFilter);
  }, [activeFilter]);

  return (
    <section
      aria-labelledby="advancements-heading"
      className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_1fr]">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2
                id="advancements-heading"
                className="text-2xl font-semibold text-slate-900"
              >
                Advancements & Progress Timeline
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                Track key inflection points from strategy to prototype delivery.
                Toggle the view to focus on success indicators or operational
                challenges requiring mitigation.
              </p>
            </div>
            <div className="flex rounded-full border border-slate-300 bg-white p-1">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={clsx(
                    "rounded-full px-3 py-1.5 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                    activeFilter === filter.id
                      ? "bg-slate-900 text-white"
                      : "text-slate-500 hover:text-slate-700",
                  )}
                  aria-pressed={activeFilter === filter.id}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <ol className="mt-8 space-y-6">
            {filteredMilestones.map((milestone, index) => (
              <li key={`${milestone.year}-${milestone.title}`} className="relative pl-10">
                <span
                  className={clsx(
                    "absolute left-2 top-2 h-3 w-3 rounded-full",
                    milestone.type === "positive"
                      ? "bg-emerald-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                      : "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]",
                  )}
                  aria-hidden
                />
                {index !== filteredMilestones.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-3.5 top-6 block h-full w-px bg-slate-200"
                  />
                )}
                <article className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4">
                  <header className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-900">
                      {milestone.year}
                    </p>
                    <span
                      className={clsx(
                        "rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
                        milestone.type === "positive"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700",
                      )}
                    >
                      {milestone.type === "positive" ? "Progress" : "Challenge"}
                    </span>
                  </header>
                  <h3 className="mt-2 text-sm font-semibold text-slate-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{milestone.detail}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
            Major project completion status
          </h3>
          <ul className="space-y-4">
            {progressIndicators.map((item) => (
              <li
                key={item.project}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {item.project}
                    </h4>
                    <p className="text-xs text-slate-500">{item.owner}</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    {Math.round(item.completion * 100)}%
                  </span>
                </div>
                <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-white">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 transition-all"
                    style={{ width: `${Math.round(item.completion * 100)}%` }}
                    role="progressbar"
                    aria-valuenow={Math.round(item.completion * 100)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${item.project} completion`}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500">
            Completion insight blends construction progress, equipment
            commissioning, and operational readiness benchmarks.
          </p>
        </div>
      </div>
    </section>
  );
};
