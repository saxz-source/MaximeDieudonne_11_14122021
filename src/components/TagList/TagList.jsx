import React, { Component } from "react";
import Tag from "./Tag";
import './tag.css'

export default class TagList extends Component {
    constructor(props) {
        super(props);
        this.tagList = this.props.tagList;
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
