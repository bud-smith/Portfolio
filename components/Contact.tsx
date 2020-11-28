import React, { Component } from "react";

export default class Contact extends Component {
    render() {
        return (
            <div className="segment" id="contact">
                <h2 className="centre-text">Contact</h2>
                <p className="centre-text">Link with me here...</p>
                <div>
                    <a href="https://github.com/bud-smith/" target="_blank" rel="noopener noreferrer">
                        <img src="../images/technologies/github.svg" alt="GitHub logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/bud-smith/" target="_blank" rel="noopener noreferrer">
                        <img src="../images/technologies/linkedin.svg" alt="LinkedIn logo"/>
                    </a>
                    <a href="mailto:budsmith135@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="../images/technologies/mail.svg" alt="Email logo"/>
                    </a>
                </div>
                <style jsx>{`
                    div {
                        text-align: center;
                    }

                    a {
                        padding: 12px
                    }
                `}</style>
            </div>
        );
    }
}
