import React, { useMemo } from "react";
import "./weather-today.css";
import AboutTheWeather from "../common/about-the-weather";
import { useSelector } from "react-redux";
import { weatherSelector } from "../../selectors/weather-selector";

const WeatherToday = () => {
  const { weather, isLoading } = useSelector(weatherSelector);


  const content = useMemo(() => {
    if (isLoading === null) {
      return;
    }
    if (isLoading) {
      return;
    }

    return (
      <div className="weather-today-wrapper">
        <div className="weather-today-block">
          <div className="number">{weather?.toDay?.temperature}</div>
          <div className="information-block">
            <div className="information-block_degree-sign">°</div>
            <div className="information-block_cloud">
              <img
                src={`https://api.openweathermap.org/img/w/${weather?.toDay?.icon}.png`}
                alt=""
                className="image-cloud"
              />
            </div>
            <AboutTheWeather />
          </div>
        </div>
      </div>
    );
  }, [isLoading, weather]);

  return <>{content}</>;
};

export default WeatherToday;
