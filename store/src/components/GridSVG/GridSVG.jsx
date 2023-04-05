import styles from './GridSVG.module.scss';
import PropTypes from "prop-types";
import { useContext } from "react";
import ToggleViewContext from "../../contexts/toggleViewContext/ToggleViewContext";

const GridSVG = ({heandleClick, className}) => {
    const {toggleView} = useContext(ToggleViewContext)
    return (
        <div onClick={heandleClick} className={toggleView ? styles.wrapper : styles.wrapperActive}>
            <svg version="1.1" id="Capa_1" x="0px" y="0px" width='30px ' viewBox="0 0 525.153 525.153">
                <g>
                    <path d="M472.637,0H52.515C23.632,0,0,23.632,0,52.515v420.122c0,28.883,23.632,52.515,52.515,52.515h420.122
		c28.883,0,52.515-23.632,52.515-52.515V52.515C525.153,23.632,501.521,0,472.637,0z M157.524,472.637H52.515V367.629h105.009
		V472.637z M157.524,315.092H52.515V210.061h105.009V315.092z M157.524,157.524H52.515V52.515h105.009V157.524z M315.092,472.637
		H210.061V367.629h105.031V472.637z M315.092,315.092H210.061V210.061h105.031V315.092z M315.092,157.524H210.061V52.515h105.031
		V157.524z M472.637,472.637H367.629V367.629h105.009V472.637z M472.637,315.092H367.629V210.061h105.009V315.092z M472.637,157.524
		H367.629V52.515h105.009V157.524z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>

        </div>
    )
}

GridSVG.propTypes = {
    className: PropTypes.bool,
    heandleClick: PropTypes.func
}

GridSVG.defaultProps = {
    className: false,
    heandleClick: () => {}
}

export default GridSVG