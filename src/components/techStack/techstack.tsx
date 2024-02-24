import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { BiLogoSpringBoot, BiLogoKubernetes } from "react-icons/bi";
import { GrDocker } from "react-icons/gr";
import "./techstack.css";

export default function TechStack() {
  return (
    <>
      <div className="tech-stack">
        <div className="frontend section subtitle">
          <h5>Front-End</h5>
          <div className="technologies">
            <div className="react">
              <FaReact size={25} style={{ background: "transparent" }} /> React
            </div>
          </div>
        </div>
        <div className="backend section subtitle">
          <h5>Back-End</h5>
          <div className="technologies">
            <div className="nodejs">
              <FaNodeJs size={25} style={{ background: "transparent" }} />{" "}
              Nodejs
            </div>
            <div className="springboot">
              <BiLogoSpringBoot
                size={25}
                style={{ background: "transparent" }}
              />{" "}
              Spring Boot
            </div>
          </div>
        </div>
        <div className="database section subtitle">
          <h5>Database</h5>
          <div className="mysql">
            <DiMysql size={25} style={{ background: "transparent" }} /> My
            <span className="sql">SQL</span>
          </div>
        </div>
        <div className="other section subtitle">
          <h5>Other</h5>
          <div className="docker">
            <GrDocker size={25} style={{ background: "transparent" }} /> Docker
          </div>
          <div className="kubernetes">
            <BiLogoKubernetes size={25} style={{ background: "transparent" }} />
            Kubernetes
          </div>
        </div>
        <div className="learning-interest section subtitle">
          <h5>Learning interest</h5>
        </div>
      </div>
    </>
  );
}



