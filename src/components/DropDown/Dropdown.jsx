import React, { Component } from "react";
import "./dropdown.css";

/// getTypoStyle entre en conflit avec le toggle open/close sur la div content > ajouter une div <p> pour le content

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.title = props.title;
        this.actualPage = props.pageFrom
        this.state = { open: false};
    }

    /**
     * Toggle the opening state
     * @returns {void}
     */
    handleOpening() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <section className="dropdownContainer">
                <div
                    className="dropdownHeader"
                    onClick={() => this.handleOpening()}
                >
                    <h2
                        className={
                            this.actualPage === "location"
                                ? "typoFromLocation"
                                : "typoFromAbout"
                        }
                    >
                        {this.title}
                    </h2>
                    <img
                        src="../assets/arrow.svg"
                        className="dropdownArrow"
                        style={{
                            transform: !this.state.open
                                ? "rotate(-180deg)"
                                : "rotate(0deg)",
                            transition: "0.4s",
                        }}
                        alt=""
                    ></img>
                </div>
                <div
                    className="dropdownContent"
                    style={{
                        display: !this.state.open ? "none" : "block",
                    }}
                >
                    {Array.isArray(this.text) ? (
                        this.text.map((item, index) => {
                            return (
                                <p
                                    key={item + index}
                                    className={`dropDownItem ${
                                        this.actualPage === "location"
                                            ? " typoFromLocation"
                                            : " typoFromAbout"
                                    }`}
                                >
                                    {item}
                                </p>
                            );
                        })
                    ) : (
                        <p
                            className={`dropDownItem ${
                                this.actualPage === "location"
                                    ? " typoFromLocation"
                                    : " typoFromAbout"
                            }`}
                        >
                            {this.text}
                        </p>
                    )}
                </div>
            </section>
        );
    }
}
