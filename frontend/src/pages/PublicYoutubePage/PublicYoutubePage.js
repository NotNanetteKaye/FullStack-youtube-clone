import React from 'react';

const PublicYoutubePage = ({currentVideo}) => {
    return (
        <div>
            <button>Get Video</button>
            <iframe
                title='default-player'
                id='player'
                type='text/html'
                width='640'
                height='390'
                src="http://www.youtube.com/embed/p38WgakuYDo?enablejsapi=1&origin=http://example.com"
                frameBorder='0'
            ></iframe>
        </div>
    )

}
;
export default PublicYoutubePage