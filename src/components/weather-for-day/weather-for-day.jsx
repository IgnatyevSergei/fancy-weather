import React from 'react';
import './weather-for-day.css'
import Cloud from '../../assets/picture/Group 24.png'
import {useSelector} from "react-redux";
import {buttonSelector} from "../../selectors/button-selector";

const WeatherForDay = (props) => {
    const {day, temperature, date} = props
    const {lang} = useSelector(buttonSelector)
    const options = { weekday: 'long'};


    return (

        <div className='weather-for-day-wrapper'>
            <div className='day'>{lang==='en'? date.toLocaleString('en',options) : day}</div>
            <div className='temperature'>
                <div className='temperature-degrees'>{temperature}</div>
                <div className='temperature-cloud'><img src={Cloud} alt=""/></div>
            </div>


        </div>
    );
};

export default WeatherForDay;