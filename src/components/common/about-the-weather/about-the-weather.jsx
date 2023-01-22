import React, {useMemo} from 'react';
import './about-the-weather.css'
import {useSelector} from "react-redux";

const AboutTheWeather = () => {
    const {weather, isLoading} = useSelector(state => state.weatherReducer)

    const content = useMemo(() => {
        if (isLoading === null) {
            return
        }
        if (isLoading) {
            return
        }

        return <div className='about-the-weather-wrapper'>
            <span>{weather.toDay.weather}</span>
            <span>Ощущение: {weather.toDay.feelLike}°</span>
            <span>Ветер: {weather.toDay.wind} м/с</span>
            <span>Влажность: {weather.toDay.humidity}%</span>
        </div>


    }, [isLoading, weather])

    return (
        <>
            {content}
        </>
    );
};

export default AboutTheWeather;