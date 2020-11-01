import styles from "../styles/Home.module.css";
import React, { Component } from "react";

class Entry extends Component {
    render() {
        return (
            <div className="entry-div parallax">
                <h1 className="text-stroke entry-div-text">BUD SMITH</h1>
                <h2 className="text-stroke entry-div-text">
                    SOFTWARE DEVELOPER
                </h2>

                <style jsx>{`
                    .entry-div {
                        min-height: 25vh;
                        padding: 5.8vh 0;
                        text-align: center;
                        justify-content: center;
                        align-items: center;
                    }

                    .parallax {
                        background-image: url("../images/background.jpg");
                        background-attachment: fixed;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }

                    .entry-div-text {
                        font-family: "Open Sans";
                    }

                    h1 {
                        font-size: 64px;
                    }

                    h2 {
                        font-size: 48px;
                    }

                    .text-stroke {
                        color: white;
                        text-shadow: 1px 1px 2px black, 0 0 1em black,
                            0 0 0.2em black;
                    }
                `}</style>
            </div>
        );
    }
}

export default Entry;
