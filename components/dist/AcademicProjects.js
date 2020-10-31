"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var AcademicProjectsCardContainer_1 = require("./AcademicProjectsCardContainer");
var AcademicProjects = /** @class */ (function (_super) {
    __extends(AcademicProjects, _super);
    function AcademicProjects(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            academic_projects_list: [
                {
                    id: 0,
                    name: "N-Queens",
                    category: "Artificial Intelligence",
                    description: "N-Queens is the problem of placing n number of queens on a chessboard of size n×n in which no queens can attack each other. This implementation uses an uninformed search strategy to find all solutions being breadth-first search (BFS), and two local search strategies to find a single solution being hill-climbing search and simulated annealing (SA) search.",
                    technologies: ["C++"],
                    demo: "https://n-queens.buds1.repl.run/",
                    source: "https://github.com/bud-smith/University-Projects/tree/main/N-Queens"
                },
                {
                    id: 1,
                    name: "Alarm Surgo",
                    category: "Hybrid Mobile Application",
                    description: "Alarm Surgo is a hybrid mobile application. The apps features include creating, editing, and deleting alarms, checking the latest news and weather using various public API's, and choosing a personalised location to view the news and weather from anywhere in the world.",
                    technologies: [
                        "Angular",
                        "Ionic",
                        "TypeScript",
                        "HTML5",
                        "CSS",
                    ],
                    demo: "https://appetize.io/app/dadcbhk6xkj3p3gf5cv35xxjfc?device=pixel4xl&scale=75&orientation=portrait&osVersion=10.0&deviceColor=black",
                    source: "https://github.com/bud-smith/University-Projects/tree/main/Alarm-Surgo"
                },
            ]
        };
        return _this;
    }
    AcademicProjects.prototype.render = function () {
        return (react_1["default"].createElement("div", { id: "academic-projects", className: "project-div" },
            react_1["default"].createElement("h1", { className: "centre-text" }, "Academic Projects"),
            react_1["default"].createElement("p", { className: "centre-text" }, "This is a set of my notable academic projects/assignments."),
            react_1["default"].createElement(AcademicProjectsCardContainer_1["default"], { academic_projects_list_prop: this.state })));
    };
    return AcademicProjects;
}(react_1.Component));
exports["default"] = AcademicProjects;
