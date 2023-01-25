
export const SET_BACKGROUND = "SET_BACKGROUND";
export const SET_ENGLISH = "SET_ENGLISH";
export const SET_RUSSIAN = "SET_RUSSIAN";
export const SET_FAHRENHEIT = "SET_FAHRENHEIT";
export const SET_CELSIUS = "SET_CELSIUS";

export const setEnglishAC = () => ({type: SET_ENGLISH});
export const setRussianAC = () => ({type: SET_RUSSIAN});
export const setFahrenheitAC = () => ({type: SET_FAHRENHEIT});
export const setCelsiusAC = () => ({type: SET_CELSIUS});
export const setBackgroundAC = (background) => ({type: SET_BACKGROUND, payload: background});






