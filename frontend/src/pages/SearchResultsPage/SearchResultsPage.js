import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import VideoMapper from '../../components/VideoMapper/VideoMapper';
import SearchBar from '../../components/SearchBar/SearchBar';
import {API_KEY} from '../../API_KEYS/API_KEY1';
import { Link } from 'react-router-dom';


const SearchResultsPage = () => {

    const [user, token] = useAuth();
    const [videos, setVideos] = useState([])

    const getVideos = async (videoTitle = 'recess therapy') => {
        try{
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${videoTitle}&part=snippet&maxResults=10`
            );
            setVideos(response.data.items);
            console.log(response.data)
        } catch (error){
            console.log(error.response.data);
        }
        };

    useEffect(() => {    
        getVideos();
    }, [token]);


    const getVideo = (videoId) => {
        
    }


    return (
        <div>
            <SearchBar getVideos = {getVideos} />
            <div>
            {videos.map((video, index) => {
                return(
                <Link to={`/videopage/${video.id.videoId}`}>
                    <div className='column' key = {index}>{video.snippet ?  <img className = 'thumbnail' src={video.snippet.thumbnails.default.url} onClick={ () => getVideo(video)}></img> : null}    
                    </div>
                </Link>
                )
            })}    
            </div>

        </div>
    )
};

export default SearchResultsPage;
