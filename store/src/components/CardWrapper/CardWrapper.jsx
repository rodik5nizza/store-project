import React, {useContext} from "react";
import Card from "../Card/Card";
import styles from "./CardWrapper.module.scss";
import PropTypes from "prop-types";
import ToggleViewContext from "../../contexts/toggleViewContext/ToggleViewContext";
import TableCard from "../TableCard/TableCard";

const CardWrapper = ({ data, handleClick, isButton }) => {
    const {toggleView} = useContext(ToggleViewContext)

    return (
        <ul className={toggleView ? `${styles.CardWrapper+" "+styles.cardFlex}` : styles.CardWrapper}>
            {data.map(({ article, color, isFavourite, name, path, price, counter }) => {
                return (
                    <li className={styles.CardItem} key={article}>
                        {   toggleView ?
                            <Card counter={counter} isButton={isButton} handleClick={handleClick} article={article} color={color} isFavourite={isFavourite} name={name} path={path} price={price} /> :
                            <TableCard  counter={counter} isButton={isButton} handleClick={handleClick} article={article} color={color} isFavourite={isFavourite} name={name} path={path} price={price} />
                        }
                    </li>
                )
            })
            }
        </ul>
    )

}

CardWrapper.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        article: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        isFavourite: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })),
    handleClick: PropTypes.func,
    isButton: PropTypes.bool,
}

CardWrapper.defaultProps = {
    handleClick: () => { },
    isButton: true,
}


export default CardWrapper