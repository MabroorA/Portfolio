import React from "react";
import pfp from "../assets/pfp.jpg";
import "../App.css";
// Experience: "web dev @ Minibikers",
//         Education: "Uni of Leicester & WQE ",
//         Projects: "Project list will go here ",
//         Learning : "typescript",

export default function Menu() {
    const menulist = [
        "web dev @ Minibikers",
        "Uni of Leicester & WQE ",
        "Project list will go here ",
        "typescript",

    ]

    menulist.map(item => <li>{item}</li>)

    return (
        <>
            <div className="sidenav">
                <img className="profile-picture" src={pfp} alt ="Profile Picture"></img>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#Projects">Projects</a>
                <a href="#Education">Education</a>
            </div>
        </>
    );
}