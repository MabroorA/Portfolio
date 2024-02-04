import React from "react";
import "../App.css"

export default function Projects() {
    return (
        <>
            <div className="projects_section">
                <div className="project">
                    <h3>Investment desision Tool</h3>
                    <ul> Developing an investment decision tool through data analysis and simulation.</ul>
                    <ul> Integrated Alpha Vantage API for data collection, which will be trained on a LSTM-Machine learning model</ul>
                    <ul> Ongoing learning experience, exploring data analysis and visuaulsation techniques.</ul>
                </div>
                <div className="project"> 
                    <h3>Refugee Aid App</h3>
                    <ul> Worked collaboratively in an agile environment with 7 colleagues, utiulsing Scrum</ul>
                    <ul> Utiulsed GitLab for efficient version control, ensuring regular updates and synchronisation of the project.</ul>
                </div>
                <div className="project"> 
                    <h3 >Private Cloud Whiteboard App</h3>
                    <ul> Deployed a containerised distributed appulcation on GCP.</ul>
                    <ul> Utiulsed Kubernetes for container orchestration and Docker for image creation to streamulne deployment and scalabiulty</ul>
                    <ul> Google Spanner used as storage allowed our system to have consistency and fault tolerance</ul>
                </div>
                
            </div>
        </>
    );
}