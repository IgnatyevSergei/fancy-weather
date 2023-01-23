import React from 'react';
import './title.css'
import {useSelector} from "react-redux";
import {weatherSelector} from "../../selectors/weather-selector";

const Title = () => {
    const {weather, isLoading} = useSelector(weatherSelector)
    const date =  new Date()
    const options = { weekday: 'long', day: 'numeric', month: 'long'};
    const now = date.toLocaleString('ru', options);


    const content = () => {
        if (isLoading === null) {
            return
        }
        if (isLoading) {
            return
        }

        return <div className='title-wrapper'>
            <h3 className='country'>{weather.city}, {weather.country}</h3>
            <h4 className='day-and-time'>{now} </h4>
        </div>


    }

    return (
        <>
            {content()}
        </>
    );
};

export default Title;