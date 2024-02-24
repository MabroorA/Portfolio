import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandDjango } from "react-icons/tb";
import { SiSqlite } from "react-icons/si";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { GrDocker } from "react-icons/gr";
import { BiLogoKubernetes } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa6";
import "./Projects.css";
export default function Projects() {
  return (
    <>
      <h2 className="title">Projects</h2>
      <div className="projects">
        <div className="project-card stocks-prediction">
          <div className="project-card-header">
            <h4 className="project-title">Stocks Prediction App</h4>
            <div className="project-stack">
              <FaReact
                className="react"
                size={30}
                style={{ background: "transparent" }}
              />
              <FaNodeJs
                className="nodejs"
                size={30}
                style={{ background: "transparent" }}
              />
              <BiLogoPostgresql
                className="postgresql"
                size={30}
                style={{ background: "transparent" }}
              />
            </div>
          </div>
          <div className="stock-pic"></div>
        </div>
        <div className="project-card refuge-aid">
          <div className="project-card-header">
            <h4 className="project-title">Refugee Aid App</h4>
            <div className="project-stack">
              <FaReact
                className="react"
                size={30}
                style={{ background: "transparent" }}
              />
              <TbBrandDjango
                className="nodejs"
                size={30}
                style={{ background: "transparent" }}
              />
              <SiSqlite
                className="postgresql"
                size={30}
                style={{ background: "transparent" }}
              />
            </div>
          </div>
          <div className="refuge-aid-pic">{/* image here */}</div>
        </div>
        <div className="project-card private-cloud">
          <div className="project-card-header">
            <h4 className="project-title">Private Cloud App</h4>
            <div className="project-stack">
              <BiLogoGoogleCloud
                className="gcp"
                size={30}
                style={{ background: "transparent" }}
              />
              <GrDocker
                className="docker"
                size={30}
                style={{ background: "transparent" }}
              />
              <BiLogoKubernetes
                className="kubernetes"
                size={30}
                style={{ background: "transparent" }}
              />
            </div>
          </div>
          <div className="private-cloud-pic"> </div>
        </div>
      </div>
    </>
  );
}