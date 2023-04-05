import React from "react";
import Button from "../Button/Button";
import styles from "./Card.module.scss";
import starActive from "./starActive.svg";
import star from './star.svg';
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { inFavouriteAC } from "../../store/data/actionCreator";

const Card = ({ article, color, isFavourite, name, path, price, handleClick, isButton, counter }) => {
    const dispatch = useDispatch()
    return (
        <div className={styles.card}>
            <div className={styles.cardContainer}>
                <div onClick={() => dispatch(inFavouriteAC(article))} className={styles.star}>
                    {isFavourite && <img src={starActive} alt="starActive" />}
                    {!isFavourite && <img src={star} alt="star" />}
                </div>
                <div className={styles.cardImg}>
                    <img src={path} alt={name} />
                </div>
                <div>
                    <p className={styles.cardTitle}>{name} {color}</p>
                    <p className={styles.cardPrice}>{price} UAH</p>
                    {isButton && <Button handleClick={(e) => handleClick(e, { article, color, isFavourite, name, path, price }, 1)} text="Add To Cart" backgroundColor="gray" />}
                    {!isButton && <>
                        <div>Количество: {counter}</div>
                        <Button handleClick={(e) => handleClick(e, { article })} text="Удалить с корзины" backgroundColor="#9d5959" />
                    </>}
                </div>
            </div>
        </div >
    )
}
Card.propTypes = {
    article: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    handleClick: PropTypes.func,
    isButton: PropTypes.bool,
    counter: PropTypes.number,
}

Card.defaultProps = {
    handleClick: () => { },
    isButton: true,
    counter: 1,
}

export default Card