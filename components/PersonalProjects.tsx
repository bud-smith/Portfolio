import styles from "../styles/Home.module.css";
import React, { Component } from "react";
import PersonalProjectsCardContainer from "./PersonalProjectsCardContainer";

interface IPersonalProjectsList {
    [index: number]: {
        id?: number;
        name?: string;
        description?: string;
        technologies?: string;
        demo?: string;
        source?: string;
    };
}

class PersonalProjects extends Component {
    constructor(props: IPersonalProjectsList) {
        super(props);

        this.state = {
            personal_projects_list: [
                {
                    id: 0,
                    name: "Portfolio",
                    category: "Front-end Web Development",
                    description:
                        "Personal portfolio that showcases my notable software projects.",
                    technologies: [
                        "next.js",
                        "react.js",
                        "JSX",
                        "TypeScript",
                        "HTML5",
                        "CSS",
                        "Git",
                        "GitHub",
                    ],
                    source: "https://github.com/bud-smith/Portfolio",
                },
            ],
        };
    }

    render() {
        return (
            <div id="personal-projects" className="project-div">
                <h1 className="centre-text">Personal Projects</h1>
                <p className="centre-text">
                    This is a set of my notable personal projects. Due to grow
                    soon.
                </p>
                <PersonalProjectsCardContainer
                    personal_projects_list_prop={this.state}
                />
            </div>
        );
    }
}

export default PersonalProjects;
