import React, {useMemo} from 'react';
import './title.css'
import {useSelector} from "react-redux";

const Title = () => {
    const {weather, isLoading} = useSelector(state => state.weatherReducer)
    const date =  new Date()
    const options = { weekday: 'long', day: 'numeric', month: 'long'};

    const now = date.toLocaleString('ru', options);



    console.log(weather)

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