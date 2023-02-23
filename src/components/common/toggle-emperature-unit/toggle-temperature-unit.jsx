import React from 'react';
import './toggle-emperature-unit.css'
import {useDispatch, useSelector} from "react-redux";
import {buttonSelector} from "../../../selectors/button-selector";
import {setCelsiusAC, setFahrenheitAC} from "../../../actions/button-action";
import Controller from "../controller";

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
            <Controller text='°F' disabled={degrees==="imperial"}  onClick={toggleCelsius} width='44px' height='44px'/>
            <Controller text='°C' disabled={degrees==="metric"}  onClick={toggleFahrenheit} width='44px' height='44px'/>
        </div>
    );
};

export default ToggleTemperatureUnit;