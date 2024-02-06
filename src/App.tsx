import Logo from "./components/Logo";
import ProjectsList from "./components/ProjectsList";
import Projects from "./components/Projects";
import Menu from "./components/Menu";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import "./App.css";
function App() {
  return (
    <>
      <Menu />
      <Intro />
      <Projects />
      <Experience />
      {/* <Logo/> */}
      {/* <ProjectsList/> */}
    </>
  );
}

export default App;
