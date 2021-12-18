import React, { Component } from "react";
import Dropdown from "../../components/DropDown/Dropdown";
import "./locationCaracs.css";

export default class LocationCaracs extends Component {
    constructor(props) {
        super(props);
        this.equipments = this.props.equipments;
        this.description = this.props.description;
    }

    render() {
        return (
            <section className="locationCaracsSection">
                <Dropdown
                    title={"Description"}
                    text={this.description}
                    pageFrom={"location"}
                />
                <Dropdown
                    title={"Équipements"}
                    text={this.equipments}
                    pageFrom={"location"}
                />
            </section>
        );
    }
}
