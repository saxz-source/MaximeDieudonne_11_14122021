import React, { Component } from "react";
import "./dropdown.css";

/** A DropDown Component */
export default class Dropdown extends Component {
    /**
     * Create a dropdown
     * @param {*} props props of the component
     * @param {string | string[]} props.text The text inside the dropDown
     * @param {string} props.title The title
     * @param {string} props.actualPage The page where the dropdown is displayed, useful for css properties
     */
    constructor(props) {
        super(props);
        this.text = props.text;
        this.title = props.title;
        this.actualPage = props.pageFrom;
        this.state = { open: false };
    }

    /**
     * Toggle the opening state
     * @returns {void}
     */
    handleOpening() {
        this.setState({ open: !this.state.open });
        return;
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
