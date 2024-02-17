import Projects from "./components/projects/Projects";
import Menu from "./components/menu/Menu";
import Intro from "./components/introduction/Intro";
import TechStack from "./components/techStack/techstack";
import "./App.css";
function App() {
  return (
    <>
      <div className="main">
        <Menu/>
        <Intro />
        <TechStack/>
        <Projects />
        {/* <Experience /> */}
      </div>
    </>
  );
}

export default App;
