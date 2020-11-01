import React, { Component } from "react";
import PersonalProjectsCardContainer from "./PersonalProjectsCardContainer";

export default class PersonalProjects extends Component {
    render() {
        return (
            <div id="personal-projects" className="project-div">
                <h1 className="centre-text">Personal Projects</h1>
                <p className="centre-text">
                    This is a set of my notable personal projects. Due to grow
                    soon.
                </p>
                <div className="grid-container">
                    <PersonalProjectsCardContainer />
                </div>
            </div>
        );
    }
}
