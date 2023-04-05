import CardWrapper from "../components/CardWrapper/CardWrapper";
import styles from '../App.module.scss';
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const CartPage = ({ data, inFavorites, removeCartElement, handleClick, counterCart, setCarts }) => {
    const modal = useSelector((store) => store.modal.isOpenModal)
    const onSubmit = (values, formikProps) => {
        data.push(values)
        console.log(data);
        formikProps.resetForm()
        localStorage.removeItem('cart')
        setCarts((prev) => {
            const data = [...prev]
            data.splice(0)

            return data
        })
    }
    const initialValues = {
        name: '',
        secondName: '',
        age: '',
        address: '',
        tel: ''

    }

    const schema = yup.object().shape({
        name: yup.string().required('Обязательное поле!'),
        secondName: yup.string().required('Обязательное поле!'),
        age: yup.number().required('Обязательное поле!').min(15, 'Минимальный возраст 15 лет'),
        address: yup.string().required('Обязательное поле!'),
        tel: yup.number().required('Обязательное поле!')
    })
    return (
        <>
            <h2 className={styles.title}>Корзина</h2>
            {counterCart === 0 && <p className={styles.info}>Ваша корзина пуста</p>}
            <CardWrapper data={data} isButton={false} inFavorites={inFavorites} handleClick={handleClick} />
            {modal && <Modal action={<><Button handleClick={removeCartElement} text='OK' backgroundColor='red' /> <Button handleClick={handleClick} text='Close' backgroundColor='#D44637' /></>} header='Хотите удалить товар?' text="Если вы удалите товар, то не сможете купить, уверены?" closeButton={true} handleClick={handleClick} />}

            {data.length !== 0 && 
            <>
            <h2 className={styles.title}>Оформить заказ</h2>

            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={schema}
            >

                <Form>
                    <Field
                        type='text'
                        name='name'
                        placeholder='Name'
                    />
                    <ErrorMessage name="name">{msg => <div className={styles.error}>{msg}</div>}</ErrorMessage>

                    <Field
                        type='text'
                        name='secondName'
                        placeholder='Second Name'
                    />
                    <ErrorMessage name="secondName">{msg => <div className={styles.error}>{msg}</div>}</ErrorMessage>

                    <Field
                        type='text'
                        name='age'
                        placeholder='Age'
                    />
                    <ErrorMessage name="age">{msg => <div className={styles.error}>{msg}</div>}</ErrorMessage>

                    <Field
                        type='text'
                        name='address'
                        placeholder='Address'
                    />
                    <ErrorMessage name="address">{msg => <div className={styles.error}>{msg}</div>}</ErrorMessage>

                    <Field
                        type='text'
                        name='tel'
                        placeholder='Mobile number'
                    />
                    <ErrorMessage name="tel">{msg => <div className={styles.error}>{msg}</div>}</ErrorMessage>

                    <button className={styles.buttonCheckOut} type="submit">Checkout</button>
                </Form>


            </Formik>
            </>}
        </>

    )
}

CartPage.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        article: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        isFavourite: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })),
    inFavorites: PropTypes.func,
    removeCartElement: PropTypes.func,
    handleClick: PropTypes.func,
    counterCart: PropTypes.number,
}


CartPage.defaultProps = {
    inFavorites: () => { },
    removeCartElement: () => { },
    handleClick: () => { },
    counterCart: 0,
}

export default CartPage