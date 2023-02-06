import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css"

/**
 * NavLink is a special Link from react-router-dom that also tells if the current link is active or not
 * This allows us to mark it as active or not in the tab bar
 */

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>ALL USERS</NavLink>
        </li>
        {/* TODO: Change hardcoded link
        TODO: Hide navlink when not logged in */}
        <li>
            <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
        {/* TODO: Hide navlink when not logged in */}
        <li>
            <NavLink to="/places/new">NEW PLACE</NavLink>
        </li>
        <li>
            <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
    </ul>
};

export default NavLinks;