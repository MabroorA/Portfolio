import Projects from "./components/projects/Projects";
import Menu from "./components/menu/Menu";
import Intro from "./components/introduction/Intro";
import Experience from "./components/experience/Experience";
import "./App.css";
function App() {
  return (
    <>
      <div className="main">
        <Menu />
        <Intro />
        <Projects />
        {/* <Experience /> */}
      </div>
    </>
  );
}

export default App;
