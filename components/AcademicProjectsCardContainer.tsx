import React, { Component } from "react";
import ModalView from "../components/ModalView";

export default class AcademicProjectsCardContainer extends Component {
    render() {
        return this.props.academic_projects_list_prop.academic_projects_list.map(
            (academic_projects_list) => (
                <ModalView>
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
                </ModalView>
            )
        );
    }
}
