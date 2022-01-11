import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./locationList.css";


/** The template of the location list on the main page */
export default class LocationList extends Component {

    /**
     * Build the location list on main page
     * @param {*} props 
     * @param {[]} props.locationListItems The array of all location place items
     */
    constructor(props) {
        super(props);
        this.locationList = props.locationListItems
            ? props.locationListItems
            : null;
    }

    render() {
        return (
            <section className="locationList">
                {this.locationList?.map((location) => {
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
                                    {location.title ?? "Titre inconnu"}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </section>
        );
    }
}
