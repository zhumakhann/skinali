import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Cart from '../Cart/Cart'

export default function Header() {
    const [popupActive, setPopupActive] = useState(false)
    return (
        <header className="header client">
            <div className="container">
                <div className="header__wrapper">
                    <Link className="header__logo" to="/">
                        Skinali    
                    </Link> 
                    <nav className="header__nav">
                        <Link className="header__nav-item" to="/products">
                            Меню
                        </Link>
                        <Link className="header__nav-item" to="/categories">
                            Категории
                        </Link>
                        <Link className="header__nav-item" to="/about">
                            О нас
                        </Link>
                    </nav>
                    <button className="btn btn-primary" children="C" onClick={() => setPopupActive(true)} />
                    <Cart active={popupActive} close={() => setPopupActive(false)} />
                </div>
            </div>
        </header>
    )
}
