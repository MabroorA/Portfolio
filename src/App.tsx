import Projects from "./components/projects/Projects";
import Menu from "./components/menu/Menu";
import Intro from "./components/introduction/Intro";

import "./App.css";
import TechStack from "./components/techStack/techstack";
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
