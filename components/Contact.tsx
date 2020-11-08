import React, { Component } from "react";

export default class Contact extends Component {
    render() {
        return (
            <div className="project-div hood" id="contact">
                <h2 className="centre-text">Contact</h2>
                <p className="centre-text">Link with me here...</p>
                <a
                    href="https://github.com/bud-smith/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/bud-smith/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:budsmith135@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Email
                </a>
            </div>
        );
    }
}
