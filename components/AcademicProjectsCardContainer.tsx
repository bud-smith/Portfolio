import styles from "../styles/Home.module.css";
import React, { Component } from "react";
import PersonalProjects from "./PersonalProjects";

export default class PersonalProjectsCardContainer extends Component {
    render() {
        return this.props.academic_projects_list_prop.academic_projects_list.map(
            (academic_projects_list) => (
                <div className="grid-item card-hover">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">
                            {academic_projects_list.category}
                        </div>

                        <img src={academic_projects_list.image} />

                        <div className="card-body">
                            <h4 className="card-title">
                                {academic_projects_list.name}
                            </h4>
                        </div>
                    </div>
                </div>
            )
        );
    }
}
