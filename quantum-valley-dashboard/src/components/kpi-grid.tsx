"use client";

import type { FC } from "react";
import { kpis } from "@/data/dashboard";
import clsx from "clsx";

const accentColors = [
  "from-sky-500/20 via-sky-500/10 to-slate-900/0 border-sky-500/30",
  "from-emerald-500/20 via-emerald-500/10 to-slate-900/0 border-emerald-500/30",
  "from-indigo-500/20 via-indigo-500/10 to-slate-900/0 border-indigo-500/30",
  "from-cyan-500/20 via-cyan-500/10 to-slate-900/0 border-cyan-500/30",
];

export const KpiGrid: FC = () => {
  return (
    <section aria-labelledby="kpi-heading" className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h2
          id="kpi-heading"
          className="text-balance text-2xl font-semibold text-slate-900"
        >
          Executive Summary
        </h2>
        <p className="max-w-3xl text-pretty text-sm text-slate-600">
          Quantum Valley – Amaravati activates a nationally coordinated quantum
          innovation corridor, combining deep science, industry co-creation, and
          sovereign infrastructure. Key performance indicators below capture
          momentum across investments, jobs, and research outcomes.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi, index) => (
          <article
            key={kpi.title}
            className={clsx(
              "group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition focus-within:ring-2 focus-within:ring-sky-500 focus:outline-none",
              "before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:opacity-0 before:transition before:duration-300 group-hover:before:opacity-100",
              accentColors[index % accentColors.length],
            )}
            tabIndex={0}
          >
            <div className="relative z-10 flex h-full flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-900">
                {kpi.title}
              </h3>
              <p className="text-3xl font-bold text-slate-900">{kpi.value}</p>
              <span className="w-fit rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-700">
                {kpi.delta}
              </span>
              <p className="mt-auto text-sm text-slate-600">{kpi.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
