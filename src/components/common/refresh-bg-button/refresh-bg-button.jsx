import React from 'react';
import './refresh-bg-button.css'
import Vector from '../../../assets/picture/Vector.png'
import Button from "../button";

const RefreshBgButton = () => {
    return (
        <Button image={Vector} disabled={true} width='44px' height='44px'/>
    );
};

export default RefreshBgButton;

