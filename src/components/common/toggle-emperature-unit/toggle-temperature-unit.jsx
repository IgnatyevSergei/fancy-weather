import React from 'react';
import './toggle-emperature-unit.css'
import Button from "../button";
import {useDispatch, useSelector} from "react-redux";
import {buttonSelector} from "../../../selectors/button-selector";
import {setCelsiusAC, setFahrenheitAC} from "../../../actions/action-button";

const ToggleTemperatureUnit = () => {
    const {degrees} = useSelector(buttonSelector)
    const dispatch = useDispatch()


    const toggleFahrenheit = () => {
        dispatch(setCelsiusAC())
    }

    const toggleCelsius = () => {

        dispatch(setFahrenheitAC())
    }


    return (
        <div>
            <Button text='°F' disabled={degrees==="imperial"}  onClick={toggleCelsius} width='44px' height='44px'/>
            <Button text='°C' disabled={degrees==="metric"}  onClick={toggleFahrenheit} width='44px' height='44px'/>
        </div>
    );
};

export default ToggleTemperatureUnit;