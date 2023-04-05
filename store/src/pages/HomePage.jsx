import CardWrapper from "../components/CardWrapper/CardWrapper";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";
import styles from '../App.module.scss';
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import GridSVG from "../components/GridSVG/GridSVG";
import CardSVG from "../components/CardSVG/CardSVG";
import { useContext } from "react";
import ToggleViewContext from "../contexts/toggleViewContext/ToggleViewContext"


const HomePage = ({ data, addToCart, handleClick, inFavorites }) => {
    const modal = useSelector((store => store.modal.isOpenModal))
    const {toggleView, setToggleView} = useContext(ToggleViewContext)

    return (
        <div >
            <h2 className={styles.title}>Список товаров</h2>
            <div className={styles.toggleView}>
                <CardSVG heandleClick={() => setToggleView(true)}/> <GridSVG heandleClick={() => setToggleView(false)}/> 
            </div>
            <CardWrapper inFavorites={inFavorites} data={data} handleClick={handleClick} />
            {modal && <Modal action={<><Button handleClick={addToCart} text='OK' backgroundColor='red' /> <Button handleClick={handleClick} text='Close' backgroundColor='#D44637' /></>} header='Хотите добавить в корзину?' text="Если вы хотите добавить товар в корзину, нажмите ОК!" closeButton={true} handleClick={handleClick} />}
        </div>
    )
}

HomePage.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        article: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        isFavourite: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })),
    inFavorites: PropTypes.func,
    addToCart: PropTypes.func,
    handleClick: PropTypes.func,
}

HomePage.defaultProps = {
    inFavorites: () => { },
    addToCart: () => { },
    handleClick: () => { },
}

export default HomePage