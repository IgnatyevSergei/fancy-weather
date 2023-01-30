import React, {useRef} from "react";
import "./search-block.css";
import Button from "../common/button";
import {useDispatch, useSelector} from "react-redux";
import {getWeatherForCity} from "../../actions/action-weather";
import {buttonSelector} from "../../selectors/button-selector";

const SearchBlock = () => {
    const {lang, degrees} = useSelector(buttonSelector);
    const dispatch = useDispatch();
    const inputRef = useRef();

    const getData = () => {
        if (!inputRef.current?.value) {
            return;
        }
        dispatch(getWeatherForCity(inputRef.current?.value, lang, degrees));

    };

    return (
        <div className="search-block">
            <input
                type="search"
                ref={inputRef}
                placeholder="Search city"
                className="search-block_input"
            />
            <Button text="SEARCH" onClick={getData} width="101px" height="44px"/>
        </div>
    );
};

export default SearchBlock;
