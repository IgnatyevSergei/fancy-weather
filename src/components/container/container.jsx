import React, { useEffect } from "react";
import "./container.css";
import { getCoordinate, getWeatherForCity } from "../../actions/weather-action";
import { useDispatch, useSelector } from "react-redux";
import { buttonSelector } from "../../selectors/button-selector";
import { weatherSelector } from "../../selectors/weather-selector";

const Container = (props) => {
  const dispatch = useDispatch();
  const { lang, degrees } = useSelector(buttonSelector);
  const { weather } = useSelector(weatherSelector);

  useEffect(() => {
    getCoordinate(lang, degrees, dispatch);
  }, []);

  useEffect(() => {
    (async () => {
      await dispatch(getWeatherForCity(weather.city, lang, degrees));
    })();
    
  }, [lang, degrees, weather.city, dispatch]);

  return <div className="container">{props.children}</div>;
};

export default Container;
