import "./techstack.css"
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrDocker } from "react-icons/gr";
import { BiLogoKubernetes } from "react-icons/bi";
export default function TechStack() {
  return (
    <>
      <div className="tech-stack">
        <h1 className="title">Tech Stack</h1>
        <div className="item">
          <ul className="react">
            <FaReact size={33} />{" "} React
          </ul>
          <ul className="nodejs">
            <FaNodeJs size={33} />{" "} Nodejs
          </ul>
          <ul className="mysql">
            {" "}
            <DiMysql size={33} /> MySQL
          </ul>
          <ul className="springboot">
            <BiLogoSpringBoot size={33} /> SpringBoot
          </ul>
          <ul className="docker">
            <GrDocker size={33} /> Docker
          </ul>
          <ul className="kubernetes">
            <BiLogoKubernetes size={33} /> Kubernetes
          </ul>
        </div>
      </div>
    </>
  );
}



