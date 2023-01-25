import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {buttonSelector} from "../../../selectors/button-selector";
import Option from "../option/option";
import "./language-selector.css";
import {setEnglishAC, setRussianAC} from "../../../actions/action-button";
import {weatherSelector} from "../../../selectors/weather-selector";
import {getWeatherForCity} from "../../../actions/action-weather";

const data = [
    {id: 1, text: "en", value: "en"},
    {id: 2, text: "ru", value: "ru"},
];

const LanguageSelector = () => {
    const [selectLang, setSelectLang] = useState('en')
    const dispatch = useDispatch();
    const {lang, degrees} = useSelector(buttonSelector);
    const {weather} = useSelector(weatherSelector)



    const getData = () => {
        dispatch(getWeatherForCity(weather.city, lang, degrees))
    }

    console.log(lang, 'в начале компонента')

    const handleChangeLang = (e) => {
        setSelectLang(e.target.value)
        if (selectLang === 'en') {
            dispatch(setEnglishAC())
        }
        if (selectLang === 'ru') {
            dispatch(setRussianAC())
        }
        console.log(lang, 'перед запросом')

        getData()
        console.log(lang, 'после запроса')

    }


    console.log(lang)


    return (
        <select value={selectLang} onChange={handleChangeLang} className="language-selector-wrapper">
            {data.map(({id, text, value}) => {
                return <Option value={value} text={text} key={id}/>;
            })}
        </select>
    );
};

export default LanguageSelector;
