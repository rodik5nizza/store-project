import React, { useState, useEffect, createContext } from 'react';
import styles from './App.module.scss'
import Header from './components/Header/Header';
import RouterApp from './RouterApp';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAC } from './store/data/actionCreator';
import { modalcloseAC, modalOpenAC } from './store/modal/actionCreator';
import ToggleViewContextProvider from './contexts/toggleViewContext/ToggleViewContextProvider';

const App = () => {
  const [carts, setCarts] = useState([])
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const data = useSelector(store => store.data.data)
  const modal = useSelector(store => store.modal.isOpenModal)

  const handleClick = (e, value, number) => {
    if (e.target === e.currentTarget) {
      if (modal) {
        dispatch(modalcloseAC())
      } else {
        dispatch(modalOpenAC())
      }

      setValue(value)
    };
  }

  const removeCartElement = () => {
    setCarts((current) => {
      const cart = [...current]
      const index = cart.findIndex((elem) => elem.article === value.article)

      if (index !== -1) {
        cart.splice(index, 1)
      }
      dispatch(modalcloseAC())
      localStorage.setItem('cart', JSON.stringify(cart))
      return cart
    })
  }

  useEffect(() => {
    dispatch(fetchAC())
  }, [])

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      setCarts(JSON.parse(cart))
    }
  }, [])

  useEffect(() => {
    setCarts((current) => {
      const cart = [...current]
      data.forEach((elem) => {
        cart.forEach((el) => {
          if (el.article === elem.article) {
            el.isFavourite = elem.isFavourite
          }
        })
      })
      return cart
    })
  }, [data])

  const addToCart = () => {
    setCarts((current) => {
      const cart = [...current]
      const index = cart.findIndex((el) => el.article === value.article)
      index === -1 ? cart.push({ ...value, counter: 1 }) : cart[index].counter += 1
      localStorage.setItem('cart', JSON.stringify(cart))
      return cart
    })
    dispatch(modalcloseAC())
  }



  const counter = (data) => {
    if (data) {
      let count = 0;
      data.forEach(({ counter }) => {
        if (counter) {
          count += counter
        }
      })
      return count
    }
  }



  return (
    <ToggleViewContextProvider>
      <div className={styles.App}>
        <Header counter={counter(data)} counterCart={counter(carts)} />
        <RouterApp counter={counter(data)} counterCart={counter(carts)} removeCartElement={removeCartElement} cart={carts} setCarts={setCarts} data={data} handleClick={handleClick} addToCart={addToCart} />
      </div>
    </ToggleViewContextProvider>
  );

}

export default App;
