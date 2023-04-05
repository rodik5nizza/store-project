import Modal from "./Modal";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from '../../store'
import { modalOpenAC, modalcloseAC } from "../../store/modal/actionCreator";

const handleClickBgd = jest.fn()
const handleClickBtnX = jest.fn()

const Component = () => {
    const dispatch = useDispatch()
    const modal = useSelector((store => store.modal.isOpenModal))
    return (
        <>
            <button onClick={() => dispatch(modalOpenAC())} >OPEN</button>
            <button onClick={() => dispatch(modalcloseAC())}>CLOSE</button>
            {modal && <Modal action={<div></div>} header='header' text='text' />}
        </>
    )
}

const MockedProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

describe('testing Modal reducer', () => {
    test('should render Modal whith reducer CLOSE_MODAL', () => {
        render(<MockedProvider>{<Component/>}</MockedProvider>)
        screen.debug()
        fireEvent.click(screen.getByText('CLOSE'))
        screen.debug()
        expect(screen.queryByTestId('bgd')).not.toBeInTheDocument()
    });

    test('should render Modal whith reducer OPEN_MODAL', () => {
        render(<MockedProvider>{<Component/>}</MockedProvider>)

        fireEvent.click(screen.getByText('OPEN'))

        expect(screen.getByTestId('bgd')).toBeInTheDocument()

    });
})


describe('Modal snapsot testing', () => {
    test('should Modal match snapshot', () => {
        const { asFragment } = render(<Modal action={<div></div>} header='header' text='text' />)
        expect(asFragment()).toMatchSnapshot()
    });
})

describe('Modal button works', () => {
    test('should button works when props closeButton is true', () => {
        render(<Modal action={<div></div>} header='header' text='text' closeButton={true} />)
        const btn = screen.getByText('X')
        expect(btn).toBeInTheDocument()
    });

    test('should button works when props closeButton is false', () => {
        render(<Modal action={<div></div>} header='header' text='text' closeButton={false} />)
        const btn = screen.queryByText('X')
        expect(btn).not.toBeInTheDocument()
    });
})


describe('Heandle click at a buttons Modal', () => {
    test('should heandle click work at background', () => {
        render(<Modal action={<div></div>} header='header' text='text' handleClick={handleClickBgd} />)
        fireEvent.click(screen.getByTestId('bgd'))
        expect(handleClickBgd).toHaveBeenCalled()
    });

    test('should heandle click work at button X', () => {
        render(<Modal action={<div></div>} header='header' text='text' closeButton={true} handleClick={handleClickBtnX} />)
        fireEvent.click(screen.getByText('X'))
        expect(handleClickBtnX).toHaveBeenCalled()
    });
})