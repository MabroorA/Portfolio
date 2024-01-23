function ProjectsList(){
    const projects = [
        "Classification Project",
        "Financial assitant"
    ]
    
    projects.map(project => <li>{project}</li>)
    
    return (
        <>
            <h1>Projects</h1>
            <ul className="list-group list-group-numbered">
                {projects.map((project) => (
                    <li key={project}>{project}</li>
                ))}
            </ul>
        </>
    );
}
export default ProjectsList;