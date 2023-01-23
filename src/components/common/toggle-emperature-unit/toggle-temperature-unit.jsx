import React, {useState} from 'react';
import './toggle-emperature-unit.css'
import Button from "../button";
import {useDispatch, useSelector} from "react-redux";
import {buttonSelector} from "../../../selectors/button-selector";
import {getWeatherForCity} from "../../../actions/action-weather";
import {weatherSelector} from "../../../selectors/weather-selector";
import {setCelsiusAC, setFahrenheitAC} from "../../../actions/action-button";

const ToggleTemperatureUnit = () => {
    const {lang, degrees} = useSelector(buttonSelector)
    const {weather} = useSelector(weatherSelector)
    const [flag, setFlag] = useState(false)
    const dispatch = useDispatch()

    console.log(weather.city)
    console.log(lang)
    console.log(degrees)

    const toggleFahrenheit =() =>{
        if (!weather.city) {
            return
        }
            dispatch(setFahrenheitAC())


        console.log(degrees, 'far')
        setFlag(state => !state)
        dispatch(getWeatherForCity(weather.city, lang, degrees))
    }




    const toggleCelsius = () => {
        if (!weather.city) {
            return
        }
        console.log(degrees, 'cels')
        dispatch(setCelsiusAC())
        setFlag(state => !state)
        dispatch(getWeatherForCity(weather.city, lang, degrees))

    }


    return (
        <div>
            <Button text='°F' disabled={flag} onClick={toggleCelsius } width='44px' height='44px'/>
            <Button text='°C' disabled={!flag} onClick={toggleFahrenheit} width='44px' height='44px'/>
        </div>
    );
};

export default ToggleTemperatureUnit;