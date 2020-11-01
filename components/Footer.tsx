import styles from "../styles/Home.module.css";
import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <a
                    href="https://github.com/bud-smith/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Copyright &copy; 2020. All rights reserved.
                </a>
            </footer>
        );
    }
}
