import React from 'react';
import './refresh-bg-button.css'
import Vector from '../../../assets/picture/Vector.png'
import Controller from "../controller";


const RefreshBgButton = () => {


    return (
        <Controller image={Vector} disabled={true} width='44px' height='44px'/>
    );
};

export default RefreshBgButton;

