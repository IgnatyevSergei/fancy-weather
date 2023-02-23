import React from 'react';
import './weather-for-day.css'
import {useSelector} from "react-redux";
import {buttonSelector} from "../../selectors/button-selector";

const WeatherForDay = (props) => {
    const {day, temperature, date, icon} = props
    const {lang} = useSelector(buttonSelector)
    const options = { weekday: 'long'};


    return (
      <div className="weather-for-day-wrapper">
        <div className="day">
          {lang === "en" ? date.toLocaleString("en", options) : day}
        </div>
        <div className="temperature">
          <div className="temperature-degrees">{temperature}°</div>
          <div className="temperature-icon">
            <img
              className="iconWeather"
              src={`https://api.openweathermap.org/img/w/${icon}.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default WeatherForDay;