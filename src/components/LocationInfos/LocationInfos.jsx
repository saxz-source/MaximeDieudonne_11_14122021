import React, { Component } from "react";
import HostPerson from "../HostPerson/HostPerson";
import TagList from "../TagList/TagList";
import Rating from "../Rating/Rating";
import "./locationInfos.css";

export default class LocationInfos extends Component {
    constructor(props) {
        super(props);
        this.locationPlace = props.locationPlace;
    }

    render() {
        return (
            <div className="locationInfos">
                <div className="locationInfosFirst">
                    <h1>{this.locationPlace.title ?? "Titre inconnu"}</h1>
                    <p className="localisation">
                        {this.locationPlace.location ?? "Emplacement inconnu"}
                    </p>
                    <TagList tagList={this.locationPlace.tags} />
                </div>

                <div className="locationInfosSecond">
                    <div className="hostAndRating">
                        <HostPerson
                            host={this.locationPlace.host ?? "Nom inconnu"}
                        />
                        <Rating rating={this.locationPlace.rating} />
                    </div>
                </div>
            </div>
        );
    }
}
