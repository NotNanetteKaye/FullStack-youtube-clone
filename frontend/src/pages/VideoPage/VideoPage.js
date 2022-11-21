import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../../API_KEYS/API_KEY1";
import VideoMapper from "../../components/VideoMapper/VideoMapper";

const VideoPage = ({video, setSearchResults, searchResults}) => {
    const {videoId} = useParams();

    const GetRelatedResults = async () => {
        try {
            let response = await axios.get(
              `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=5`
            );
            setSearchResults(response.data.items);
          } catch (error) {
            console.log(error.response.data);
          }
    }

    return (
        <div>
          <button onClick={()=>{GetRelatedResults()}}>Click for Related</button>
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
            <VideoMapper searchResults={searchResults} />

        </div>
    )
}


export default VideoPage;