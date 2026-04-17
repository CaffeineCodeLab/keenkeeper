import { useState } from "react";
import { useTimeline } from "../context/TimelineContext";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

function Timeline() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState("All");

  const filteredEntries = entries.filter((entry) => {
    if (filter === "All") return true;
    return entry.type === filter;
  });

  function getIcon(type) {
    if (type === "Call") return callIcon;
    if (type === "Text") return textIcon;
    if (type === "Video") return videoIcon;
  }

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
          Timeline
        </h1>

        {/* Filter Dropdown */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-white border border-gray-200 rounded-lg text-sm text-gray-600"
          style={{
            padding: "8px 16px",
            marginBottom: "24px",
            width: "200px",
          }}
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>


        {filteredEntries.length === 0 ? (
          <div
            className="bg-white rounded-xl"
            style={{
              height: "83px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9ca3af",
              fontSize: "14px",
            }}
          >
            No entries yet. Go to a friend's page and log a check-in!
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className="bg-white rounded-xl"
                style={{
                  height: "83px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "0 24px",
                }}
              >
                <img
                  src={getIcon(entry.type)}
                  alt={entry.type}
                  style={{ width: "28px", height: "28px", flexShrink: 0 }}
                />
                <div>
                  <p style={{ fontSize: "14px", color: "#1e3a2f" }}>
                    <span style={{ fontWeight: "700" }}>{entry.type}</span>{" "}
                    with {entry.friendName}
                  </p>
                  <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "2px" }}>
                    {entry.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Timeline;