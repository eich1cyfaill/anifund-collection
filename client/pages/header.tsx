import React from 'react';
import cl from '../styles/Header.module.sass'

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.burger}>
                <div className={cl.burger__item}></div>
                <div className={cl.burger__item}></div>
                <div className={cl.burger__item}></div>
            </div>
            <div className={cl.header__title}>ANIFUND</div>
            <nav>
                <ul className={cl.header__navi}>
                    <li className={cl.header__navi_item}>Home</li>
                    <li className={cl.header__navi_item}>List</li>
                    <li className={cl.header__navi_item}>Settings</li>
                    <li className={cl.header__navi_item}>Support</li>
                    <li className={cl.header__navi_item}>Login</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;