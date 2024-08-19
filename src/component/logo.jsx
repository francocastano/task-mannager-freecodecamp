import React from "react";
import freeCodeCamp from '../images/freecodecamp-logo.png'
import "../stylesheet/logo.css"

function Logo() {

    return (
        <div className="container">
            <img src={freeCodeCamp} alt="" className="logo"/>
        </div>
    )
}

export default Logo;