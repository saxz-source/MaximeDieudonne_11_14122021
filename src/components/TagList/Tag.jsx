import React, { Component } from "react";

export default class Tag extends Component {
    constructor(props) {
        super(props);
        this.text = props.tagName;
    }

    render() {
        return <div className="tag">{this.text}</div>;
    }
}
