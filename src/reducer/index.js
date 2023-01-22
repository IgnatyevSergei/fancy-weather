import {buttonReducer} from './button-reducer';
import {weatherReducer} from './weather-reducer'
import {combineReducers} from "redux";

export const combineReducerStore = combineReducers({
    weatherReducer,
    buttonReducer
})