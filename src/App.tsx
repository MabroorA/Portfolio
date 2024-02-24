import Projects from "./components/projects/Projects";
import Menu from "./components/menu/Menu";
import Intro from "./components/introduction/Intro";

import "./App.css";
import Slidingwindow from "./components/techStack/Slidingwindow";
function App() {
  return (
    <>
      <div className="main">
        <Menu/>
        <Intro />
        <Slidingwindow/>
        <Projects />
        {/* <Experience /> */}
      </div>
    </>
  );
}

export default App;
