import React, { Component } from "react";
import "./gallery.css";

/** The gallery componenent displayed in the location place page */
export default class Gallery extends Component {
    /**
     * Create the gallery
     * @param {*} props props for the Gallery Component
     * @param  {string[]} props.pictures The array of pictures related to the location
     */
    constructor(props) {
        super(props);
        this.pictures = props.pictures;
        this.length = props.pictures.length;
        this.state = {
            displayedPicture: 0,
        };
    }

    /**
     * Handle the click on an arrow to change the image in the gallery
     * @param {string} direction plus | less
     * @returns {void}
     */
    handleClick(direction) {
        switch (direction) {
            case "plus":
                this.state.displayedPicture === this.length - 1
                    ? this.setState({ displayedPicture: 0 })
                    : this.setState({
                          displayedPicture: this.state.displayedPicture + 1,
                      });
                break;
            case "less":
                this.state.displayedPicture === 0
                    ? this.setState({ displayedPicture: this.length - 1 })
                    : this.setState({
                          displayedPicture: this.state.displayedPicture - 1,
                      });
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
