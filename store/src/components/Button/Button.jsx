import React from "react";
import styles from './Button.module.scss'
import PropTypes from "prop-types";

const Button = ({ backgroundColor, text, handleClick, modalNumber }) => {
    
        return (
            <button className={styles.btn} style={ {backgroundColor:backgroundColor} } onClick={ (e) => handleClick(e, modalNumber) }>{ text }</button>
        )
}

Button.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    modalNumber: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object
    ]),
}

Button.defaultProps = {
    hendleClick: () => {},
    modalNumber: '',
}

export default Button