import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import pfp from "./pfp.jpg";
import "./Menu.css";

export default function Menu() {
  return (
    <>
      <div className="sidenav">
        <img className="profile-picture" src={pfp} alt="Profile Picture"></img>
        <a href="#experience">Experience</a>
        <a href="#Projects">Projects</a>
        <a href="#Education">Education</a>
        <a href="/" className="menu-icon">
          <MenuRoundedIcon />
        </a>
      </div>
    </>
  );
}
