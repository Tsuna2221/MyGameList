import React, { useState } from 'react';

const ImageViewer = ({clip, screenshots}) => {
    const [currentMedia, setMedia] = useState(screenshots[0].image);
    
    return (
        <div className='image-viewer'>
            <img className="cw-100" src={currentMedia} alt=""/>
            <div className="viewer-list d-flex pad-t-10 ">
                {screenshots.map(({image, id}) => <img className="clickable" onClick={() => setMedia(image)} src={image} id={id} alt=""/>)}
            </div>
        </div>
    )
}

export default ImageViewer;