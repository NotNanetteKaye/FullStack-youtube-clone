import { useParams } from "react-router-dom";


const VideoPage = () => {
    const {videoId} = useParams();

    return (
        <div>
            <h1>{videoId}</h1>
        </div>
    )
}

// const VideoPage = ({currentVideoID}) => {
//     return (
//         <div>
//              <iframe
//                 title='default-player'
//                 id='player'
//                 type='text/html'
//                 width='640'
//                 height='390'
//                 src={`http://www.youtube.com/embed/${currentVideoID}?enablejsapi=1&origin=http://example.com`}
//                 frameBorder='0'
//             ></iframe>
//         </div>
//     )

// }

export default VideoPage;