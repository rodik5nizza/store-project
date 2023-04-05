import CardWrapper from "../components/CardWrapper/CardWrapper";
import styles from '../App.module.scss';
import PropTypes from "prop-types";

const FavouritePage = ({data, counter}) => {
    const fav = []
    data.forEach((elem) => {
        if(elem.counter){
            fav.push(elem)
        }
    })
    return (
        <>
            <h2 className={styles.title}>Избранное</h2>
            {counter === 0 && <p className={styles.info}>Избранные товары отсутствуют</p>}
            <CardWrapper data={fav}/>
        </>
    )
}


FavouritePage.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        article: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        isFavourite: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })),
    counter: PropTypes.number,
}

FavouritePage.defaultProps = {
    counter: 0,
}

export default FavouritePage