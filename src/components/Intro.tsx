import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "../App.css"

export default function Intro() {
    return (
        <>
            <div className="intro_section">
                <h1 className="Name">Mabroor Ahmed</h1>
                <h6>Leicester,England</h6>
                <a href="mabroorahmed2@gmail.com">Mabroorahmed2@gmail.com</a>
                <div className="icon">
                    <a href="https://www.linkedin.com/in/mabroor-dev/"><FaLinkedin /></a>
                    <a href="https://github.com/MabroorA"><FaGithub /></a>
                </div>
            </div>
        </>
    );
}