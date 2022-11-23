import { useNavigate, useParams } from "react-router-dom";
import CreateComment from "../../components/CreateComment/CreateComment";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

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
          <VideoPlayer currentVideoID={videoID}/>
          <CreateComment videoID = {videoID} />
        </div>
    )
}


export default VideoPage;