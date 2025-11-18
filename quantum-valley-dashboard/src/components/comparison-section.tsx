"use client";

import { useMemo, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import {
  comparisonMetrics,
  comparativeTable,
} from "@/data/dashboard";
import clsx from "clsx";

const metricKeys = [
  { key: "funding", label: "Funding" },
  { key: "infrastructure", label: "Infrastructure" },
  { key: "talent", label: "Talent Pool" },
  { key: "research", label: "Research Output" },
  { key: "commercialization", label: "Commercialization" },
];

const palette = [
  { id: "Quantum Valley - Amaravati", stroke: "#0ea5e9", fill: "#0ea5e9" },
  { id: "Waterloo (Canada)", stroke: "#6366f1", fill: "#6366f1" },
  { id: "Delft (Netherlands)", stroke: "#10b981", fill: "#10b981" },
  { id: "Munich (Germany)", stroke: "#f59e0b", fill: "#f59e0b" },
];

export const ComparisonSection = () => {
  const [activeBenchmarks, setActiveBenchmarks] = useState(() =>
    comparisonMetrics.map((item) => item.name),
  );

  const toggleBenchmark = (name: string) => {
    setActiveBenchmarks((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  };

  const radarData = useMemo(() => {
    return metricKeys.map((metric) => {
      const entry: Record<string, number | string> = {
        metric: metric.label,
      };
      comparisonMetrics.forEach((item) => {
        entry[item.name] = item[metric.key as keyof typeof item];
      });
      return entry;
    });
  }, []);

  return (
    <section
      aria-labelledby="comparison-heading"
      className="grid gap-8 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm xl:grid-cols-[1.3fr_minmax(0,1fr)]"
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-4">
          <h2
            id="comparison-heading"
            className="text-2xl font-semibold text-slate-900"
          >
            Comparative Analysis with Global Quantum Parks
          </h2>
          <p className="text-sm text-slate-600">
            Benchmarking Quantum Valley – Amaravati against established global
            leaders highlights strengths in policy alignment and innovation
            infrastructure while surfacing focus areas for global visibility and
            fabrication scale. Use the toggles to compare specific ecosystems.
          </p>
        </div>
        <div className="flex flex-wrap gap-3" role="group" aria-label="Select benchmark parks">
          {comparisonMetrics.map((item) => {
            const paletteEntry = palette.find((p) => p.id === item.name);
            const isActive = activeBenchmarks.includes(item.name);
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => toggleBenchmark(item.name)}
                className={clsx(
                  "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                  isActive
                    ? "border-transparent bg-slate-900 text-white"
                    : "border-slate-300 bg-white text-slate-600 hover:border-slate-400",
                )}
                aria-pressed={isActive}
              >
                <span
                  aria-hidden
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: paletteEntry?.fill ?? "#0ea5e9" }}
                />
                {item.name}
              </button>
            );
          })}
        </div>
        <div className="h-[320px] w-full rounded-3xl border border-slate-200 bg-slate-50/50 p-4">
          <ResponsiveContainer>
            <RadarChart data={radarData}>
              <PolarGrid gridType="circle" stroke="#cbd5f5" strokeOpacity={0.6} />
              <PolarAngleAxis
                dataKey="metric"
                tick={{ fill: "#334155", fontSize: 12 }}
              />
              <PolarRadiusAxis
                domain={[0, 100]}
                tick={{ fill: "#94a3b8", fontSize: 10 }}
              />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                contentStyle={{
                  background: "#0f172a",
                  borderRadius: "12px",
                  border: "1px solid #1e293b",
                  color: "#f8fafc",
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: 12 }}
                formatter={(value) => (
                  <span className="text-xs text-slate-600">{value}</span>
                )}
              />
              {comparisonMetrics
                .filter((item) => activeBenchmarks.includes(item.name))
                .map((item) => {
                  const paletteEntry = palette.find((p) => p.id === item.name);
                  return (
                    <Radar
                      key={item.name}
                      name={item.name}
                      dataKey={item.name}
                      stroke={paletteEntry?.stroke ?? "#0ea5e9"}
                      fill={paletteEntry?.fill ?? "#0ea5e9"}
                      fillOpacity={0.2}
                      strokeWidth={2}
                      dot={{ r: 2 }}
                    />
                  );
                })}
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
          Strengths & gaps snapshot
        </h3>
        <div className="overflow-hidden rounded-3xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th scope="col" className="px-4 py-3 text-left font-semibold">
                  Park
                </th>
                <th scope="col" className="px-4 py-3 text-left font-semibold">
                  Strengths
                </th>
                <th scope="col" className="px-4 py-3 text-left font-semibold">
                  Gaps
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {comparativeTable.map((item) => (
                <tr key={item.park}>
                  <th scope="row" className="px-4 py-3 text-left text-slate-900">
                    {item.park}
                  </th>
                  <td className="px-4 py-3 text-slate-600">
                    <ul className="space-y-1">
                      {item.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <ul className="space-y-1">
                      {item.gaps.map((g) => (
                        <li key={g} className="flex items-start gap-2">
                          <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
