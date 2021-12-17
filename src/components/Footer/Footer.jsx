import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <img src="../assets/LOGOwhite.svg" alt='logo de Kasa'></img>
                <p> &#169; 2020 Kasa. All rights reserved</p>
            </footer>
        )
    }
}
