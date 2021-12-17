import React, { Component } from "react";
import Dropdown from "../../components/DropDown/Dropdown";

export default class LocationCaracs extends Component {
    constructor(props) {
        super(props);
        this.equipments = this.props.equipments;
        this.description = this.props.description;
    }

    render() {
        return (
            <section>
                <Dropdown title={"Description"} text={this.description} />
                <Dropdown title={"Équipements"} text={this.equipments} />
            </section>
        );
    }
}
