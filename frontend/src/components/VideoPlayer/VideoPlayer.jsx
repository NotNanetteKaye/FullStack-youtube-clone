import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../../API_KEYS/API_KEY1';

const VideoPlayer = ({currentVideo}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const GetResults = async () => {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&id=${currentVideo}`);
            setTitle(response.data.items[0].snippet.title)
            setDescription(response.data.items[0].snippet.description)
            console.log(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }




    return (
        <div>
            <button onClick={GetResults}>Play video!</button>
            <iframe 
            className="video" 
            id="player" 
            type="text/html" 
            width="640" 
            height="360" 
            src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1&origin=http://example.com`}
            frameBorder="0"
            ></iframe>
            <div><h2>{title}</h2></div>
            <div><h3>{description}</h3></div>
        </div>
    )
}

export default VideoPlayer