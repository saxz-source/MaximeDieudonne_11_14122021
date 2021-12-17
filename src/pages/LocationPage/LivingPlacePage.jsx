import React, { Component } from "react";
import Gallery from "../../components/Gallery/Gallery";
import LocationInfos from "../../components/LocationInfos/LocationInfos";
import LocationCaracs from "./LocationCaracs";
const locationListItems = require("../../data/locationList.json");

export default class LocationPage extends Component {
    constructor(props) {
        super(props);
        this.locationPlace = locationListItems.filter(
            (l) => l.id === window.location.pathname.split("/")[2]
        )[0];
    }

    componentDidMount() {
        console.log(this.locationPlace);

    }

    render() {
        return (
            <main>
                <Gallery pictures={this.locationPlace.pictures} imgAlt={ `Photographie de la location ${this.locationPlace.title}`   } />
                <LocationInfos locationPlace={this.locationPlace} />
                <LocationCaracs equipments={this.locationPlace.equipments} description={this.locationPlace.description} />
            </main>
        );
    }
}
