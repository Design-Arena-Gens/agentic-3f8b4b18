"use client";

import type { FC } from "react";
import { quantumComputerPlan } from "@/data/dashboard";

export const QuantumComputerPlan: FC = () => {
  return (
    <section
      aria-labelledby="quantum-computer-heading"
      className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1.3fr)_1fr]">
        <div className="space-y-5">
          <header>
            <h2
              id="quantum-computer-heading"
              className="text-2xl font-semibold text-slate-900"
            >
              Quantum Computer Acquisition & Design Roadmap
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              A phased roadmap blends procurement, co-design, and indigenous
              subsystem development to deliver a scalable hybrid quantum system.
              Each phase integrates fabrication, control stack optimization, and
              applications co-development with strategic sectors.
            </p>
          </header>
          <ol className="space-y-4">
            {quantumComputerPlan.roadmap.map((stage) => (
              <li
                key={stage.phase}
                className="rounded-3xl border border-slate-200 bg-gradient-to-r from-sky-500/10 via-emerald-500/5 to-transparent p-4"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {stage.phase}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{stage.focus}</p>
              </li>
            ))}
          </ol>
          <div className="rounded-3xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Architectural Overview
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              The hybrid system layers superconducting qubit arrays with
              photonic interconnects, orchestrated by cryo-CMOS control planes
              and modular dilution refrigeration bays. Quantum error mitigation
              pipelines feed into application-specific runtime environments.
            </p>
            <div
              role="img"
              aria-label="Diagram of hybrid quantum computing stack"
              className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="grid gap-3 text-xs font-semibold uppercase tracking-wide text-slate-600 sm:grid-cols-3">
                <div className="rounded-xl bg-white p-3 shadow">
                  <p className="text-slate-900">Application Layer</p>
                  <p className="mt-1 text-[11px] normal-case text-slate-500">
                    Secure cloud access, quantum workflow orchestrator, domain accelerators
                  </p>
                </div>
                <div className="rounded-xl bg-white p-3 shadow">
                  <p className="text-slate-900">Control & Middleware</p>
                  <p className="mt-1 text-[11px] normal-case text-slate-500">
                    Cryo-CMOS multiplexing, FPGA pulse shaping, adaptive error mitigation
                  </p>
                </div>
                <div className="rounded-xl bg-white p-3 shadow">
                  <p className="text-slate-900">Quantum Hardware</p>
                  <p className="mt-1 text-[11px] normal-case text-slate-500">
                    Superconducting processor tiles with photonic interlinks and tunable couplers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
            Technical Specifications
          </h3>
          <dl className="space-y-3">
            {quantumComputerPlan.specifications.map((spec) => (
              <div
                key={spec.key}
                className="rounded-3xl border border-slate-200 bg-slate-50/60 p-4"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {spec.key}
                </dt>
                <dd className="mt-1 text-sm text-slate-800">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
};
