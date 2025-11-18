"use client";

import { useEffect, useMemo, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import { applications, geoMarkers } from "@/data/dashboard";
import clsx from "clsx";

type SimplifiedFeature = Feature<Geometry>;

const mapSize = { width: 540, height: 420 };

export const ApplicationsMapSection = () => {
  const [features, setFeatures] = useState<SimplifiedFeature[]>([]);
  const [selectedSector, setSelectedSector] = useState<string>("Healthcare & Genomics");

  useEffect(() => {
    let cancelled = false;
    fetch("/india-outline.geojson")
      .then((res) => res.json())
      .then((json: FeatureCollection) => {
        if (!cancelled) {
          setFeatures(json.features as SimplifiedFeature[]);
        }
      })
      .catch(() => {
        // graceful fallback: keep features empty
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const projection = useMemo(() => {
    return geoMercator().center([82.8, 22.5]).scale(900).translate([mapSize.width / 2, mapSize.height / 2]);
  }, []);

  const pathGenerator = useMemo(() => geoPath(projection), [projection]);

  const markerPositions = useMemo(() => {
    return geoMarkers.map((marker) => {
      const [x, y] = projection([marker.lon, marker.lat]) ?? [0, 0];
      return { ...marker, x, y };
    });
  }, [projection]);

  return (
    <section
      aria-labelledby="applications-heading"
      className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_1.2fr]">
        <div className="space-y-5">
          <div>
            <h2
              id="applications-heading"
              className="text-2xl font-semibold text-slate-900"
            >
              Applications & National Use Cases
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Quantum Valley catalyzes mission-driven deployments across
              healthcare, finance, defense, and climate resilience. Select a
              theme to reveal focal deployment clusters and expected benefits.
            </p>
          </div>
          <div className="space-y-4">
            {applications.map((app) => (
              <button
                key={app.sector}
                type="button"
                onClick={() => setSelectedSector(app.sector)}
                className={clsx(
                  "w-full rounded-3xl border px-4 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                  selectedSector === app.sector
                    ? "border-transparent bg-gradient-to-r from-sky-500/10 via-emerald-500/10 to-indigo-500/10"
                    : "border-slate-200 bg-white hover:border-slate-300",
                )}
                aria-pressed={selectedSector === app.sector}
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {app.sector}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{app.description}</p>
                <p className="mt-2 text-xs text-slate-500">
                  Deployment nodes: {app.locations.join(", ")}
                </p>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900/95 p-4 text-white shadow-inner">
            <svg
              viewBox={`0 0 ${mapSize.width} ${mapSize.height}`}
              role="img"
              aria-labelledby="india-map-title"
              className="h-full w-full"
            >
              <title id="india-map-title">
                Map of India showing government deployment sites for quantum applications
              </title>
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="rgba(56,189,248,0.25)" />
                  <stop offset="100%" stopColor="rgba(30,64,175,0)" />
                </radialGradient>
              </defs>
              <rect
                x="0"
                y="0"
                width={mapSize.width}
                height={mapSize.height}
                fill="url(#mapGlow)"
                opacity={0.8}
              />
              {features.map((feature, index) => (
                <path
                  key={index}
                  d={pathGenerator(feature) ?? ""}
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth={0.6}
                  opacity={0.9}
                />
              ))}
              {markerPositions.map((marker) => {
                const isActive = applications
                  .find((app) => app.sector === selectedSector)
                  ?.locations.includes(marker.city);
                return (
                  <g key={marker.city}>
                    <circle
                      cx={marker.x}
                      cy={marker.y}
                      r={isActive ? 7 : 5}
                      fill={isActive ? "#38bdf8" : "#94a3b8"}
                      stroke="#0f172a"
                      strokeWidth={1.5}
                    />
                    <text
                      x={marker.x + 8}
                      y={marker.y + 4}
                      className="text-[11px]"
                      fill={isActive ? "#e0f2fe" : "#cbd5f5"}
                    >
                      {marker.city}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <p className="text-xs text-slate-500">
            Marker intensity reflects priority deployments for the selected use
            case. Additional pilots across smart grids, logistics, and advanced
            materials are in planning stages.
          </p>
        </div>
      </div>
    </section>
  );
};
