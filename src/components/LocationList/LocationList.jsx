import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./locationList.css";

export default class LocationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationList: this.props.locationListItems
                ? this.props.locationListItems
                : null,
        };
    }

    render() {
        return (
            <section className="locationList">
                {this.state.locationList?.map((location) => {
                    return (
                        <Link
                            to={{
                                pathname: `location/${location.id}`,
                                state: { locationId: location.id },
                            }}
                            key={location.id}
                        >
                            <div
                                className="locationItem"
                                style={{
                                    backgroundImage: `url(${location.cover})`,
                                }}
                            >
                                <div className="locationItemFilter"> </div>
                                <p className="locationTitle">
                                    {location.title}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </section>
        );
    }
}
