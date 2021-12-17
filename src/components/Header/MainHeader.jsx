import React, { Component } from "react";
import MainNav from "./MainNav/MainNav";
import { Link } from "react-router-dom";
import "./mainHeader.css"


export default class MainHeader extends Component {
    render() {
        return (
            <header className="mainHeader">
                <Link to="/">
                    <img src="../assets/LOGO.svg" className="headerLogo" alt="logo de kasa"></img>
                </Link>
                <MainNav />
            </header>
        );
    }
}
