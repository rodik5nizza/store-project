import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import appReducer from "./appReducer";
import thunk from 'redux-thunk'

export const store = createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)))