import React, { Component } from "react";


/** Display a tag name */
export default class Tag extends Component {

    /**
     * Display a tagName
     * @param {*} props 
     * @param {string} props.tagName the name of a tag
     */
    constructor(props) {
        super(props);
        /** The name of the tag @type {string} */
        this.text = props.tagName;
    }

    render() {
        return <div className="tag">{this.text}</div>;
    }
}
