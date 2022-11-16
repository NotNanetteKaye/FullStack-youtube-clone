import React, { useState } from 'react';
import VideoPresenter from '../VideoPresenter/VideoPresenter';
import './SearchBar.css'
import axios from 'axios';
// import { API_KEY } from '../../API_KEYS/API_KEY1';


const SearchBar = ({inputHandler, GetResults, inputText}) => {

    return(
        <div className='search'>
            <div className='searchInputs'>
                <input type='text' value={inputText} placeholder='Search for videos here...' onChange={inputHandler}/>
                <button onClick={() => {GetResults()}}>Search here!</button>
            </div>
            <div className='youtubeResults'>
            </div>
        </div>
    )
}

export default SearchBar



    // const [inputText, setInputText] =useState('');
    // const [searchResults, setSearchResults] = useState([]); 

    // let inputHandler = (e) => {
    //     const lowerCase = e.target.value.toLowerCase();
    //     setInputText(lowerCase);
    //   };

    // const GetResults = async () => {
    //     try {
    //         let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${inputText}&part=snippet&maxResults=10`)
    //         setSearchResults(response.data.items)
    //     } catch (error) {
    //         console.log(error.response.data);
    //       }
    // } 