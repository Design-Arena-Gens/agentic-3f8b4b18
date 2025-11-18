"use client";

import { ApplicationsMapSection } from "@/components/applications-map";
import { ComparisonSection } from "@/components/comparison-section";
import { ConceptDiagram } from "@/components/concept-diagram";
import { EcosystemNetwork } from "@/components/ecosystem-network";
import { GovernmentSupportSection } from "@/components/government-support";
import { KpiGrid } from "@/components/kpi-grid";
import { ProgressTimeline } from "@/components/progress-timeline";
import { PromotionStrategies } from "@/components/promotion-strategies";
import { QuantumComputerPlan } from "@/components/quantum-computer-plan";
import { RiskMitigationSection } from "@/components/risk-mitigation";
import { WorkforceDevelopmentSection } from "@/components/workforce-development";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <header className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                Government of Andhra Pradesh · National Quantum Mission
              </p>
              <h1 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">
                Quantum Valley – Amaravati Initiative Dashboard
              </h1>
              <p className="max-w-3xl text-pretty text-sm text-slate-600">
                Integrated view of strategic objectives, investments, talent
                development, and ecosystem impact for India&apos;s flagship
                quantum innovation hub.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#government-support-heading"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                Government Support
              </a>
              <a
                href="#applications-heading"
                className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                Explore Use Cases
              </a>
            </div>
          </div>
        </header>

        <KpiGrid />
        <ConceptDiagram />
        <ComparisonSection />
        <GovernmentSupportSection />
        <ProgressTimeline />
        <PromotionStrategies />
        <WorkforceDevelopmentSection />
        <ApplicationsMapSection />
        <QuantumComputerPlan />
        <EcosystemNetwork />
        <RiskMitigationSection />
      </main>
    </div>
  );
}
