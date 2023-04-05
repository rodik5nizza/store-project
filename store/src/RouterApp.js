import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import FavouritePage from './pages/FavouritePage';
import PropTypes from "prop-types";
 
const RouterApp = ({cart, data, addToCart, handleClick, removeCartElement, counter, counterCart, setCarts}) =>{
    return (
        <Routes>
            <Route path='/'  element={<HomePage data={data} addToCart={addToCart} handleClick={handleClick} />}/>
            <Route path='/cart' element={<CartPage counterCart={counterCart} handleClick={handleClick} removeCartElement={removeCartElement} data={cart} setCarts={setCarts}/>}/>
            <Route path='/fav' element={<FavouritePage counter={counter} data={data}/>}/>
        </Routes>
    )
}

RouterApp.prototype = {
    data: PropTypes.arrayOf(PropTypes.shape({
        article: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        isFavourite: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        counter: PropTypes.number,
    })),
    cart: PropTypes.arrayOf(PropTypes.shape({
        article: PropTypes.number,
        color: PropTypes.string,
        isFavourite: PropTypes.bool,
        name: PropTypes.string,
        path: PropTypes.string,
        price: PropTypes.number,
        counter: PropTypes.number,
    })),
    addToCart: PropTypes.func,
    handleClick: PropTypes.func,
    removeCartElement: PropTypes.func,
    counter: PropTypes.number,
    counterCart: PropTypes.number,
}

RouterApp.defaultProps = {
    cart: [],
    addToCart: () => {},
    handleClick: () => {},
    removeCartElement: () => {},
    counter: 0,
    counterCart: 0,
}

export default RouterApp