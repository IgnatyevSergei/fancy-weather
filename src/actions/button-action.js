import {setIsHasErrorAC} from "./weather-action";

export const SET_BACKGROUND = "SET_BACKGROUND";
export const SET_LANG = "SET_LANG";
export const SET_FAHRENHEIT = "SET_FAHRENHEIT";
export const SET_CELSIUS = "SET_CELSIUS";

export const setLangAC = (lang) => ({type: SET_LANG, payload: lang});
export const setFahrenheitAC = () => ({type: SET_FAHRENHEIT});
export const setCelsiusAC = () => ({type: SET_CELSIUS});
export const setBackgroundAC = (background) => ({type: SET_BACKGROUND, payload: background});


export const getBackground = () => (dispatch) => {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=gGTxYgKrDEuL4tRja909Ex2u7PLWbzNT2NHBuJYIRiI`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            dispatch(setBackgroundAC(result.urls.regular));
        })
        .catch((err) => {
            dispatch(setIsHasErrorAC(err));
        });
};






