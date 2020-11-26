import React, { Component } from "react";

export default class Entry extends Component {
    render() {
        return (
            <div id="home" className="top-div">
                <div className="parallax entry-div">
                    <div>
                        <h1 className="text-stroke entry-div-text">
                            BUD SMITH
                        </h1>
                        <h2 className="text-stroke entry-div-text">
                            SOFTWARE DEVELOPER
                        </h2>
                    </div>
                </div>

                <style jsx>{`
                    .top-div {
                        overflow: hidden;
                    }

                    .entry-div {
                        min-height: 32vh;
                        padding: 9.5vh 0;
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

                        transform: scale(1.25);
                        overflow: auto;
                    }

                    .entry-div-text {
                        font-family: "Open Sans";
                    }

                    h1 {
                        font-size: 52px;
                    }

                    h2 {
                        font-size: 38px;
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
