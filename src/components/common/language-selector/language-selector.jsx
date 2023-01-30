import React from "react";
import {useDispatch} from "react-redux";
import Option from "../option/option";
import "./language-selector.css";
import {setLangAC} from "../../../actions/action-button";

const data = [
    {id: 1, text: "en", value: "en"},
    {id: 2, text: "ru", value: "ru"},
];

const LanguageSelector = () => {
    const dispatch = useDispatch();

    const handleChangeLang = (e) => {
        const value = e.target.value
        dispatch(setLangAC(value));
    }

    return (
        <select onChange={handleChangeLang} className="language-selector-wrapper">
            {data.map(({id, text, value}) => {
                return <Option value={value} text={text} key={id}/>;
            })}
        </select>
    );
};

export default LanguageSelector;
