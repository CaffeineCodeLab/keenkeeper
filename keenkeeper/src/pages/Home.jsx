import { useEffect, useState } from "react";
import friendsData from "../data/friends.json";
import FriendCard from "../components/FriendCard";

function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1000);
  }, []);

  const totalFriends = friends.length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const needAttention = friends.filter(
    (f) => f.status === "overdue" || f.status === "almost due"
  ).length;
  const interactionsThisMonth = 12;

  return (
    <div className="bg-[#f0f4f2]">

      {/* Center container — 1110px wide */}
      <div className="mx-auto" style={{ maxWidth: "1110px" }}>

        {/* Gap between navbar and banner = 80px */}
        <div style={{ paddingTop: "80px" }}>

          {/* Banner Section — 1110 x 196 */}
          <div
            className="text-center flex flex-col items-center"
            style={{ height: "196px", justifyContent: "space-between" }}
          >
            {/* Text block — 1110 x 120 */}
            <div style={{ height: "120px" }} className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-[#1e3a2f] mb-3">
                Friends to keep close in your life
              </h1>
              <p className="text-gray-500 text-sm max-w-md">
                Your personal shelf of meaningful connections. Browse, tend, and
                nurture the relationships that matter most.
              </p>
            </div>

            {/* Gap 32 then Add Friend button — 148 x 44 */}
            <div style={{ marginTop: "32px" }}>
              <button
                className="bg-[#1e3a2f] text-white rounded-lg font-medium"
                style={{ width: "148px", height: "44px" }}
              >
                + Add a Friend
              </button>
            </div>
          </div>

          {/* Gap 40 between banner and summary cards */}
          <div style={{ marginTop: "40px" }}>

            {/* Summary Cards — 1110 x 137, gap 24 */}
            <div
              className="grid grid-cols-4"
              style={{ gap: "24px", height: "137px" }}
            >
              <div className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-[#1e3a2f]">{totalFriends}</p>
                <p className="text-gray-500 text-sm mt-1">Total Friends</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-[#1e3a2f]">{onTrack}</p>
                <p className="text-gray-500 text-sm mt-1">On Track</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-[#1e3a2f]">{needAttention}</p>
                <p className="text-gray-500 text-sm mt-1">Need Attention</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-[#1e3a2f]">{interactionsThisMonth}</p>
                <p className="text-gray-500 text-sm mt-1">Interactions This Month</p>
              </div>
            </div>

          </div>

          {/* Gap 40, gray line, gap 40 */}
          <div style={{ marginTop: "40px" }}>
            <hr className="border-gray-300" />
          </div>

          {/* Friends Section */}
          <div style={{ marginTop: "40px", paddingBottom: "80px" }}>

            {/* Loading Spinner */}
            {loading && (
              <div className="flex justify-center py-10">
                <span className="loading loading-spinner loading-lg text-[#1e3a2f]"></span>
              </div>
            )}

            {!loading && (
              <>
                {/* "Your Friends" heading, gap 16 below */}
                <h2
                  className="text-xl font-bold text-[#1e3a2f]"
                  style={{ marginBottom: "16px" }}
                >
                  Your Friends
                </h2>

                {/* Cards grid — gap 24, each card 254px tall */}
                <div
                  className="grid grid-cols-4"
                  style={{ gap: "24px" }}
                >
                  {friends.map((friend) => (
                    <FriendCard key={friend.id} friend={friend} />
                  ))}
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;