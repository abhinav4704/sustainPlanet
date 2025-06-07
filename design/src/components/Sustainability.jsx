import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: 1880, tempAnomaly: -0.12 },
  { year: 1900, tempAnomaly: -0.07 },
  { year: 1920, tempAnomaly: -0.11 },
  { year: 1940, tempAnomaly: 0.04 },
  { year: 1960, tempAnomaly: -0.02 },
  { year: 1980, tempAnomaly: 0.18 },
  { year: 2000, tempAnomaly: 0.40 },
  { year: 2020, tempAnomaly: 1.02 },
  { year: 2024, tempAnomaly: 1.10 },
];

export default function GlobalWarmingGraph() {
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    // Animate data loading, adding one point every 300ms
    let index = 0;
    const interval = setInterval(() => {
      if (index < data.length) {
        setDisplayData((prev) => [...prev, data[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" text-black py-24 px-6  mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Rising Global Temperatures</h2>
      <p className="mb-8 max-w-xl mx-auto">
        The chart below shows the increase in global temperature anomalies (°C) since 1880,
        highlighting the accelerating effects of global warming over the last century.
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={displayData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            domain={[1880, 2025]}
            type="number"
            tickCount={10}
            tickFormatter={(tick) => tick.toString()}
          />
          <YAxis
            domain={[-0.5, 1.5]}
            tickFormatter={(tick) => `${tick}°C`}
            allowDecimals={true}
          />
          <Tooltip formatter={(value) => `${value.toFixed(2)}°C`} />
          <Legend />
          <Line
            type="monotone"
            dataKey="tempAnomaly"
            stroke="#22c55e" // green color for sustainability theme
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            isAnimationActive={false} // handled manually by data load animation
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
