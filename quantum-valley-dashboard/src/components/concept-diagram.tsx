"use client";

import type { FC } from "react";
import { ecosystemConcept } from "@/data/dashboard";

export const ConceptDiagram: FC = () => {
  return (
    <section
      aria-labelledby="concept-heading"
      className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
        <div className="space-y-4">
          <h2
            id="concept-heading"
            className="text-balance text-2xl font-semibold text-slate-900"
          >
            What is Quantum Valley – Amaravati?
          </h2>
          <p className="text-pretty text-sm text-slate-600">
            Quantum Valley orchestrates national research excellence with
            industry acceleration, enabling India&apos;s quantum leap. The
            mission is to establish Amaravati as the sovereign hub for quantum
            computing, communications, and sensing by aligning shared
            infrastructure, policy reform, and deep-tech commercialization.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {ecosystemConcept.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-2 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <figure
          aria-label="Conceptual diagram of Quantum Valley components"
          className="relative flex items-center justify-center rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6"
        >
          <svg
            role="img"
            aria-labelledby="concept-diagram-title"
            viewBox="0 0 400 320"
            className="h-full w-full max-w-[360px]"
          >
            <title id="concept-diagram-title">
              Diagram showing core pillars of Quantum Valley – Amaravati
            </title>
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.15" />
                <stop offset="70%" stopColor="#14b8a6" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="320" rx="24" fill="url(#glow)" />
            <circle cx="200" cy="160" r="48" fill="#0f172a" opacity="0.9" />
            <text
              x="200"
              y="160"
              textAnchor="middle"
              className="fill-white text-[18px] font-semibold"
            >
              Quantum
            </text>
            <text
              x="200"
              y="180"
              textAnchor="middle"
              className="fill-sky-200 text-[14px]"
            >
              Valley HQ
            </text>

            {[
              { label: "Research", x: 80, y: 70 },
              { label: "Industry", x: 320, y: 85 },
              { label: "Government", x: 330, y: 220 },
              { label: "Innovation Infra", x: 80, y: 245 },
            ].map((node) => (
              <g key={node.label}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={30}
                  fill="#0ea5e9"
                  opacity={0.18}
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={24}
                  fill="#fff"
                  stroke="#0ea5e9"
                  strokeWidth={1.5}
                />
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  className="fill-slate-800 text-[12px] font-medium"
                >
                  {node.label}
                </text>
                <line
                  x1={node.x}
                  y1={node.y}
                  x2={200}
                  y2={160}
                  stroke="#0369a1"
                  strokeWidth={2}
                  strokeDasharray="6 4"
                  opacity={0.4}
                />
              </g>
            ))}

            <g>
              <rect
                x={140}
                y={30}
                width={120}
                height={32}
                rx={16}
                fill="#0ea5e9"
                opacity={0.12}
              />
              <text
                x={200}
                y={50}
                textAnchor="middle"
                className="fill-slate-700 text-[11px]"
              >
                Mission: Sovereign Quantum Leadership
              </text>
            </g>
            <g>
              <rect
                x={115}
                y={265}
                width={170}
                height={30}
                rx={16}
                fill="#14b8a6"
                opacity={0.2}
              />
              <text
                x={200}
                y={284}
                textAnchor="middle"
                className="fill-slate-700 text-[11px]"
              >
                Vision: Global top-5 quantum innovation hub by 2030
              </text>
            </g>
          </svg>
        </figure>
      </div>
    </section>
  );
};
