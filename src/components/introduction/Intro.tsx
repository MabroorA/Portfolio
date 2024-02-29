import "./Intro.css";
import pfp from "./pfp.jpg"
import { PiHandWavingFill } from "react-icons/pi";



export default function Intro() {
  return (
    <>
      <div className="intro-box">
        <div>
          <img className="pfp" src={pfp} alt="Profile Picture"></img>
        </div>
        <div>
          <div className="intro">
            <h6 className="intro-name">
              <PiHandWavingFill color={"#C5946C"} /> Hey, I'm Mabroor.
            </h6>
            <h6 className="intro-desc">
              Software developer, experienced in building full stack applications.
            </h6>
          </div>
          <div className="links">
          </div>
        </div>
      </div>
    </>
  );
}
