import React, {useCallback, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {buttonSelector} from "../../../selectors/button-selector";
import Option from "../option/option";
import "./language-selector.css";
import {setLangAC} from "../../../actions/action-button";
import {weatherSelector} from "../../../selectors/weather-selector";
import {getWeatherForCity} from "../../../actions/action-weather";

const data = [
    {id: 1, text: "en", value: "en"},
    {id: 2, text: "ru", value: "ru"},
];

const LanguageSelector = () => {
    const dispatch = useDispatch();
    const{lang, degrees}=useSelector(buttonSelector)
    const{weather}=useSelector(weatherSelector)

    console.log(lang, 'lang')
    console.log(weather)


    const handleChangeLang = (e) => {


        dispatch(setLangAC(e.target.value));

        dispatch(getWeatherForCity(weather.city, lang, degrees))
    }

    return (
        <select  onChange={handleChangeLang} className="language-selector-wrapper">
            {data.map(({id, text, value}) => {
                return <Option value={value} text={text} key={id}/>;
            })}
        </select>
    );
};

export default LanguageSelector;
