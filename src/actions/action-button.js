
export const SET_BACKGROUND = "SET_BACKGROUND";
export const SET_LANG = "SET_LANG";
export const SET_FAHRENHEIT = "SET_FAHRENHEIT";
export const SET_CELSIUS = "SET_CELSIUS";

export const setLangAC = (lang) => ({type: SET_LANG, payload: lang});
export const setFahrenheitAC = () => ({type: SET_FAHRENHEIT});
export const setCelsiusAC = () => ({type: SET_CELSIUS});
export const setBackgroundAC = (background) => ({type: SET_BACKGROUND, payload: background});






