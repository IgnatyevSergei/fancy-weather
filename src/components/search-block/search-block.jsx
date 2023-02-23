import React, { useRef } from "react";
import "./search-block.css";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherForCity } from "../../actions/weather-action";
import { buttonSelector } from "../../selectors/button-selector";
import Controller from "../common/controller";
import {getBackground} from "../../actions/button-action";

const SearchBlock = () => {
  const { lang, degrees } = useSelector(buttonSelector);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const getData = () => {
    if (!inputRef.current?.value) {
      return;
    }
    dispatch(getWeatherForCity(inputRef.current?.value, lang, degrees));
    dispatch (getBackground())
  };

  return (
    <div className="search-block">
      <input
        type="search"
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            getData();
            dispatch (getBackground())
          }
        }}
        ref={inputRef}
        placeholder={lang === "en" ? "Search city" : "Введите город"}
        className="search-block_input"
      />
      <Controller
        text={lang === "en" ? "SEARCH" : "ПОИСК"}
        onClick={getData}
        width="101px"
        height="44px"
      />
    </div>
  );
};

export default SearchBlock;
