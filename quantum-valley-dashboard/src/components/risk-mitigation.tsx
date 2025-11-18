"use client";

import type { FC } from "react";
import { risks } from "@/data/dashboard";

export const RiskMitigationSection: FC = () => {
  return (
    <section
      aria-labelledby="risks-heading"
      className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <header className="space-y-3">
        <h2
          id="risks-heading"
          className="text-2xl font-semibold text-slate-900"
        >
          Risks, Challenges & Mitigation
        </h2>
        <p className="max-w-3xl text-sm text-slate-600">
          Sustained success demands proactive risk management across talent,
          supply chains, regulations, and funding. Government task forces track
          mitigation progress with quarterly reviews and scenario planning.
        </p>
      </header>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {risks.map((entry) => (
          <article
            key={entry.risk}
            className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6"
          >
            <h3 className="text-sm font-semibold text-slate-900">
              {entry.risk}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{entry.description}</p>
            <div className="mt-4 rounded-2xl bg-white p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Mitigation Strategy
              </h4>
              <p className="mt-1 text-sm text-slate-600">{entry.mitigation}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
