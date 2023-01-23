import React, {useRef} from 'react';
import './search-block.css'
import Button from "../common/button";
import {useDispatch, useSelector} from 'react-redux';
import { getWeatherForCity } from '../../actions/action-weather';
import {buttonSelector} from "../../selectors/button-selector";
import {setFahrenheitAC} from "../../actions/action-button";

const SearchBlock = () => {
    const{degrees, lang}=useSelector(buttonSelector)

    const dispatch = useDispatch()
    const inputRef = useRef()

    const setDegrees = () => {
        dispatch(setFahrenheitAC())
    }

    const getData =()=>{
        setDegrees()
            dispatch(getWeatherForCity(inputRef.current?.value, lang, 'metric'))
        console.log(degrees, '2')
        }


  

    return (
      <div className="search-block">
        <input
          type="search"
          ref={inputRef}
          placeholder="Search city"
          className="search-block_input"
        />
        <Button
          text="SEARCH"
          onClick={getData}
          width="101px"
          height="44px"
        />
      </div>
    );
};

export default SearchBlock;