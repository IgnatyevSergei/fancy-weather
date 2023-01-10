import React from 'react';
import './control-block.css'
import RefreshBgButton from "../common/refresh-bg-button";
import LanguageSelector from "../common/language-selector";
import ToggleTemperatureUnit from "../common/toggle-emperature-unit";

const ControlBlock = () => {
    return (
        <div className='control-block-wrapper'>
            <RefreshBgButton/>
            <LanguageSelector/>
            <ToggleTemperatureUnit/>
        </div>
    );
};

export default ControlBlock;