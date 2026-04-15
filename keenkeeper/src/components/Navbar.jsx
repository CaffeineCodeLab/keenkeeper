import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import homeIcon from "../assets/Vector.png";
import timelineIcon from "../assets/Clock.png";
import statsIcon from "../assets/ChartLine.png";

function Navbar() {
  return (
    <div className="bg-white border-b border-gray-200 w-full" style={{ height: "78px" }}>
      <div className="mx-auto flex items-center justify-between h-full" style={{ maxWidth: "1600px", paddingLeft: "80px", paddingRight: "80px" }}>
        
        <img src={logo} alt="KeenKeeper" className="h-8" />

        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-sm bg-[#1e3a2f] text-white border-none flex items-center gap-2 px-4"
                : "flex items-center gap-2 text-gray-500 hover:text-black"
            }
          >
            <img src={homeIcon} alt="home" className="h-4 w-4" />
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
            <img src={timelineIcon} alt="timeline" className="h-4 w-4" />
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
            <img src={statsIcon} alt="stats" className="h-4 w-4" />
            Stats
          </NavLink>
        </div>

      </div>
    </div>
  );
}

export default Navbar;