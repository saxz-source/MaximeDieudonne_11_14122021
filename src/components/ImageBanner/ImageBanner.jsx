import React, { Component } from "react";
import "./imageBanner.css";

/** A banner displayed with a background image and a title inside */
export default class ImageBanner extends Component {
    /**
     * The image banner constructor parameters
     * @param {*} props
     * @param {string} props.text1 The text displayd in the banner, part 1
     * @param {string} props.text2 The text displayd in the banner, part 2
     * @param {string} props.imageUrl The url of the image displayed
     * @param {string} props.actualPage The page where is displayed the banner
     */
    constructor(props) {
        super(props);
        this.text = props.text ?? "";
        this.text2 = props.text2 ?? "";
        this.imageUrl = props.imageUrl
            ? `url(../assets/${props.imageUrl})`
            : null;
        this.actualPage = props.actualPage ? props.actualPage : "";
    }

    render() {
        return (
            <div
                className={`homeBannerImage ${
                    this.actualPage === "home" ? "home" : null
                }`}
                style={{ backgroundImage: this.imageUrl }}
            >
                <div className="homeBannerFilter"> </div>
                <div className="homeBannerText">
                    <p className="homeBannerSentence">{this.text} &nbsp;</p>
                    <p className="homeBannerSentence">{this.text2}</p>
                </div>
            </div>
        );
    }
}
