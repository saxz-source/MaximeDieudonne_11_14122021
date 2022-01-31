import React, { Component } from "react";
import Gallery from "../../components/Gallery/Gallery";
import LocationInfos from "../../components/LocationInfos/LocationInfos";
import LocationCaracs from "./LocationCaracs";
import { getLocationItem } from "../../data/getDatas";
import Loader from "../../components/Loader/Loader";
import LoadingError from "../../components/Errors/LoadingError";

export default class LocationPage extends Component {
    constructor() {
        super();
        this.state = {
            locationPlace: null,
            isLoading: true,
            error: false,
        };
        this.locationId = "";
    }

    componentDidMount() {
        // get location id from url params
        const locationId = window.location.pathname.split("/")[2];
        // fetch the corresponding item
        getLocationItem(locationId)
            .then((item) => {
                setTimeout(this.justWait, 1000, item);
            })
            .catch((err) => {
                this.setState({
                    error: true,
                });
                this.redirectTo404();
            });
    }

    /**
     * Redirect to page 404
     * @returns {void}
     */
    redirectTo404() {
        window.location.href = "http://localhost:3000/404";
        return;
    }

    /**
     * Just simulate a fetch time
     * @param {any{}} item the location item object
     * @returns {void}
     */
    justWait = (item) => {
        this.setState({
            locationPlace: item,
            isLoading: false,
        });
        return;
    };

    render() {
        return (
            <main>
                {this.state.isLoading && <Loader />}
                {this.state.error && <LoadingError />}
                {this.state.locationPlace && (
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
