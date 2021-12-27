import React, { Component } from "react";
import "./dropdown.css";

/// getTypoStyle entre en conflit avec le toggle open/close sur la div content > ajouter une div <p> pour le content

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.title = props.title;
        this.state = { open: false, pageFrom: props.pageFrom };
    }

    /**
     * Toggle the opening state
     * @returns {void}
     */
    handleOpening() {
        this.setState({ open: !this.state.open });
    }

    /**
     * Define the style for the element according to the page they're shown
     * @returns {{fontSize: string, lineHeight : string}}
     */
    getTypoStyle() {
        return this.state.pageFrom === "location"
            ? { fontSize: "1.1rem", lineHeight: "1.6rem" }
            : { fontSize: "1.5rem", lineHeight: "2.2rem" };
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
                            this.state.pageFrom === "location"
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
                                        this.state.pageFrom === "location"
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
                                this.state.pageFrom === "location"
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
