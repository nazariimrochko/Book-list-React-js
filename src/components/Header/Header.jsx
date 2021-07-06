import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.wrapper}>
            <div className={s.title}>
                <h3 >Your Book list </h3>
            </div>
            <div className={s.link_wrapper}>
                <span className={s.link} ><NavLink to="/dashboard" activeClassName={s.active_link} > Dashboard </NavLink></span>
                <span className={s.link} ><NavLink to="/addBook" activeClassName={s.active_link}  > Add-Book </NavLink></span>
            </div>
        </header>)
}

export default Header;

