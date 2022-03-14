import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <ul className="navigation">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blogposts">
                        Blogposts
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;