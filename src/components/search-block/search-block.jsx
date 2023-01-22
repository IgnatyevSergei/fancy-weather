import React, { useRef} from 'react';
import './search-block.css'
import Button from "../common/button";
import { useDispatch } from 'react-redux';
import { getWeatherForCity } from '../../actions/action-weather';

const SearchBlock = () => {
    const dispatch = useDispatch()
    const inputRef = useRef()


  

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
          onClick={() => dispatch(getWeatherForCity(inputRef.current?.value))}
          width="101px"
          height="44px"
        />
      </div>
    );
};

export default SearchBlock;