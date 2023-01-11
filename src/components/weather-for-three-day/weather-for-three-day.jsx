import React from 'react';
import './weather-for-three-day.css'
import cloud from '../../assets/picture/Group 24.png'
import WeatherForDay from "../weather-for-day";

const arr = [
    {
        day: 'Thursday',
        temperature: '7°',
        icon: {cloud}
    },
    {
        day: 'Friday',
        temperature: '9°',
        icon: {cloud}
    },
    {
        day: 'saturday',
        temperature: '11°',
        icon: {cloud}
    }
]


const WeatherForThreeDay = () => {

    return (
        <div className='weather-for-three-day-wrapper'>
            {arr.map(item => {
                return <WeatherForDay {...item}/>
            })}
        </div>
    );
};

export default WeatherForThreeDay;