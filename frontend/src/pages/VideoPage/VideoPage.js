import { useNavigate, useParams } from "react-router-dom";
import CreateComment from "../../components/CreateComment/CreateComment";

const VideoPage = () => {
    const {videoId} = useParams();

    let navigate = useNavigate();
    const goToSearchPage = () => {
      let path = '/searchpage';
      navigate(path);
    }

    return (
        <div>
          <button onClick={goToSearchPage}>Go to Search Page</button>
          <CreateComment videoID = {videoId} />
        </div>
    )
}


export default VideoPage;