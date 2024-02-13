import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <h1>Jammming</h1>
            {/* <div className='dropdown-content'> */}
            {/* {/* <NavLink to='/'>Home</NavLink> */}
            {/* </div> */}
            <FontAwesomeIcon icon={faHouse} />
        </div>

    );
};

export default NavBar;