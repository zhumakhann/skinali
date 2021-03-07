import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Header.scss'
export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to="/" className="header__logo">
                        Skinali
                    </Link>
                    <ul className="header__nav">
                        <li className="header__nav-item">
                            <NavLink to="/admin/products">Продукты </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink to="/admin/categories">Категории</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
