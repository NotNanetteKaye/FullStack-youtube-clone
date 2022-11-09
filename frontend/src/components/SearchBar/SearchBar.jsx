import React from 'react';

const SearchBar = ({placeholder, handleChange}) => {
    return(
        <div>
            <h3>Search for Videos</h3>
            <input type='search'
            className = 'search'
            placeholder = {placeholder}
            onChange= {handleChange}
            />
        </div>
    )
}

export default SearchBar