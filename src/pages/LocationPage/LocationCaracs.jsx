import React, { Component } from "react";
import Dropdown from "../../components/DropDown/Dropdown";
import "./locationCaracs.css";

export default class LocationCaracs extends Component {
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
