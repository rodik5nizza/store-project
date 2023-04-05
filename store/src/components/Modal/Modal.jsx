import React from "react";
import styles from './Modal.module.scss';
import PropTypes from "prop-types";

const Modal = ({ action, header, text, closeButton, handleClick }) => {
        return (
            <div data-testid='bgd' className={styles.background} onClick={(e) => handleClick(e)}>
                <div className={styles.modal}>
                    <div className={styles.headerWrapper}>
                    <p className={styles.modalHeader}>{header}</p>
                    {closeButton && <span onClick={(e) => handleClick(e)} className={styles.modalClose}>X</span>}
                    </div> 
                    <p className={styles.modalText}>{text}</p>
                    {action}
                </div>
            </div>

        )
}

Modal.propTypes = {
    action: PropTypes.node.isRequired, 
    header: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired, 
    closeButton: PropTypes.bool, 
    handleClick: PropTypes.func,
}

Modal.defaultProps = {
    closeButton: true, 
    handleClick: ()=>{},
}

export default Modal