import React, { useEffect } from "react";
import "./container.css";
import { getCoordinate, getWeatherForCity } from "../../actions/weather-action";
import { useDispatch, useSelector } from "react-redux";
import { buttonSelector } from "../../selectors/button-selector";
import { weatherSelector } from "../../selectors/weather-selector";
import {getBackground} from "../../actions/button-action";

const Container = (props) => {
  const dispatch = useDispatch();
  const { lang, degrees, background } = useSelector(buttonSelector);
  const { weather } = useSelector(weatherSelector);

  useEffect(() => {
    getCoordinate(lang, degrees, dispatch);
    dispatch(getBackground())
  }, []);

  useEffect(() => {
    (async () => {
      await dispatch(getWeatherForCity(weather.city, lang, degrees));
    })();
    
  }, [lang, degrees, weather.city, dispatch]);

  return <div style={{backgroundImage: `url(${background})`}} className="container">{props.children}</div>;
};

export default Container;
