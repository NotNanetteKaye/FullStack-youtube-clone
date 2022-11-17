import { useParams } from "react-router-dom";


const VideoPage = () => {
    const {videoId} = useParams();

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
        </div>
    )
}


export default VideoPage;