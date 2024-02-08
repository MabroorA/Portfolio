import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "../App.css";

export default function Intro() {
  return (
    <>
      <div className="intro_section">
        <h1 className="Name">Mabroor Ahmed</h1>
        <h6>Leicester,England</h6>
      </div>
      <div className="social_links">
        <a href="mabroorahmed2@gmail.com">Mabroorahmed2@gmail.com</a>
        <a href="https://www.linkedin.com/in/mabroor-dev/">Linkedin</a>
        <a href="https://github.com/MabroorA">Github</a>
        <p>Logos will go here</p>
      </div>
    </>
  );
}
