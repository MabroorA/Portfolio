import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";

import "./Menu.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

export default function Menu() {
  const [isOpen,SetisOpen] = useState(false)

  const toggleMenu = () => {
    SetisOpen((open) => !open);
  }; 
  return (
    <>
      <div className="menu">
        <a className="name" href="/">
          Mabroor Ahmed
        </a>
        <div className={`rlist ${isOpen ? "is-open" : ""}`}>
          <div className="rlist">
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/mabroor-dev/"
            >
              <BsLinkedin size={25} color="#2966BC" /> linkedin
            </a>

            <a className="github" href="https://github.com/MabroorA">
              <FaGithub size={25} color="white" />{" "}
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <RiMenu4Fill />
      </div>
      <div className="scroll-watcher"></div> {/* Scroll bar */}
    </>
  );
}
