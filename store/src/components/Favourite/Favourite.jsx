import styles from './Favourite.module.scss';
import PropTypes from "prop-types";

const Favourite = ({counter}) => {
    return(
        <div className={styles.favouriteWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg"  height="40px" width="40px" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path fill="yellow" d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/> </g> </svg>
            {counter > 0 && <div className={styles.counter}>{counter}</div>}
        </div>
    )
}

Favourite.propTypes = {
	counter: PropTypes.number,
}

Favourite.defaultProps = {
	counter: 0,
}

export default Favourite