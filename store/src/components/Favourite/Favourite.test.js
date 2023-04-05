import Favourite from "./Favourite";
import { render } from "@testing-library/react";


describe('test snapshot Favourite', () => {
    test('should Favourite match snapshot', () => {
        const { asFragment } = render(<Favourite counter={1}/>)
        expect(asFragment()).toMatchSnapshot()
    })
})