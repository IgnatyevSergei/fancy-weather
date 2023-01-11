import React from 'react';
import './about-the-weather.css'

const AboutTheWeather = () => {
    return (
        <div className='about-the-weather-wrapper'>
            <span>OVERCAST</span>
            <span>FEEL LIKE: 7°</span>
            <span>WIND: 2 m/s</span>
            <span>HUMIDITY: 83%</span>
        </div>
    );
};

export default AboutTheWeather;