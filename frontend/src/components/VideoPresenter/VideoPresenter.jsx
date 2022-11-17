import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import './VideoPresenter.css'

const colorArray = [
    '#ff99c8', '#fcf6bd', '#d0f4de', '#a9def9', '#e4c1f9'
]

const Panel = styled.li`
width: 600px;
padding: 1rem;
display: grid;
place-content: center;
justify-items: center;
`

const navigateToVideo = () => {
}

const VideoPresenter = ({video}) => {
    return ( 
    <Panel style={{backgroundColor: `${colorArray[Math.floor(Math.random()*colorArray.length)]}`}}>
        <button className="videotitle" onClick={navigateToVideo()}>
            <img src={video.snippet.thumbnails.high.url} height={video.snippet.thumbnails.high.height} width={video.snippet.thumbnails.high.width} alt=''/>
            <h5>{video.snippet.title} </h5>
        </button>
    </Panel>
    );
}
 
export default VideoPresenter;