import React, { Component } from "react";
import "./gallery.css";

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.pictures = this.props.pictures;
        this.length = this.props.pictures.length;
        this.state = {
            displayedPicture: 0,
        };
    }

    handleClick(direction) {
        switch (direction) {
            case "plus":
                this.state.displayedPicture === this.length -1
                    ? this.setState({ displayedPicture: 0 })
                    : this.setState({
                          displayedPicture: this.state.displayedPicture + 1,
                      });
                console.log(this.state.displayedPicture);

                break;
            case "less":
                this.state.displayedPicture === 0
                    ? this.setState({ displayedPicture: this.length -1 })
                    : this.setState({
                          displayedPicture: this.state.displayedPicture - 1,
                      });

                console.log(this.state.displayedPicture);

                break;
            default:
                return;
        }
    }

    render() {
        return (
            <div
                className="galleryContainer"
                style={{
                    backgroundImage: `url(${
                        this.pictures[this.state.displayedPicture]
                    })`,
                }}
            >
                <img
                    src="../assets/arrowRight.svg"
                    alt=""
                    className="arrowRight"
                    onClick={() => {
                        this.handleClick("plus");
                    }}
                />
                <img
                    src={"../assets/arrowLeft.svg"}
                    alt=""
                    className="arrowLeft"
                    onClick={() => {
                        this.handleClick("less");
                    }}
                />
                <span className="galleryIndicator">
                    {`${this.state.displayedPicture + 1}/${this.length}`}
                </span>
            </div>
        );
    }
}
