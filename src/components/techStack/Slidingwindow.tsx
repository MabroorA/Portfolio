import { BiLogoKubernetes, BiLogoSpringBoot } from 'react-icons/bi'
import { DiMysql } from 'react-icons/di'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { GrDocker } from 'react-icons/gr'
import "./Slidingwindow.css"

export default function Slidingwindow() {
  return (
    <>

      <div className="slidingwindow">
        <div className="slide-item">
          <ul className="react">
            <FaReact size={33} /> React
          </ul>
          <ul className="nodejs">
            <FaNodeJs size={33} /> Nodejs
          </ul>
          <ul className="mysql">
            {" "}
            <DiMysql size={33} /> My<span className="sql">SQL</span>
          </ul>
          <ul className="springboot">
            <BiLogoSpringBoot size={33} /> Spring Boot
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
