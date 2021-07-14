import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems, OtherLinks } from '../../data/NavbarData';

export const NavbarComp = () => {

    // STATE PARA CLICK
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav>
            <div className="logo">
                <Link to='/' onClick={closeMobileMenu}>
                    <i className="icofont-visa"></i>
                </Link>
            </div>
            <ul>
                {
                    MenuItems.map((item) => {
                        return (
                            <li key={item.id} onClick={handleClick}>
                                <Link to={item.url}> {item.title}</Link>
                            </li>
                        );
                    })
                }
            </ul>
            <div className="options">
                <ul>
                    {
                        OtherLinks.map((item) => {
                            return (
                                <li key={item.id} onClick={handleClick}>
                                    <Link to={item.url}> {item.title}</Link>
                                </li>
                            );
                        })
                    }
                </ul>

            </div>

            <div className="menu_mobile">
                <i className="icofont-navigation-menu"></i>
            </div>
        </nav >
    )
}

