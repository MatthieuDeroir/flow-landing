"use client";

import { motion } from "framer-motion";

type CellValue = boolean | string;

interface ComparisonRow {
  feature: string;
  flow: CellValue;
  daylio: CellValue;
  bearable: CellValue;
  pixels: CellValue;
}

const rows: ComparisonRow[] = [
  { feature: "Mood tracking", flow: true, daylio: true, bearable: true, pixels: true },
  { feature: "Multi-dimension (energy, anxiety...)", flow: true, daylio: false, bearable: true, pixels: false },
  { feature: "Sleep tracking", flow: true, daylio: false, bearable: true, pixels: false },
  { feature: "Medication reminders", flow: true, daylio: false, bearable: true, pixels: false },
  { feature: "Hydration tracking", flow: true, daylio: false, bearable: false, pixels: false },
  { feature: "Nutrition tracking", flow: true, daylio: false, bearable: true, pixels: false },
  { feature: "Exercise tracking", flow: true, daylio: false, bearable: true, pixels: false },
  { feature: "Journal", flow: true, daylio: true, bearable: true, pixels: false },
  { feature: "Sobriety tracking", flow: true, daylio: false, bearable: false, pixels: false },
  { feature: "100% offline / local data", flow: true, daylio: false, bearable: false, pixels: true },
  { feature: "Desktop app", flow: true, daylio: false, bearable: false, pixels: false },
  { feature: "Relax / breathing exercises", flow: true, daylio: false, bearable: false, pixels: false },
  { feature: "Export (CSV/JSON)", flow: true, daylio: true, bearable: true, pixels: false },
  { feature: "Open source", flow: true, daylio: false, bearable: false, pixels: false },
  { feature: "Lifetime price", flow: "€13.89", daylio: "€29.99", bearable: "€59.99", pixels: "Free" },
];

function CellContent({ value, isFlow }: { value: CellValue; isFlow?: boolean }) {
  if (typeof value === "string") {
    return (
      <span className={`text-sm font-medium ${isFlow ? "text-primary-400" : "text-slate-400"}`}>
        {value}
      </span>
    );
  }
  if (value) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={isFlow ? "text-primary-400" : "text-emerald-400/60"}>
        <path d="M4 9l3.5 3.5L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-slate-700">
      <path d="M6 9h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Comparison() {
  return (
    <section id="comparison" className="relative px-6 py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-primary-600/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <h2 className="mb-5 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            How Flow{" "}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Compares
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            More features, better privacy, lower price. See how Flow stacks up.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass overflow-hidden rounded-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="px-6 py-5 text-left text-sm font-medium text-slate-500">
                    Feature
                  </th>
                  <th className="px-5 py-5 text-center">
                    <span className="font-[family-name:var(--font-poppins)] text-sm font-bold text-primary-400">
                      Flow
                    </span>
                  </th>
                  <th className="px-5 py-5 text-center text-sm font-medium text-slate-500">
                    Daylio
                  </th>
                  <th className="px-5 py-5 text-center text-sm font-medium text-slate-500">
                    Bearable
                  </th>
                  <th className="px-5 py-5 text-center text-sm font-medium text-slate-500">
                    Pixels
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/[0.03] transition-colors hover:bg-white/[0.02] ${
                      i % 2 !== 0 ? "bg-white/[0.01]" : ""
                    }`}
                  >
                    <td className="px-6 py-3.5 text-sm text-slate-300">
                      {row.feature}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex justify-center">
                        <CellContent value={row.flow} isFlow />
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex justify-center">
                        <CellContent value={row.daylio} />
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex justify-center">
                        <CellContent value={row.bearable} />
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex justify-center">
                        <CellContent value={row.pixels} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
