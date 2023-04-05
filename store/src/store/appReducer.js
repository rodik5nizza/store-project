import { combineReducers } from "redux";
import dataReducer from "./data/dataReducer";
import modalReducer from "./modal/modalReducer";

const appReducer = combineReducers({
    data: dataReducer,
    modal: modalReducer,
})

export default appReducer