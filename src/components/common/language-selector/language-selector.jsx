import React, {useEffect, useRef, useState} from "react";
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
    const language = useRef(selectLang)

    useEffect(()=>{
        language.current = selectLang

    })

    console.log(lang, 'lang')
    console.log(language.current, 'language.current')
    console.log(selectLang, 'selectLang')




    const getData = () => {
        dispatch(getWeatherForCity(weather.city, language.current, degrees))
    }


    const handleChangeLang = (e) => {
        setSelectLang(e.target.value)
        if (language.current === 'en') {
            dispatch(setEnglishAC())
        }
        if (language.current === 'ru') {
            dispatch(setRussianAC())
        }
        getData()

    }




    return (
        <select value={selectLang} onChange={handleChangeLang} className="language-selector-wrapper">
            {data.map(({id, text, value}) => {
                return <Option value={value} text={text} key={id}/>;
            })}
        </select>
    );
};

export default LanguageSelector;
