import React, { Component } from "react";
import ImageBanner from "../../components/ImageBanner/ImageBanner";
import LocationList from "../../components/LocationList/LocationList";
import { getLocationList } from "../../data/getDatas";
import Loader from "../../components/Loader/Loader";
import LoadingError from "../../components/Errors/LoadingError";

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            locationListItems: null,
            isLoading: true,
            error: false,
        };
    }

    componentDidMount() {
        // Fetch the location list
        getLocationList()
            .then((locationList) => {
                setTimeout(this.justWait, 1000, locationList);
            })
            .catch(() => {
                this.setState({
                    error: true,
                    isLoading: false,
                });
            });
    }

    /**
     * Just simulate a fetch Time
     * @param {any{}[]} locationList the whole location list
     * @returns {void} 
     */
    justWait = (locationList) => {
        this.setState({
            locationListItems: locationList,
            isLoading: false,
        });
        return;
    };

    render() {
        return (
            <main>
                <ImageBanner
                    imageUrl="homeBannerImg.jpg"
                    text="Chez-vous, "
                    text2={"partout et ailleurs"}
                    actualPage="home"
                />
                {this.state.isLoading && <Loader />}
                {this.state.error && <LoadingError />}
                {this.state.locationListItems && (
                    <LocationList
                        locationListItems={this.state.locationListItems}
                    />
                )}
            </main>
        );
    }
}

export default HomePage;
