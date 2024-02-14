import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar">
            <div>
                <h1>Jammming</h1>
            </div>
            <div className="spotify_icon">
                <FontAwesomeIcon icon="fa-brands fa-spotify" size="2xl" style={{color: "#ffe1a8",}} />
            </div>
        </div>

    );
};

export default NavBar;