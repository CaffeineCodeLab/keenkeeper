import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#f0f4f2] min-h-screen flex flex-col items-center justify-center"
      style={{ textAlign: "center" }}
    >
      <h1
        style={{
          fontSize: "80px",
          fontWeight: "700",
          color: "#1e3a2f",
          lineHeight: "1",
          marginBottom: "16px",
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "600",
          color: "#374151",
          marginBottom: "8px",
        }}
      >
        Page not found
      </p>
      <p
        style={{
          fontSize: "14px",
          color: "#9ca3af",
          marginBottom: "32px",
        }}
      >
        The page you are looking for does not exist.
      </p>
      <button
        className="bg-[#1e3a2f] text-white rounded-lg"
        style={{ padding: "10px 24px", fontSize: "14px" }}
        onClick={() => navigate("/")}
      >
        Go back Home
      </button>
    </div>
  );
}

export default NotFound;