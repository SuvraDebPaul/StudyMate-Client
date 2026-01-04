import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export const StudyModeChart = ({ partners }) => {
  const modeMap = {};
  partners.forEach((p) => {
    const mode = p.studyMode || "Unknown";
    modeMap[mode] = (modeMap[mode] || 0) + 1;
  });

  const data = Object.entries(modeMap).map(([mode, count]) => ({
    name: mode,
    value: count,
  }));

  const COLORS = ["#2563EB", "#F59E0B", "#10B981", "#EF4444"];

  return (
    <div className="card bg-base-100 shadow-md border border-base-300 p-4">
      <h2 className="card-title mb-4">Study Mode Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
