import styles from "./TableCard.module.scss";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { inFavouriteAC } from "../../store/data/actionCreator";
import starActive from "./starActive.svg";
import star from './star.svg';

const TableCard = ({ article, color, isFavourite, name, path, price, handleClick, isButton, counter }) => {
    const dispatch = useDispatch()
    return (
        <div className={styles.card}>
            <div className={styles.container}>
            <div onClick={() => dispatch(inFavouriteAC(article))} className={styles.star}>
                    {isFavourite && <img src={starActive} alt="starActive" />}
                    {!isFavourite && <img src={star} alt="star" />}
                </div>
                <div className={styles.img}>
                    <img src={path} alt={name} />
                </div>
                <div className={styles.content}>
                    <p className={styles.title}>{name} {color}</p>
                    <p className={styles.price}>{price} UAH</p>
                    {isButton && <Button handleClick={(e) => handleClick(e, { article, color, isFavourite, name, path, price }, 1)} text="Add To Cart" backgroundColor="gray" />}
                    {!isButton && <>
                        <div>Количество: {counter}</div>
                        <Button handleClick={(e) => handleClick(e, { article })} text="Удалить с корзины" backgroundColor="#9d5959" />
                    </>}
                </div>
            </div>
        </div>
    )
}

export default TableCard