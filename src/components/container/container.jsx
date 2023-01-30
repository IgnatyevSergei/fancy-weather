import React, {useEffect} from 'react';
import './container.css'
import {getCoordinate, getWeatherForCity} from "../../actions/action-weather";
import {useDispatch, useSelector} from "react-redux";
import {buttonSelector} from "../../selectors/button-selector";
import {weatherSelector} from "../../selectors/weather-selector";

const Container = (props) => {
    const dispatch = useDispatch();
    const {lang, degrees} = useSelector(buttonSelector)
    const {weather} = useSelector(weatherSelector)

    useEffect(() => {
        (async()=>{
           await getCoordinate(lang, degrees, dispatch)
           await dispatch(getWeatherForCity(weather.city, lang, degrees))
        })()
    }, [lang, degrees])



    return (
        <div className='container'>
            {props.children}
        </div>
    );

}

export default Container;