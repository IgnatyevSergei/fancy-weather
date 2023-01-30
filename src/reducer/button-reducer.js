import {
  SET_BACKGROUND,
  SET_CELSIUS,
  SET_FAHRENHEIT, SET_LANG,
} from "../actions/action-button";

const initialStateButton = {
  lang: "en",
  background: "",
  degrees: "metric",
};

export const buttonReducer = (state = initialStateButton, action) => {
  switch (action.type) {
    case SET_BACKGROUND:
      return {
        ...state,
        background: action.payload
      }
    case SET_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case SET_FAHRENHEIT:
      return {
        ...state,
        degrees: "imperial",
      };
    case SET_CELSIUS:
      return {
        ...state,
        degrees: "metric",
      };

    default:
      return state;
  }
};
