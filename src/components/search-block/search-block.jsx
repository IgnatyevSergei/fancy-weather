import React from 'react';
import './search-block.css'
import Button from "../common/button";

const SearchBlock = () => {
    return (
        <div className='search-block'>
            <input type='search' placeholder='Search city' className='search-block_input'/>
            <Button text='SEARCH'  width='101px' height='44px'/>

        </div>
    );
};

export default SearchBlock;