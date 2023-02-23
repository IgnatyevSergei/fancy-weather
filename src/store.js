import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {combineReducerStore} from "./reducer";


const store = createStore(combineReducerStore, applyMiddleware(thunk))

export default store