import React from "react";
import VideoPresenter from "../VideoPresenter/VideoPresenter";

const VideoMapper = ({videoArray}) => {
    return ( 
        <ul>
            {videoArray.map(e => <VideoPresenter key={e.id.videoId} video={e}/>)}
        </ul>
    );
}
 
export default VideoMapper;