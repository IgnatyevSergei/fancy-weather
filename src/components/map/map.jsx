import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'
import {useSelector} from "react-redux";
import {weatherSelector} from "../../selectors/weather-selector";

const Map = () => {
    const {weather} =useSelector(weatherSelector)

    const coordinates = {
        center: {
            lat: weather.latitude,
            lng: weather.longitude
        },
        zoom: 11
    }
    return (
        <div className='map-wrapper'>
            <div className='map-content'>

            </div>
            <div className='coordinates'>
                <span>latitude: {weather.latitude} </span>
                <span>longitude: {weather.longitude} </span>
            </div>

        </div>
    );
};

export default Map;