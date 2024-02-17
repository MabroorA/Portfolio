import "./Intro.css";
import pfp from "./pfp.jpg"
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Intro() {
  return (
    <>
      <div className="intro-box">
        <div>
          <img className="pfp" src={pfp} alt="Profile Picture"></img>
        </div>
        <div>
          <div className="intro">
            <h6>Peace Be Upon You, I'm Mabroor.</h6>
            <h6>
              Software developer, experienced in building full stack applications.
            </h6>
          </div>
          <div className="links">
            <a className="gmail" href="mabroorahmed2@gmail.com">
              <SiGmail className="icon" color="#EE7470" />
              Mabroorahmed2@gmail.com
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/mabroor-dev/"
            >
              <BsLinkedin className="icon" color="#2966BC" />
              Linkedin
            </a>
            <a className="github" href="https://github.com/MabroorA">
              <FaGithub className="icon" />
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
