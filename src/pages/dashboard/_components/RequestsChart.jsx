import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const RequestsChart = ({ requests }) => {
  // Map requests into sequential labels
  const data = requests.map((req, index) => ({
    name: `Request ${index + 1}`, // label instead of date
    count: 1, // each request counts as 1
  }));

  return (
    <div className="card bg-base-100 shadow-md border border-base-300 p-4">
      <h2 className="card-title mb-4">Requests Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#2563EB"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
