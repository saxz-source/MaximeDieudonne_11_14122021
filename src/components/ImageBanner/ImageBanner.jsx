import React, { Component } from "react";
import "./imageBanner.css";

export default class ImageBanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text ? props.text : null,
            imageUrl: props.imageUrl
                ? `url(../assets/${props.imageUrl})`
                : null,
            actualPage: props.actualPage ? props.actualPage : "",
        };
    }

    render() {
        return (
            <div
                className={`homeBannerImage ${
                    this.state.actualPage === "home" ? "home" : null
                }`}
                style={{ backgroundImage: this.state.imageUrl }}
            >
                <div className="homeBannerFilter"> </div>
                <p className="homeBannerSentence">{this.state.text}</p>
            </div>
        );
    }
}
