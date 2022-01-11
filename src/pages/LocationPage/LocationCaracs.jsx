import React, { Component } from "react";
import Dropdown from "../../components/DropDown/Dropdown";
import "./locationCaracs.css";

/** The template for the dropdowns in the location place page */
export default class LocationCaracs extends Component {
    /**
     * Display text elements in the dropdows
     * @param {*} props
     * @param {string[]} props.equipements the list of the locaiton place equipments
     * @param {string} props.description the description of the locaiton place
     */
    constructor(props) {
        super(props);
        this.equipments = props.equipments;
        this.description = props.description;
    }

    render() {
        return (
            <section className="locationCaracsSection">
                <Dropdown
                    title={"Description"}
                    text={this.description ?? "Description non répertoriée"}
                    pageFrom={"location"}
                />
                <Dropdown
                    title={"Équipements"}
                    text={this.equipments ?? "Equipements non répertoriés"}
                    pageFrom={"location"}
                />
            </section>
        );
    }
}
