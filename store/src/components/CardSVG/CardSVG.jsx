import styles from "./CardSVG.module.scss";
import PropTypes from "prop-types";
import { useContext } from "react";
import ToggleViewContext from "../../contexts/toggleViewContext/ToggleViewContext";

const CardSVG = ({heandleClick}) => {

    const {toggleView} = useContext(ToggleViewContext)
    return (
        <div onClick={heandleClick} className={!toggleView ? styles.wrapper : styles.wrapperActive}>
            <svg width="40px" height="40px" viewBox="0 0 16 16" version="1.1" fill="none" stroke="#000000" >
                <rect height="11.5" width="8.25" y="2.75" x="1.75" />
                <path d="m10 3.75 4.25 2-4.25 7.5" />
            </svg>
        </div>
    )
}

CardSVG.propTypes = {
    className: PropTypes.bool,
    heandleClick: PropTypes.func
}

CardSVG.defaultProps = {
    className: true,
    heandleClick: () => {}
}

export default CardSVG