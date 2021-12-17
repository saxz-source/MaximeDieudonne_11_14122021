import React, { Component } from "react";
import './hostPerson.css'

export default class HostPerson extends Component {
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
