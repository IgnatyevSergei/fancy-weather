import React from 'react';
import './refresh-bg-button.css'
import Vector from '../../../assets/picture/Vector.png'
import Controller from "../controller";
import {getBackground} from "../../../actions/button-action";
import {useDispatch} from "react-redux";


const RefreshBgButton = () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch (getBackground())
    }

    return (
        <Controller image={Vector} onClick={onClick}  width='44px' height='44px'/>
    );
};

export default RefreshBgButton;

