import React from 'react';
import './search-panel.css';

const SearchPanel =() =>{
    return (
        <input
            className = "search-panel search-input"
            type = "text"
            placeholder = "Поиск по записям"
        />
    )
}

export default SearchPanel;