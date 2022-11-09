import React from 'react';

const PublicYoutubePage = ({currentVideo}) => {
    return (
        <div>
            {currentVideo.snippet.title}
        </div>
    )

}
;
export default PublicYoutubePage