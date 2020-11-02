import React, { Component } from "react";
import ModalView from "../components/ModalView";

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

export default class PersonalProjectsCardContainer extends Component {
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
                        "next-js",
                        "react",
                        "typescript",
                        "html5",
                        "css3",
                        "nginx",
                        "git",
                        "github",
                    ],
                    source: "https://github.com/bud-smith/Portfolio",
                    image: "../images/code.png",
                },
            ],
        };
    }

    render() {
        return this.state.personal_projects_list.map(
            (personal_projects_list) => (
                <ModalView projects_list_prop={personal_projects_list}>
                    <div className="grid-item card-hover">
                        <div className="card text-white bg-primary">
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
