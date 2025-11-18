"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { fundingBreakdown } from "@/data/dashboard";

const palette = {
  central: "#0ea5e9",
  state: "#14b8a6",
  ppp: "#6366f1",
  international: "#f59e0b",
};

export const GovernmentSupportSection = () => {
  return (
    <section
      aria-labelledby="government-support-heading"
      className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_1.1fr]">
        <div className="space-y-4">
          <h2
            id="government-support-heading"
            className="text-2xl font-semibold text-slate-900"
          >
            Government Support Architecture
          </h2>
          <p className="text-sm text-slate-600">
            Central and state governments operate a coordinated funding stack
            combining capital expenditure, tax incentives, and policy frameworks.
            Dedicated innovation zones, expedited customs clearance for quantum
            hardware, and public procurement guarantees accelerate adoption.
          </p>
          <dl className="grid gap-3 text-sm text-slate-600">
            <div className="flex justify-between rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3">
              <div>
                <dt className="font-semibold text-slate-800">Central Incentives</dt>
                <dd>Production Linked Incentives, National Quantum Mission grants</dd>
              </div>
              <span className="self-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                ₹4,200 Cr
              </span>
            </div>
            <div className="flex justify-between rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3">
              <div>
                <dt className="font-semibold text-slate-800">State Catalysts</dt>
                <dd>Land banks, infrastructure bonds, electricity subsidies</dd>
              </div>
              <span className="self-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                ₹4,500 Cr
              </span>
            </div>
            <div className="flex justify-between rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3">
              <div>
                <dt className="font-semibold text-slate-800">Public-Private Partnerships</dt>
                <dd>Anchor investments from semiconductor and telecom majors</dd>
              </div>
              <span className="self-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                ₹3,000 Cr
              </span>
            </div>
            <div className="flex justify-between rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3">
              <div>
                <dt className="font-semibold text-slate-800">Global Collaboration Funds</dt>
                <dd>Joint calls with EU Horizon, Indo-Japan digital partnership</dd>
              </div>
              <span className="self-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                ₹1,250 Cr
              </span>
            </div>
          </dl>
        </div>
        <div className="h-[360px] w-full rounded-3xl border border-slate-200 bg-slate-50/60 p-4">
          <ResponsiveContainer>
            <BarChart data={fundingBreakdown} stackOffset="expand">
              <CartesianGrid strokeDasharray="3 3" stroke="#dbeafe" />
              <XAxis
                dataKey="category"
                tick={{ fill: "#334155", fontSize: 12 }}
                tickLine={false}
              />
              <YAxis
                tickFormatter={(value) => `${Math.round(value * 100)}%`}
                tick={{ fill: "#334155", fontSize: 12 }}
              />
              <Tooltip
                formatter={(value: number) => [`₹${value.toLocaleString()} Cr`, ""]}
                contentStyle={{
                  background: "#0f172a",
                  borderRadius: "12px",
                  border: "1px solid #1e293b",
                  color: "#f8fafc",
                }}
              />
              <Legend
                formatter={(value) => (
                  <span className="text-xs text-slate-600">{value}</span>
                )}
              />
              <Bar dataKey="central" stackId="funding" fill={palette.central} />
              <Bar dataKey="state" stackId="funding" fill={palette.state} />
              <Bar dataKey="ppp" stackId="funding" fill={palette.ppp} />
              <Bar
                dataKey="international"
                stackId="funding"
                fill={palette.international}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
