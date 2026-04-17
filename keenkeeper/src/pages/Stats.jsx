import { useTimeline } from "../context/TimelineContext";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const COLORS = ["#7c3aed", "#1e3a2f", "#22c55e"];

function Stats() {
  const { entries } = useTimeline();

  const callCount = entries.filter((e) => e.type === "Call").length;
  const textCount = entries.filter((e) => e.type === "Text").length;
  const videoCount = entries.filter((e) => e.type === "Video").length;

  const data = [
    { name: "Text", value: textCount || 1 },
    { name: "Call", value: callCount || 1 },
    { name: "Video", value: videoCount || 1 },
  ];

  return (
    <div className="bg-[#f0f4f2] min-h-screen">
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          paddingLeft: "245px",
          paddingRight: "245px",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1e3a2f",
            marginBottom: "24px",
          }}
        >
          Friendship Analytics
        </h1>

        {/* Chart Card */}
        <div
          className="bg-white rounded-xl"
          style={{ padding: "24px" }}
        >
          <p
            style={{
              fontSize: "15px",
              fontWeight: "600",
              color: "#1e3a2f",
              marginBottom: "24px",
            }}
          >
            By Interaction Type
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <PieChart width={400} height={300}>
              <Pie
                data={data}
                cx={200}
                cy={130}
                innerRadius={80}
                outerRadius={130}
                paddingAngle={4}
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
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;