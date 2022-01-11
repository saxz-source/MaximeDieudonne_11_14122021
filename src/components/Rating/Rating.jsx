import React, { Component } from "react";
import "./rating.css";


/** the stars list corresponding to the rating */
export default class Rating extends Component {

    /**
     * Build the stars list corresponding to the rating
     * @param {*} props 
     * @param {number} props.rating the raing of the location place
     */
    constructor(props) {
        super(props);
        this.rating = Number(props.rating);
        this.fakeArray = [1, 2, 3, 4, 5];
    }

    render() {
        return (
            <div className="rateRange">
                {this.fakeArray.map((index) => {
                 return   index <= this.rating ? (
                        <img src="../assets/rateStarRed.svg" alt="" className="rateStart" key={`rate${index}+${this.rating}`}/>
                    ) : (
                        <img src="../assets/rateStarGrey.svg" alt="" className="rateStart" key={`rate${index}+${this.rating}`} />
                    );
                })}
            </div>
        );
    }
}
