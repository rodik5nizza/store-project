import { FETCH, IN_FAVOURITE } from "./actions"
const initialValue = {
    data: []
}

const dataReducer = (state = initialValue, action) => {
    switch(action.type){
        case FETCH: {
            return {...state, data: action.payload}
        }

        case IN_FAVOURITE:{
            return {...state, data: action.payload}
        }
        default: {
            return state;
        }
    }
}
export default dataReducer