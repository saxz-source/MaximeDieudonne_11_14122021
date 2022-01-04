import React, { Component } from "react";
import Gallery from "../../components/Gallery/Gallery";
import LocationInfos from "../../components/LocationInfos/LocationInfos";
import LocationCaracs from "./LocationCaracs";
import { getLocationItem } from "../../data/getDatas";
import Loader from "../../components/Loader/Loader";

export default class LocationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationPlace: null,
            isLoading: true,
            error: false,
        };
        this.locationId = "";
    }

    componentDidMount() {
        const locationId = window.location.pathname.split("/")[2];
        getLocationItem(locationId)
            .then((item) => {
                this.setState({
                    locationPlace: item,
                    isLoading: false,
                });
            })
            .catch((err) => {
                this.setState({
                    error: true,
                });
            });
    }

    render() {
        return (
            <main>
                {this.state.isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <Gallery
                            pictures={this.state.locationPlace.pictures}
                            imgAlt={`Photographie de la location ${this.state.locationPlace.title}`}
                        />
                        <LocationInfos
                            locationPlace={this.state.locationPlace}
                        />
                        <LocationCaracs
                            equipments={this.state.locationPlace.equipments}
                            description={this.state.locationPlace.description}
                        />
                    </>
                )}
            </main>
        );
    }
}
