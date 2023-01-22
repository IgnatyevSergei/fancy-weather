import React, {useMemo} from 'react';
import './weather-for-three-day.css'
import WeatherForDay from "../weather-for-day";
import { useSelector } from 'react-redux';

const WeatherForThreeDay = () => {
const {weather, isLoading} = useSelector(state=>state.weatherReducer);

const content = useMemo(() => {
    if(isLoading===null) {
        return
    }
    if (isLoading) {
        return
    } if (weather.threeDays.length){
        return weather.threeDays?.map((item) => {
                return <WeatherForDay key={item.date} {...item} />;
            })}

}, [isLoading, weather])


    return (
    <div className="weather-for-three-day-wrapper">
        {content}
    </div>

    );
};

export default WeatherForThreeDay;