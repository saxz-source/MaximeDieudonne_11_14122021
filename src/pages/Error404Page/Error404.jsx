import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Error404.css"

export default class Error404 extends Component {
    render() {
        return (
            <main>
                <div className="errorNumber">404</div>
                <p className="errorSentence">Oups, la page que vous demandez n'existe pas</p>
                <Link to="/" className="errorBackLink">Retournez sur la page d'accueil</Link>
            </main>
        );
    }
}
