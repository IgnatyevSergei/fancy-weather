import React, {useMemo} from 'react';
import './about-the-weather.css'
import {useSelector} from "react-redux";
import {weatherSelector} from "../../../selectors/weather-selector";
import {buttonSelector} from "../../../selectors/button-selector";

const AboutTheWeather = () => {
    const {weather, isLoading} = useSelector(weatherSelector)
    const {lang} = useSelector(buttonSelector)

    const content = useMemo(() => {
        if (isLoading === null) {
            return
        }
        if (isLoading) {
            return
        }

        return <div className='about-the-weather-wrapper'>
            <span>{weather.toDay.weather}</span>
            <span>{lang==='en'?'feel like': 'Ощущение'}: {weather.toDay.feelLike}°</span>
            <span>{lang==='en'?'wind': 'Ветер'}: {weather.toDay.wind} м/с</span>
            <span>{lang==='en'?'humidity': 'Влажность'}: {weather.toDay.humidity}%</span>
        </div>


    }, [isLoading, weather])

    return (
        <>
            {content}
        </>
    );
};

export default AboutTheWeather;