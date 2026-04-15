import { useNavigate } from "react-router-dom";

function FriendCard({ friend }) {
  const navigate = useNavigate();

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

  return (
    <div
      className="bg-white rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow flex flex-col items-center text-center"
      onClick={() => navigate(`/friend/${friend.id}`)}
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 rounded-full object-cover mb-3"
      />
      <p className="font-semibold text-[#1e3a2f] mb-1">{friend.name}</p>
      <p className="text-gray-400 text-xs mb-2">{friend.days_since_contact}d ago</p>

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

      <span
        className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusStyle(friend.status)}`}
      >
        {getStatusLabel(friend.status)}
      </span>
    </div>
  );
}

export default FriendCard;