import {
  SET_BACKGROUND,
  SET_CELSIUS,
  SET_ENGLISH,
  SET_FAHRENHEIT,
  SET_RUSSIAN,
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
    case SET_ENGLISH:
      return {
        ...state,
        lang: "en",
      };
    case SET_RUSSIAN:
      return {
        ...state,
        lang: "ru",
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
