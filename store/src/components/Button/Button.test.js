import Button from './Button';
import {render, screen, fireEvent} from '@testing-library/react';

const clickJest = jest.fn()

describe('Button snapshot testing', () => {
    test('should Button match snapshot', () => {
        const {asFragment} = render(<Button text='Button' backgroundColor='#fff'/>)
        expect(asFragment()).toMatchSnapshot()
    });
})

describe('Heandle click at a Button', () => {
    test('should heandle clixk work', () => {
        render(<Button text='Button' backgroundColor='#fff' handleClick={clickJest}/>)
        fireEvent.click(screen.getByText('Button'))
        expect(clickJest).toHaveBeenCalled()
    });
})