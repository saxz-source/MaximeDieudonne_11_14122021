import React, { Component } from "react";
import "./errors.css"

export default class LoadingError extends Component {
    constructor() {
        super()
        this.loadingErrorText =
            "Erreur de chargement des données. Vérifiez votre connexion ou rééssayez plus tard";
    }

    render() {
        return (
            <div className="errorDiv">
                <p>{this.loadingErrorText}</p>
            </div>
        );
    }
}
