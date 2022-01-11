import React, { Component } from "react";
import Tag from "./Tag";
import './tag.css'

/**
 * The template of the tag list
 */
export default class TagList extends Component {
    /**
     * Build the template of the tag list
     * @param {*} props 
     * @param {string[]} props.tagList the list of tags related to the location place
     */
    constructor(props) {
        super(props);
        /** The array of tags @type {string[]} */
        this.tagList = props.tagList;
    }

    render() {
        return (
            <div className="tagList">
                {this.tagList.map((tag, index) => {
                    return <Tag tagName={tag} key={index + tag} />;
                })}
            </div>
        );
    }
}
