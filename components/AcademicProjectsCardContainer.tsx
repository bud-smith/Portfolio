import React, { Component } from "react";
import ModalView from "../components/ModalView";

interface IAcademicProjectsList {
    [index: number]: {
        id?: number;
        name?: string;
        description?: string;
        technologies?: string;
        demo?: string;
        source?: string;
    };
}

export default class AcademicProjectsCardContainer extends Component {
    constructor(props: IAcademicProjectsList) {
        super(props);

        this.state = {
            academic_projects_list: [
                {
                    id: 0,
                    name: "N-Queens",
                    category: "Artificial Intelligence",
                    description:
                        "N-Queens is the problem of placing n number of queens on a chessboard of size n×n in which no queens can attack each other. This implementation uses an uninformed search strategy to find all solutions being breadth-first search (BFS), and two local search strategies to find a single solution being hill-climbing search and simulated annealing (SA) search.",
                    technologies: ["C++"],
                    demo: "https://n-queens.buds1.repl.run/",
                    source:
                        "https://github.com/bud-smith/University-Projects/tree/main/N-Queens",
                    image: "../images/n-queens.png",
                },
                {
                    id: 1,
                    name: "Alarm Surgo",
                    category: "Hybrid Mobile Application",
                    description:
                        "Alarm Surgo is a hybrid mobile application. The apps features include creating, editing, and deleting alarms, checking the latest news and weather using various public API's, and choosing a personalised location to view the news and weather from anywhere in the world.",
                    technologies: [
                        "Angular",
                        "Ionic",
                        "TypeScript",
                        "HTML5",
                        "CSS",
                    ],
                    demo:
                        "https://appetize.io/app/dadcbhk6xkj3p3gf5cv35xxjfc?device=pixel4xl&scale=75&orientation=portrait&osVersion=10.0&deviceColor=black",
                    source:
                        "https://github.com/bud-smith/University-Projects/tree/main/Alarm-Surgo",
                    image: "../images/alarm.png",
                },
            ],
        };
    }

    render() {
        return this.state.academic_projects_list.map(
            (academic_projects_list) => (
                <ModalView projects_list_prop={academic_projects_list}>
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
