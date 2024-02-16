import "./Menu.css";

export default function Menu() {
  return (
    <>
      <div className="menu">
        {/* <img className="profile-picture" src={pfp} alt="Profile Picture"></img> */}
        <a className="name" href="/home">
          Mabroor Ahmed
        </a>
        <div>
          <a href="/experience">Experience</a>
          <a href="/Projects">Projects</a>
          <a href="/Education">Education</a>
        </div>
      </div>
    </>
  );
}
