"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { workforcePrograms } from "@/data/dashboard";

export const WorkforceDevelopmentSection = () => {
  return (
    <section
      aria-labelledby="workforce-heading"
      className="grid gap-8 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[minmax(0,1fr)_1.2fr]"
    >
      <div className="space-y-4">
        <h2
          id="workforce-heading"
          className="text-2xl font-semibold text-slate-900"
        >
          Workforce Development & Talent Pipeline
        </h2>
        <p className="text-sm text-slate-600">
          The Quantum Workforce Academy integrates higher education, vocational
          training, and international residency programs to build a resilient
          talent pool. Scholarships, micro-credentials, and industry sabbaticals
          ensure exposure across the quantum stack.
        </p>
        <ul className="space-y-3 text-sm text-slate-600">
          <li className="flex items-start gap-2">
            <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
            National quantum curriculum across 14 universities with stackable credits.
          </li>
          <li className="flex items-start gap-2">
            <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
            Apprenticeships embedded within partner foundries, telecom labs, and defense research units.
          </li>
          <li className="flex items-start gap-2">
            <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
            Virtual accelerator for government technologists to incubate quantum-native solutions.
          </li>
        </ul>
      </div>
      <div className="h-[320px] w-full rounded-3xl border border-slate-200 bg-slate-50/60 p-4">
        <ResponsiveContainer>
          <LineChart data={workforcePrograms}>
            <CartesianGrid strokeDasharray="3 3" stroke="#dbeafe" />
            <XAxis
              dataKey="year"
              tick={{ fill: "#334155", fontSize: 12 }}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(value) => `${value}`}
              tick={{ fill: "#334155", fontSize: 12 }}
              tickLine={false}
            />
            <Tooltip
              formatter={(value: number) => [`${value.toLocaleString()} scholars`, "Projected cohort size"]}
              contentStyle={{
                background: "#0f172a",
                borderRadius: "12px",
                border: "1px solid #1e293b",
                color: "#f8fafc",
              }}
            />
            <Line
              type="monotone"
              dataKey="scholars"
              stroke="#0ea5e9"
              strokeWidth={3}
              dot={{ r: 4, fill: "#0284c7" }}
              activeDot={{ r: 6, fill: "#38bdf8" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};
