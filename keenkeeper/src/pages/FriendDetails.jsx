import { useParams } from "react-router-dom";
import friendsData from "../data/friends.json";
import { useTimeline } from "../context/TimelineContext";
import toast, { Toaster } from "react-hot-toast";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

function FriendDetails() {
  const { id } = useParams();
  const friend = friendsData.find((f) => f.id === parseInt(id));
  const { addEntry } = useTimeline();

  if (!friend) {
    return (
      <div className="text-center py-20 text-gray-500">Friend not found.</div>
    );
  }

  function getStatusStyle(status) {
    if (status === "overdue") return "bg-red-500 text-white";
    if (status === "almost due") return "bg-orange-400 text-white";
    if (status === "on-track") return "bg-green-600 text-white";
    return "";
  }

  function getStatusLabel(status) {
    if (status === "overdue") return "Overdue";
    if (status === "almost due") return "Almost Due";
    if (status === "on-track") return "On-Track";
    return "";
  }

  function handleCheckIn(type) {
    addEntry(type, friend.name);
    toast.success(`${type} with ${friend.name} logged!`);
  }

  const formattedDate = new Date(friend.next_due_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <div className="bg-[#f0f4f2] min-h-screen">
      <Toaster position="top-right" />

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

        <div style={{ display: "flex", gap: "24px" }}>

          <div style={{ width: "350px", flexShrink: 0 }}>

            <div
              className="bg-white rounded-xl"
              style={{
                width: "350px",
                height: "284px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              <img
                src={friend.picture}
                alt={friend.name}
                style={{ width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover", marginBottom: "12px" }}
              />
              <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#1e3a2f", marginBottom: "8px" }}>
                {friend.name}
              </h2>
              <span
                className={getStatusStyle(friend.status)}
                style={{ fontSize: "12px", padding: "2px 12px", borderRadius: "999px", fontWeight: "500", marginBottom: "8px" }}
              >
                {getStatusLabel(friend.status)}
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px", marginBottom: "8px" }}>
                {friend.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ fontSize: "11px", backgroundColor: "#dcfce7", color: "#15803d", padding: "2px 8px", borderRadius: "999px", textTransform: "uppercase" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: "13px", color: "#6b7280", fontStyle: "italic", fontWeight: "500" ,marginBottom: "4px" }}>"{friend.bio}"</p>
              <p style={{ fontSize: "13px", color: "#1F2937", fontWeight: "600"}}>{friend.email}</p>
            </div>

            {/* Action Buttons*/}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <button
                className="bg-white rounded-xl hover:bg-gray-50 font-semibold"
                style={{ width: "350px", height: "53px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "14px", color: "#374151" }}
              >
                ⏰ Snooze 2 Weeks
              </button>
              <button
                className="bg-white rounded-xl hover:bg-gray-50 font-semibold"
                style={{ width: "350px", height: "53px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "14px", color: "#374151" }}
              >
                📦 Archive
              </button>
              <button
                className="bg-white rounded-xl hover:bg-gray-50 font-semibold"
                style={{ width: "350px", height: "53px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "14px", color: "#ef4444" }}
              >
                🗑️ Delete
              </button>
            </div>

          </div>

          <div style={{ width: "736px", display: "flex", flexDirection: "column", gap: "24px" }}>

            {/* Stats Cards*/}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", height: "134px" }}>
              <div
                className="bg-white rounded-xl"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
              >
                <p style={{ fontSize: "30px", fontWeight: "700", color: "#244D3F" }}>{friend.days_since_contact}</p>
                <p style={{ fontSize: "13px", color: "#64748B", marginTop: "4px" }}>Days Since Contact</p>
              </div>
              <div
                className="bg-white rounded-xl"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
              >
                <p style={{ fontSize: "30px", fontWeight: "700", color: "#244D3F" }}>{friend.goal}</p>
                <p style={{ fontSize: "13px", color: "#64748B", marginTop: "4px" }}>Goal (Days)</p>
              </div>
              <div
                className="bg-white rounded-xl"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
              >
                <p style={{ fontSize: "22px", fontWeight: "700", color: "#244D3F" }}>{formattedDate}</p>
                <p style={{ fontSize: "13px", color: "#64748B", marginTop: "4px" }}>Next Due</p>
              </div>
            </div>


            <div
              className="bg-white rounded-xl"
              style={{ width: "736px", height: "121px", padding: "24px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <h3 style={{ fontWeight: "600", color: "#244D3F", fontSize: "15px" }}>Relationship Goal</h3>
                <button
                  className="rounded-lg border border-gray-300 hover:bg-gray-50"
                  style={{ padding: "4px 12px", fontSize: "13px", color: "#374151" }}
                >
                  Edit
                </button>
              </div>
              <p style={{ fontSize: "14px", color: "#1F2937" }}>
                Connect every <span style={{ fontWeight: "700" }}>{friend.goal} days</span>
              </p>
            </div>

            <div
              className="bg-white rounded-xl"
              style={{ width: "736px", height: "185px", padding: "24px" }}
            >
              <h3 style={{ fontWeight: "600", color: "#1e3a2f", fontSize: "15px", marginBottom: "16px" }}>
                Quick Check-In
              </h3>

              {/* 3 buttons */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", height: "95px" }}>
                <button
                  className="bg-white rounded-xl border border-gray-200 hover:bg-gray-50"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px" }}
                  onClick={() => handleCheckIn("Call")}
                >
                  <img src={callIcon} alt="Call" style={{ width: "28px", height: "28px" }} />
                  <span style={{ fontSize: "13px", color: "#374151" }}>Call</span>
                </button>
                <button
                  className="bg-white rounded-xl border border-gray-200 hover:bg-gray-50"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px" }}
                  onClick={() => handleCheckIn("Text")}
                >
                  <img src={textIcon} alt="Text" style={{ width: "28px", height: "28px" }} />
                  <span style={{ fontSize: "13px", color: "#374151" }}>Text</span>
                </button>
                <button
                  className="bg-white rounded-xl border border-gray-200 hover:bg-gray-50"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px" }}
                  onClick={() => handleCheckIn("Video")}
                >
                  <img src={videoIcon} alt="Video" style={{ width: "28px", height: "28px" }} />
                  <span style={{ fontSize: "13px", color: "#374151" }}>Video</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendDetails;