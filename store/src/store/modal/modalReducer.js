import { MODAL_OPEN, MODAL_CLOSE } from "./actions"
const initialValue = {
    isOpenModal: false,
}

const modalReducer = (state = initialValue, action) => {
    switch(action.type){
        case MODAL_OPEN: {
            return {...state, isOpenModal: true}
        }
        case MODAL_CLOSE: {
            return {...state, isOpenModal: false}
        }
        default: {
            return state;
        }
    }
}
export default modalReducer