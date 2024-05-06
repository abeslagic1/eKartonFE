import { LineStyle, PersonOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="px-4">
      <div>
        <h3 className="sideBar-menu-title ">Dashboard</h3>
        <ul className=" text-gray-700">
          <Link to="/">
            <li className="sideBar-menu-list-item">
              <LineStyle />

              <span>Home</span>
            </li>
          </Link>
          <Link to="/patients">
            <li className="sideBar-menu-list-item">
              <PersonOutline /> <span>Patients</span>
            </li>
          </Link>
          <Link to="/doctors">
            <li className="sideBar-menu-list-item">
              <PersonOutline /> <span>Doctors</span>
            </li>
          </Link>

          <Link to="/consultations">
            <li className="sideBar-menu-list-item">
              <PersonOutline /> <span>Consultations</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
