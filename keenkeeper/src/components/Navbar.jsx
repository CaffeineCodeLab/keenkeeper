import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import homeIcon from "../assets/Vector.png";
import timelineIcon from "../assets/Clock.png";
import statsIcon from "../assets/ChartLine.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 w-full" style={{ height: "78px", position: "relative" }}>
      <div
        className="mx-auto flex items-center justify-between h-full"
        style={{ maxWidth: "1600px", paddingLeft: "80px", paddingRight: "80px" }}
      >
        <img src={logo} alt="KeenKeeper" className="h-8" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-sm bg-[#1e3a2f] text-white border-none flex items-center gap-2 px-4"
                : "flex items-center gap-2 text-gray-500 hover:text-black"
            }
          >
            <img src={homeIcon} alt="home" style={{ width: "16px", height: "16px" }} />
            Home
          </NavLink>
          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              isActive
                ? "btn btn-sm bg-[#1e3a2f] text-white border-none flex items-center gap-2 px-4"
                : "flex items-center gap-2 text-gray-500 hover:text-black"
            }
          >
            <img src={timelineIcon} alt="timeline" style={{ width: "16px", height: "16px" }} />
            Timeline
          </NavLink>
          <NavLink
            to="/stats"
            className={({ isActive }) =>
              isActive
                ? "btn btn-sm bg-[#1e3a2f] text-white border-none flex items-center gap-2 px-4"
                : "flex items-center gap-2 text-gray-500 hover:text-black"
            }
          >
            <img src={statsIcon} alt="stats" style={{ width: "16px", height: "16px" }} />
            Stats
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-white border-t border-gray-100 absolute w-full z-50"
          style={{ top: "78px", left: 0 }}
        >
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100"
          >
            <img src={homeIcon} alt="home" style={{ width: "16px", height: "16px" }} />
            Home
          </NavLink>
          <NavLink
            to="/timeline"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100"
          >
            <img src={timelineIcon} alt="timeline" style={{ width: "16px", height: "16px" }} />
            Timeline
          </NavLink>
          <NavLink
            to="/stats"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-6 py-4 text-sm text-gray-700 hover:bg-gray-50"
          >
            <img src={statsIcon} alt="stats" style={{ width: "16px", height: "16px" }} />
            Stats
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;