import React from 'react';
import './header.css'
import ControlBlock from "../control-block";
import SearchBlock from "../search-block";

const Header = () => {
    return (
        <header className='header-wrapper'>
            <ControlBlock/>
            <SearchBlock/>
        </header>
    );
};

export default Header;