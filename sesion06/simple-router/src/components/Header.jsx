import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li>
                        <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/about-us">About Us</NavLink>
                        </li>
                        <li>
                        <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}