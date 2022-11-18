import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../../API_KEYS/API_KEY1";


const VideoPage = ({video, setSearchResults}) => {
    const {videoId} = useParams();

    const GetRelatedResults = async () => {
        try {
            let response = await axios.get(
              `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&relatedToVideoID=${videoId}type=video&maxResults=5`
            );
            setSearchResults(response.data.items);
          } catch (error) {
            console.log(error.response.data);
          }
    }

    return (
        <div>
            <iframe
                title= "default-player"
                id= "player"
                type= "text/html"
                width= "640"
                height= "390"
                src= {`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
                frameBorder='0'
            ></iframe>
            <h2>{videoId}</h2>
            {/* need to show title and description of video */}
            {/* videomapper here? */}

        </div>
    )
}


export default VideoPage;