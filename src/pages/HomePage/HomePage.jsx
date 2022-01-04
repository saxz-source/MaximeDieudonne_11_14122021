import React, { Component } from "react";
import ImageBanner from "../../components/ImageBanner/ImageBanner";
import LocationList from "../../components/LocationList/LocationList";
import { getLocationList } from "../../data/getDatas";
import Loader from "../../components/Loader/Loader";

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
        getLocationList()
            .then((locationList) => {
                this.setState({
                    locationListItems: locationList,
                    isLoading: false,
                });
            })
            .catch((err) => {
                this.setState({ error: true });
            });
    }

    render() {
        return (
            <main>
                <ImageBanner
                    imageUrl="homeBannerImg.jpg"
                    text="Chez-vous, "
                    text2={"partout et ailleurs"}
                    actualPage="home"
                />
                {this.state.isLoading ? (
                    <Loader />
                ) : (
                    <LocationList
                        locationListItems={this.state.locationListItems}
                    />
                )}
            </main>
        );
    }
}

export default HomePage;
