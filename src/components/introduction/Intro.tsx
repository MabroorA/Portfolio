import "./Intro.css";
import pfp from "./pfp.jpg"
export default function Intro() {
  return (
    <>
      <div className="intro-box">
        <div>
          <img className="pfp" src={pfp} alt="Profile Picture"></img>
        </div>
        <div>
          <div className="intro">
            <h6>
              Hey ,I'm Mabroor. I'm a Software engineer soon to be a graduate
            </h6>
          </div>
          <div className="contact-details">
            <a href="mabroorahmed2@gmail.com">Mabroorahmed2@gmail.com</a>
            <a href="https://www.linkedin.com/in/mabroor-dev/">Linkedin</a>
            <a href="https://github.com/MabroorA">Github</a>
          </div>
        </div>
      </div>
    </>
  );
}
