import React, { Component } from "react";
import "./rating.css";

export default class Rating extends Component {
    constructor(props) {
        super(props);
        this.rating = Number(props.rating);
        this.fakeArray = [1, 2, 3, 4, 5];
    }

    render() {
        return (
            <div>
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
