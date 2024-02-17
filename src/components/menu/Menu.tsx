import "./Menu.css";

export default function Menu() {
  return (
    <>
      <div className="menu">
        <a className="name" href="/">
          Mabroor Ahmed
        </a>
        <div className="rlist">
          <a href="/">Experience</a>
          <a href="#projects">Projects</a>
          <a href="/Education">Education</a>
        </div>
      </div>
      <div className="scroll-watcher"></div> {/* Scroll bar */}
    </>
  );
}
