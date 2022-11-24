import { useNavigate, useParams } from "react-router-dom";
import CreateComment from "../../components/CreateComment/CreateComment";
import GetRelatedVideos from "../../components/GetRelatedVideos/GetRelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import SeeComments from "../../components/SeeComments/SeeComments";

const VideoPage = () => {
    const {videoID} = useParams();

    let navigate = useNavigate();
    const goToSearchPage = () => {
      let path = '/searchpage';
      navigate(path);
    }

    return (
        <div>
          <button onClick={goToSearchPage}>Go to Search Page</button>
          <VideoPlayer currentVideo = {videoID}/>
          <GetRelatedVideos videoID = {videoID}/>
          <CreateComment videoID = {videoID}/>
          <SeeComments videoID={videoID}/>
        </div>
    )
}


export default VideoPage;