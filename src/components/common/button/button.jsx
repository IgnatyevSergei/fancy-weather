import React from 'react';
import './button.css'

const Button = (props) => {
    const {text, disabled, width, height, image, onClick} =props

    const style = {
        width: width,
        height: height
    }


    return (
      <>
        <button
          disabled={disabled}
          onClick={onClick}
          className="btn"
          style={style}
        >
          {text || <img src={image} alt='image' />}

        </button>
      </>
      
    );
};

export default React.memo(Button) ;