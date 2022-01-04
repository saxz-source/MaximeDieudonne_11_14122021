import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./mainNav.css";

export default class MainNav extends Component {
    render() {
        return (
            <nav className="mainNav">
                <NavLink to="/" className="navItem">
                    Accueil
                </NavLink>
                <NavLink to="/about" className="navItem">
                    A propos
                </NavLink>
            </nav>
        );
    }
}
