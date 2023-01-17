import React, {useEffect, useState} from 'react';
import './weather-for-three-day.css'
import cloud from '../../assets/picture/Group 24.png'
import WeatherForDay from "../weather-for-day";
import ServiceApi from "../../service-api";

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
    const data = new ServiceApi()
    const [weather, setWeather] = useState()

    useEffect(()=> {
       data.getWeatherForCity('Vitebsk').then(res=>setWeather(res))

    }, [])




    console.log(weather)
    return (

        <div className='weather-for-three-day-wrapper'>
            {arr.map(item => {
                return <WeatherForDay key={item.day} {...item}/>
            })}
        </div>
    );
};

export default WeatherForThreeDay;