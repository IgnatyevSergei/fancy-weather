import { SET_IS_HAS_ERROR, SET_IS_LOADING, SET_WEATHER } from "../actions/action-weather";

const initialState = {
  weather: {
    },
  isLoading: null,
  hasError: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_IS_HAS_ERROR:
      return {
        ...state,
        hasError: action.payload,
      };

    case SET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };

    default:
      return state;
  }
  
};




