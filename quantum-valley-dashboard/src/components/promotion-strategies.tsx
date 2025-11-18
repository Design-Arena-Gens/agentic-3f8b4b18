"use client";

import type { FC } from "react";
import { promotionStrategies } from "@/data/dashboard";
import { MegaphoneIcon, UsersIcon, GlobeAltIcon, SparklesIcon } from "@heroicons/react/24/outline";

const icons = [MegaphoneIcon, UsersIcon, GlobeAltIcon, SparklesIcon];

export const PromotionStrategies: FC = () => {
  return (
    <section
      aria-labelledby="promotion-heading"
      className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <header className="space-y-3">
        <h2
          id="promotion-heading"
          className="text-2xl font-semibold text-slate-900"
        >
          Government Promotion Strategies
        </h2>
        <p className="max-w-3xl text-sm text-slate-600">
          Targeted promotion campaigns attract global expertise, anchor
          investors, and strategic partners. Initiatives span fellowships,
          international diplomacy, and digital outreach to position Amaravati as
          a premier quantum destination.
        </p>
      </header>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {promotionStrategies.map((strategy, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <article
              key={strategy.title}
              className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-sky-100 p-2 text-sky-600">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  {strategy.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600">{strategy.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
