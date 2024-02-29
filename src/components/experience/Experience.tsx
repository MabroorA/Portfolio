import "./Experience.css";

export default function Experience() {
  
  return (
    <>
      <section className="experience">
        <h2 className="title">Experience</h2>
        <div className="experiences">
          <div className="experience-card">
            <div className="experience-card-header">
              <h4 className="experience-title">Web Developer Intern</h4>
              <p className="company-name">Minibikers</p>
            </div>
            <div className="experience-description">
              <ul>
                <li>
                  Worked in an agile working environment with sprint-like
                  checkpoints, ensuring efficient progress and timely task
                  completion.
                </li>
                <li>
                  Implemented front-end features using HTML, CSS, and JavaScript
                  to enhance user experience.
                </li>
                <li>
                  Optimized website performance by analyzing and refining code
                  for improved loading times.
                </li>
              </ul>
            </div>
          </div>
          <div className="experience-card">
            <div className="experience-card-header">
              <h4 className="experience-title">Shopify Developer</h4>
              <p className="company-name">Miero</p>
            </div>
            <div className="experience-description">
              <ul>
                <li>
                  Designed and built a jewellery e-commerce store on Shopify for
                  emerging jewellery items.
                </li>
                <li>
                  Implemented UX/UI principles to create high converting product
                  and checkout pages.
                </li>
                <li>
                  Improved mobile experience, reducing bounce rates by 15% and
                  increasing revenue.
                </li>
              </ul>
            </div>
          </div>
          <div className="experience-card">
            <div className="experience-card-header">
              <h4 className="experience-title">Teaching Assistant</h4>
              <p className="company-name">University of Leicester</p>
            </div>
            <div className="experience-description">
              <ul>
                <li>
                  Served as a Teaching Assistant for the Requirements
                  Engineering and Professional Practice.
                </li>
                <li>
                  Assisted students with teamwork, GitLab, and software
                  requirement gathering, supporting them in collaborative group
                  experiences utilizing Git.
                </li>
                <li>
                  Guided students in creating high-quality requirements,
                  sketches, prototypes, and UML models.
                </li>
              </ul>
            </div>
          </div>
          <div className="experience-card">
            <div className="experience-card-header">
              <h4 className="experience-title">Audio Transmissions Intern</h4>
              <p className="company-name">MTA TV Channel</p>
            </div>
            <div className="experience-description">
              <ul>
                <li>
                  Collaborated with a professional team to plan, organize, and
                  install audio systems.
                </li>
                <li>
                  Gained hands-on experience by shadowing audio engineers during
                  the mixing and adjustment of audio.
                </li>
                <li>
                  Demonstrated problem-solving skills to complete tasks within
                  specified time constraints.
                </li>
              </ul>
            </div>
          </div>
          {/* Add additional experiences here */}
        </div>
      </section>
    </>
  );
}