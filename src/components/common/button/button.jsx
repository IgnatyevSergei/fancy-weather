import React from 'react';
import './button.css'

const Button = (props) => {
    const {text, disabled, width, height, image} =props

    const style = {
        width: width,
        height: height
    }


    return (
        <>
        <button disabled={disabled} className='btn' style={style}>
            {text}<img src={image} />
        </button>
        </>
    );
};

export default Button;