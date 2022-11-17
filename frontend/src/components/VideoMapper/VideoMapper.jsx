import React from 'react';
import VideoPresenter from "../VideoPresenter/VideoPresenter";
import styled from "styled-components";


const FlexContainer = styled.ul`
display: flex;
flex-wrap: wrap;
`

const VideoMapper = ({searchResults}) => {
    return ( 
        <FlexContainer>
                {searchResults.map(e => <VideoPresenter key={e.id.videoId} video={e}/>)}
        </FlexContainer>
    );
}
 
export default VideoMapper;