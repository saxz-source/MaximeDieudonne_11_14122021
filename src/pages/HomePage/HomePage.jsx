import React, { Component } from "react";
import ImageBanner from "../../components/ImageBanner/ImageBanner";
import LocationList from "../../components/LocationList/LocationList";
const locationListItems = require("../../data/locationList.json");

class HomePage extends Component {
    render() {
        return (
            <main>
                <ImageBanner imageUrl="homeBannerImg.jpg" text="Chez-vous, " text2={"partout et ailleurs"} actualPage="home"/>
                <LocationList locationListItems={locationListItems} />
            </main>
        );
    }
}

export default HomePage;
