import React from 'react';
import './map.css'
import {useSelector} from "react-redux";
import {weatherSelector} from "../../selectors/weather-selector";
import {buttonSelector} from "../../selectors/button-selector";

const Map = () => {
    const {weather} =useSelector(weatherSelector)
    const {lang}=useSelector(buttonSelector)


    return (
        <div className='map-wrapper'>
            <div className='map-content'>

            </div>
            <div className='coordinates'>
                <span>{lang==='en'?'latitude:':'широта'} {weather.latitude} </span>
                <span>{lang==='en'?'longitude:':'долгота'} {weather.longitude} </span>
            </div>

        </div>
    );
};

export default Map;