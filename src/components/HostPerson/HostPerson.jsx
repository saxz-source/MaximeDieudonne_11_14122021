import React, { Component } from "react";
import './hostPerson.css'

/** Informations about the host of the location place */
export default class HostPerson extends Component {
    /**
     * Build the host person
     * @param {*} props
     * @param {{name :string, imageUrl : string}} props.host
     */
    constructor(props) {
        super(props);
        this.name = props.host.name;
        this.imageUrl = props.host.picture;
    }

    render() {
        return (
            <div className="hostInfos">
                <p>
                    {this.name}
                </p>
                <img src={this.imageUrl} alt={`Photographie de ${this.name}`} className="hostImage"/>
            </div>
        )
    }
}
