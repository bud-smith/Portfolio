import React, { Component } from "react";
import AcademicProjectsCardContainer from "./AcademicProjectsCardContainer";

export default class AcademicProjects extends Component {
    render() {
        return (
            <div id="academic-projects" className="project-div">
                <h1 className="centre-text">Academic Projects</h1>
                <p className="centre-text">
                    This is a set of my notable academic projects/assignments.
                </p>
                <div className="grid-container">
                    <AcademicProjectsCardContainer />
                </div>
            </div>
        );
    }
}
