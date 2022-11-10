import React from 'react';

const PublicYoutubePage = ({currentVideo}) => {
    return (
        <div>
            <iframe
                title='default-player'
                id='player'
                type='text/html'
                width='640'
                height='390'
                src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
                frameBorder='0'
            ></iframe>
        </div>
    )

}
;
export default PublicYoutubePage