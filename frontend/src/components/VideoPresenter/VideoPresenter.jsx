import React from "react";

const VideoPresenter = ({video}) => {
    return ( 
    <li>
        <img src={video.snippet.thumbnails.high.url} height={video.snippet.thumbnails.high.height} width={video.snippet.thumbnails.high.width} alt=''/>
        <h3>{video.snippet.title}</h3>
    </li>
    );
}
 
export default VideoPresenter;