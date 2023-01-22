import React from 'react';
import './weather-for-day.css'
import Cloud from '../../assets/picture/Group 24.png'

const WeatherForDay = (props) => {
    const {day, temperature} = props



    return (

        <div className='weather-for-day-wrapper'>
            <div className='day'>{day}</div>
            <div className='temperature'>
                <div className='temperature-degrees'>{temperature}</div>
                <div className='temperature-cloud'><img src={Cloud} alt=""/></div>
            </div>


        </div>
    );
};

export default WeatherForDay;