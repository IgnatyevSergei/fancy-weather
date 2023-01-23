import React from 'react';
import './language-selector.css'
import {useSelector} from "react-redux";
import {buttonSelector} from "../../../selectors/button-selector";

const LanguageSelector = () => {
    const{lang} = useSelector(buttonSelector)
    console.log(lang)

    return (
         <select className='language-selector-wrapper'>
             <option value='EN'>EN</option>
             <option value='RU'>RU</option>
         </select>

    );
};

export default LanguageSelector;