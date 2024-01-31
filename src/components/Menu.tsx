


// Experience: "web dev @ Minibikers",
//         Education: "Uni of Leicester & WQE ",
//         Projects: "Project list will go here ",
//         Learning : "typescript",

export default function Menu() {
    const menulist = [
        "web dev @ Minibikers",
        "Uni of Leicester & WQE ",
        "Project list will go here ",
        "typescript",

    ]

    menulist.map(item => <li>{item}</li>)

    return (
        <>
            <ul className="menu_items">
                <a href="#about">About</a>
                <a href="#home">Experience</a>
                <a href="#news">Projects</a>
                <a href="#contact">Education</a>
            </ul>
        </>
    );
}