import React, { useState, useContext } from 'react';
import { Menu } from '@components/Menu'
import AppContext from '../context/AppContext'
import MyOrder from '../containers/MyOrder';
import '@styles/Header.scss'
import menu from '@icons/icon_menu.svg'
import logo from '@images/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'


const Header = () => {

    const [toggle, setToggle] = useState(false);
    const [toogleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext)

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li
                        className="navbar-email"
                        onClick={() => handleToggle()}
                    >saaristizabalco@gmail.com</li>
                    <li
                        className="navbar-shopping-cart"
                        onClick={() => setToggleOrders(!toogleOrders)}
                    >
                        <img src={shoppingCart} alt="shopping cart" />
                        {
                            state.cart.length > 0 && (
                                <div>{state.cart.length}</div>
                            )
                        }
                    </li>
                </ul>
            </div>
            {
                toggle && (
                    <Menu />
                )
            }
            {
                toogleOrders && (
                    <MyOrder />
                )
            }
        </nav>
    );
}

export { Header };
