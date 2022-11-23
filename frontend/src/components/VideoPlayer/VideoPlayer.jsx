import React, { useState } from 'react';
import axios from 'axios';

const VideoPlayer = ({currentVideoID}) => {

    
    return (
        <div>
            <iframe 
            className="video" 
            id="player" 
            type="text/html" 
            width="640" 
            height="360" 
            src={`https://www.youtube.com/embed/${currentVideoID}?autoplay=1&origin=http://example.com`}
            frameBorder="0"
            ></iframe>
        </div>
    )
}

export default VideoPlayer