import React, { Component } from "react";
import "./imageBanner.css";

export default class ImageBanner extends Component {
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
