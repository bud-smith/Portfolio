import React, { Component } from "react";
import ModalView from "../components/ModalView";

export default class PersonalProjectsCardContainer extends Component {
    render() {
        return this.props.personal_projects_list_prop.personal_projects_list.map(
            (personal_projects_list) => (
                <ModalView>
                    <div className="grid-item card-hover">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header">
                                {personal_projects_list.category}
                            </div>

                            <img src={personal_projects_list.image} />

                            <div className="card-body">
                                <h4 className="card-title">
                                    {personal_projects_list.name}
                                </h4>
                            </div>
                        </div>
                    </div>
                </ModalView>
            )
        );
    }
}
