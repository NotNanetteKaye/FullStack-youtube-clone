import { useNavigate, useParams } from "react-router-dom";

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
        </div>
    )
}


export default VideoPage;