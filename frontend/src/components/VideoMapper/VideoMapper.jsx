import React from "react";

const VideoMapper = ({videoArray}) => {
    return ( 
        <ul>
            {videoArray.map(e => <li>{e.snippet.title}</li>)}
        </ul>
    );
}
 
export default VideoMapper;