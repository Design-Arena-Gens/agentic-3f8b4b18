"use client";

import type { FC } from "react";
import { ecosystemEdges, ecosystemLinks } from "@/data/dashboard";

export const EcosystemNetwork: FC = () => {
  return (
    <section
      aria-labelledby="ecosystem-heading"
      className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <header className="space-y-3">
        <h2
          id="ecosystem-heading"
          className="text-2xl font-semibold text-slate-900"
        >
          Ecosystem Overview
        </h2>
        <p className="max-w-3xl text-sm text-slate-600">
          Quantum Valley interlinks research labs, industries, investors, and
          policy agencies through structured governance nodes. The network map
          visualizes knowledge flow, co-investment, and talent circulation pathways.
        </p>
      </header>
      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_1fr]">
        <figure className="flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-900/95 p-6 text-white shadow-inner">
          <svg
            role="img"
            aria-labelledby="ecosystem-graph-title"
            viewBox="0 0 100 100"
            className="h-full w-full max-w-[360px]"
          >
            <title id="ecosystem-graph-title">
              Network diagram showing relationships between ecosystem stakeholders
            </title>
            <defs>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="rgba(14,165,233,0.35)" />
                <stop offset="100%" stopColor="rgba(15,23,42,0)" />
              </radialGradient>
            </defs>
            <rect width="100" height="100" fill="url(#nodeGlow)" opacity={0.8} />
            {ecosystemEdges.map(([sourceId, targetId]) => {
              const source = ecosystemLinks.find((node) => node.id === sourceId);
              const target = ecosystemLinks.find((node) => node.id === targetId);
              if (!source || !target) return null;
              return (
                <line
                  key={`${sourceId}-${targetId}`}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="rgba(148,163,184,0.7)"
                  strokeWidth={0.8}
                  strokeDasharray="1.5 1"
                />
              );
            })}
            {ecosystemLinks.map((node) => (
              <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                <circle r={8} fill="#1e40af" stroke="#38bdf8" strokeWidth={1.6} />
                <text
                  x={0}
                  y={18}
                  textAnchor="middle"
                  className="text-[8px]"
                  fill="#e0f2fe"
                >
                  {node.label}
                </text>
              </g>
            ))}
            <g transform="translate(40, 50)">
              <circle r={12} fill="#0f172a" stroke="#38bdf8" strokeWidth={2} />
              <text
                x={0}
                y={4}
                textAnchor="middle"
                className="text-[8px]"
                fill="#f8fafc"
              >
                Quantum
              </text>
              <text
                x={0}
                y={12}
                textAnchor="middle"
                className="text-[7px]"
                fill="#bae6fd"
              >
                Valley Hub
              </text>
            </g>
          </svg>
        </figure>
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            Governance integrates quarterly strategy councils, shared lab access
            protocols, and joint investment committees. Dedicated knowledge
            transfer cells ensure research outputs convert into pilot programs
            within industry and government missions.
          </p>
          <ul className="space-y-3">
            <li className="rounded-3xl border border-slate-200 bg-slate-50/60 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Innovation Commons
              </h3>
              <p className="mt-1">
                Co-located facilities for startups, global researchers, and
                public agencies foster rapid prototyping and cross-domain trials.
              </p>
            </li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50/60 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Investment Platform
              </h3>
              <p className="mt-1">
                Blended finance vehicles align sovereign funds, venture capital,
                and corporate venture arms for resilient funding.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
