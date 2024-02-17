import "./Projects.css";
export default function Projects() {
  return (
    <>
      <div className="projects-container">
        <h2>Projects</h2>
        <h4>Stocks Prediction App</h4>
        <ul>
          Developed a stocks investment decision tool through data analysis and
          simulation.
        </ul>
        <ul>
          Integrated stocks API for data collection, which are trained on a
          machine learning model.
        </ul>
        <ul>
          Created dynamic react components with unit tests for landing pages.
        </ul>

        <h4>Refugee Aid App</h4>
        <ul>
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
        </ul>

        <h4>Private Cloud Whiteboard App</h4>
        <ul>
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
        </ul>
      </div>
    </>
  );
}
