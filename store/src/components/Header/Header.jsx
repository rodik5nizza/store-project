import React from "react";
import styles from './Header.module.scss';
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom'
import Favourite from "../Favourite/Favourite";
import CartSVG from "../CartSVG/CartSVG";
import Logo from "../Logo/Logo";


const Header = ({ counter, counterCart }) => {

    return (
        <nav className={styles.header}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='/'><Logo /></NavLink>
                </li>
                <div className={styles.cartWrapper}>
                    <li className={styles.listItem}>
                        <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='/fav'>{<Favourite counter={counter} />}</NavLink>
                    </li>
                    <li className={styles.listItem}>
                        <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to='/cart'>{<CartSVG counterCart={counterCart} />}</NavLink>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

Header.propTypes = {
    counter: PropTypes.number,
    counterCart: PropTypes.number,
}

Header.defaultProps = {
    counter: 0,
    counterCart: 0,
}

export default Header