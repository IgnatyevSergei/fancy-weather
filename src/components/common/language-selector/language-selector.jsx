import React from 'react';
import './language-selector.css'

const LanguageSelector = () => {
    return (
         <select className='language-selector-wrapper'>
             <option value='EN'>EN</option>
             <option value='RU'>RU</option>
         </select>

    );
};

export default LanguageSelector;