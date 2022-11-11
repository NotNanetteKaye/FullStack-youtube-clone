import React from 'react';
import './SearchBar.css'

const SearchBar = ({YoutubeData}) => {
    return(
        <div className='search'>
            <h3>Search for Videos</h3>
            <div className='searchInputs'>
                <input type='text' placeholder='Enter video here...'/>
                <div className='searchIcon'></div>
            </div>
            <div className='youtubeResults'></div>
        </div>
    )
}

export default SearchBar