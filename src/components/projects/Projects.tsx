import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandDjango } from "react-icons/tb";
import { SiSqlite } from "react-icons/si";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { GrDocker } from "react-icons/gr";
import { BiLogoKubernetes } from "react-icons/bi";

import "./Projects.css";
import { FaNodeJs } from "react-icons/fa6";
export default function Projects() {
  return (
    <>
      <h2 className="title">Projects</h2>
      <div className="projects">
        <div className="project-card">
          <h4 className="project-title">Stocks Prediction App</h4>
          <div className="project-stack">
            <FaReact
              className="react"
              size={40}
              style={{ background: "transparent" }}
            />
            <FaNodeJs
              className="nodejs"
              size={40}
              style={{ background: "transparent" }}
            />
            <BiLogoPostgresql
              className="postgresql"
              size={40}
              style={{ background: "transparent" }}
            />
          </div>
        </div>
        <div className="project-card refugeaid">
          <h4 className="project-title ">Refugee Aid App</h4>
          <div className="project-stack">
            <FaReact
              className="react"
              size={40}
              style={{ background: "transparent" }}
            />
            <TbBrandDjango
              className="nodejs"
              size={40}
              style={{ background: "transparent" }}
            />
            <SiSqlite
              className="postgresql"
              size={40}
              style={{ background: "transparent" }}
            />
          </div>
        </div>
        <div className="project-card">
          <h4 className="project-title">Private Cloud App</h4>
          <div className="project-stack">
            <BiLogoGoogleCloud
              className="gcp"
              size={40}
              style={{ background: "transparent" }}
            />
            <GrDocker
              className="docker"
              size={40}
              style={{ background: "transparent" }}
            />
            <BiLogoKubernetes
              className="kubernetes"
              size={40}
              style={{ background: "transparent" }}
            />
          </div>
        </div>
        {/* <ul>
          Deployed a distributed application on GCP which allows different
          machines to collaborate.
        </ul>
        <ul>
          Utilised Kubernetes for container orchestration and Docker for image
          creation to streamline deployment and scalability.
        </ul>
        <ul>
          Google Spanner used as storage allowed our system to have consistency
          and fault tolerance
        </ul> */}
        {/* <ul>
          Created a Full stack app that allows new refugees to receive and
          search for help easily.
        </ul>
        <ul>
          Collaborated in an agile work environment with 7 colleagues, utilising
          Scrum.
        </ul>
        <ul>
          Utilised GitLab for efficient version control, ensuring regular
          updates and synchronisation of the project.
        </ul> */}
        {/* <ul>
          Developed a stocks investment decision tool through data analysis and
          simulation.
        </ul>
        <ul>
          Integrated stocks API for data collection, which are trained on a
          machine learning model.
        </ul>
        <ul>
          Created dynamic react components with unit tests for landing pages.
        </ul> */}
      </div>
    </>
  );
}
