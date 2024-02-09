import React from "react";
import pfp from "./pfp.jpg";
import "./Menu.css";

export default function Menu() {
  const menulist = [
    "web dev @ Minibikers",
    "Uni of Leicester & WQE ",
    "Project list will go here ",
    "typescript",
  ];

  menulist.map((item) => <li>{item}</li>);

  return (
    <>
      <div className="sidenav">
        <img className="profile-picture" src={pfp} alt="Profile Picture"></img>
        <a href="#experience">Experience</a>
        <a href="#Projects">Projects</a>
        <a href="#Education">Education</a>
      </div>
    </>
  );
}
