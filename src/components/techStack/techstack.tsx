import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { BiLogoSpringBoot, BiLogoKubernetes, BiLogoGoogleCloud, BiLogoPostgresql } from "react-icons/bi";
import { GrDocker } from "react-icons/gr";
import "./techstack.css";
import { TbBrandDjango } from "react-icons/tb";

export default function TechStack() {
  return (
    <>
      <div className="tech-stack">
        <div className="frontend section subtitle">
          <h5>Front-End</h5>
          <div className="technologies">
            <div className="react">
              <FaReact size={30} style={{ background: "transparent" }} /> React
            </div>
          </div>
        </div>
        <div className="backend section subtitle">
          <h5>Back-End</h5>
          <div className="technologies">
            <div className="nodejs">
              <FaNodeJs size={30} style={{ background: "transparent" }} />{" "}
              Nodejs
            </div>
            <div className="springboot">
              <BiLogoSpringBoot
                size={30}
                style={{ background: "transparent" }}
              />{" "}
              Spring Boot
            </div>
            <div className="nodejs">
              <TbBrandDjango size={30} style={{ background: "transparent" }} />{" "}
              Django
            </div>
          </div>
        </div>
        <div className="database section subtitle">
          <h5>Database</h5>
          <div className="technologies">
            <div className="mysql">
              <DiMysql size={30} style={{ background: "transparent" }} /> My
              <span className="sql">SQL</span>
            </div>
            <div className="postgresql">
              <BiLogoPostgresql
                size={30}
                style={{ background: "transparent" }}
              />{" "}
              PostgreSql
            </div>
          </div>
        </div>
        <div className="other section subtitle">
          <h5>Other</h5>
          <div className="technologies">
            <div className="docker">
              <GrDocker size={30} style={{ background: "transparent" }} />{" "}
              Docker
            </div>
            <div className="kubernetes">
              <BiLogoKubernetes
                size={30}
                style={{ background: "transparent" }}
              />{" "}
              Kubernetes
            </div>
            <div className="gcp">
              <BiLogoGoogleCloud
                size={30}
                style={{ background: "transparent" }}
              />{" "}Google Cloud <br/>Platform
            </div>
          </div>
        </div>
        <div className="learning-interest section subtitle">
          <h5>Learning interest</h5>
          <div className="technologies">
            <h6 style={{ color: "white" }}>Machine learning </h6>
          </div>
        </div>
      </div>
    </>
  );
}



