import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar">
            <div>
                <div className='dropdown'>
                    <button className="dropbtn">Jammming</button>
                    <div className='dropdown-content'>
                        {/* <NavLink to='/'>Home</NavLink>
                    <NavLink to='playlist'>Playlist</NavLink> */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NavBar;