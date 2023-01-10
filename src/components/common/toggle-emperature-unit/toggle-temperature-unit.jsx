import React from 'react';
import './toggle-emperature-unit.css'
import Button from "../button";

const ToggleTemperatureUnit = () => {
    return (
        <div>
            <Button text='°F' disabled={true} width='44px' height='44px'/>
            <Button text='°C' disabled={false} width='44px' height='44px'/>
        </div>
    );
};

export default ToggleTemperatureUnit;