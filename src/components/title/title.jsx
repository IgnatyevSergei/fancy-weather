import React, {useMemo} from 'react';
import './title.css'
import {useSelector} from "react-redux";
import {weatherSelector} from "../../selectors/weather-selector";
import {buttonSelector} from "../../selectors/button-selector";
import Clock from "../common/ clock";

const Title = () => {
    const {weather, isLoading} = useSelector(weatherSelector)
    const {lang} = useSelector(buttonSelector)
    const date =  new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'long'};
    const now = date.toLocaleString(lang, options);


    const content = useMemo(() => {
        if (isLoading === null) {
            return
        }
        if (!lang) {
            return
        }
        if (isLoading) {
            return
        }

        return <div className='title-wrapper'>
            <h3 className='country'>{weather.city}, {weather.country}  </h3>
            <h4 className='day-and-time'>{now} <Clock/> </h4>
        </div>}, [weather])




    return (
        <>
            {content}
        </>
    );
};

export default Title;