import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";

import "./Menu.css";

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
            <a href="/">Experience</a>
            <a href="#projects">Projects</a>
            <a href="/Education">Education</a>
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
