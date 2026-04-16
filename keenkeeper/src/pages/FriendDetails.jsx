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

      {/* Outer container — 1600 fill, padding left-right 245, top-bottom 80 */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "1600px",
          paddingLeft: "245px",
          paddingRight: "245px",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        {/* Inner frame — 1110 x 488 */}
        <div className="flex" style={{ gap: "24px" }}>

          {/* LEFT COLUMN — 350px wide */}
          <div style={{ width: "350px", flexShrink: 0 }}>

            {/* Friend Info Card — 350 x 284 */}
            <div
              className="bg-white rounded-xl flex flex-col items-center text-center"
              style={{ height: "284px", padding: "24px", marginBottom: "16px" }}
            >
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-16 h-16 rounded-full object-cover mb-3"
              />
              <h2 className="text-lg font-bold text-[#1e3a2f] mb-2">
                {friend.name}
              </h2>
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium mb-2 ${getStatusStyle(friend.status)}`}
              >
                {getStatusLabel(friend.status)}
              </span>
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {friend.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm italic mb-1">"{friend.bio}"</p>
              <p className="text-gray-400 text-xs">Preferred: email</p>
            </div>


{/* Action Buttons */}
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
  <button
    className="bg-white rounded-xl flex items-center gap-3 px-5 text-sm text-gray-700 hover:bg-gray-50"
    style={{ width: "350px", height: "53px" }}
  >
    🔔 Snooze 2 Weeks
  </button>
  <button
    className="bg-white rounded-xl flex items-center gap-3 px-5 text-sm text-gray-700 hover:bg-gray-50"
    style={{ width: "350px", height: "53px" }}
  >
    🗂️ Archive
  </button>
  <button
    className="bg-white rounded-xl flex items-center gap-3 px-5 text-sm text-red-500 hover:bg-gray-50"
    style={{ width: "350px", height: "53px" }}
  >
    🗑️ Delete
  </button>
</div>

          </div>

          {/* RIGHT COLUMN — flex-1, 736px */}
          <div className="flex flex-col flex-1" style={{ gap: "24px" }}>

            {/* Stats Cards — 736 x 134, 3 cards, gap 24 */}
            <div
              className="grid grid-cols-3"
              style={{ gap: "24px", height: "134px" }}
            >
              <div className="bg-white rounded-xl flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-[#1e3a2f]">
                  {friend.days_since_contact}
                </p>
                <p className="text-gray-500 text-sm mt-1">Days Since Contact</p>
              </div>
              <div className="bg-white rounded-xl flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-[#1e3a2f]">{friend.goal}</p>
                <p className="text-gray-500 text-sm mt-1">Goal (Days)</p>
              </div>
              <div className="bg-white rounded-xl flex flex-col items-center justify-center">
                <p className="text-2xl font-bold text-[#1e3a2f]">{formattedDate}</p>
                <p className="text-gray-500 text-sm mt-1">Next Due</p>
              </div>
            </div>

            {/* Relationship Goal — 736 x 121 */}
            <div
              className="bg-white rounded-xl"
              style={{ height: "121px", padding: "24px" }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-[#1e3a2f]">Relationship Goal</h3>
                <button className="btn btn-sm btn-outline border-gray-300 text-gray-600">
                  Edit
                </button>
              </div>
              <p className="text-gray-600 text-sm">
                Connect every{" "}
                <span className="font-bold">{friend.goal} days</span>
              </p>
            </div>

            {/* Quick Check-In — 736 x 185, padding 24 all sides */}
            <div
              className="bg-white rounded-xl"
              style={{ height: "185px", padding: "24px" }}
            >
              <h3
                className="font-semibold text-[#1e3a2f]"
                style={{ marginBottom: "16px" }}
              >
                Quick Check-In
              </h3>

              {/* 3 buttons — total 688 x 95, each 218.67 x 95, gap 24 */}
              <div
                className="grid grid-cols-3"
                style={{ gap: "24px", height: "95px" }}
              >
                <button
                  className="flex flex-col items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50"
                  onClick={() => handleCheckIn("Call")}
                >
                  <img src={callIcon} alt="Call" className="w-7 h-7 mb-1" />
                  <span className="text-sm text-gray-700">Call</span>
                </button>
                <button
                  className="flex flex-col items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50"
                  onClick={() => handleCheckIn("Text")}
                >
                  <img src={textIcon} alt="Text" className="w-7 h-7 mb-1" />
                  <span className="text-sm text-gray-700">Text</span>
                </button>
                <button
                  className="flex flex-col items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50"
                  onClick={() => handleCheckIn("Video")}
                >
                  <img src={videoIcon} alt="Video" className="w-7 h-7 mb-1" />
                  <span className="text-sm text-gray-700">Video</span>
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