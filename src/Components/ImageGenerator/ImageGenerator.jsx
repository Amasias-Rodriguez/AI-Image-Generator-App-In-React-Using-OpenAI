import React from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'


const ImageGenerator = () => {
    return (
        <div className='ai-image-generator'>
            <div className="header">Ai image <span>generator</span></div>
            <div className="img-loading">
                <div className="image"><img src={default_image} alt="" /></div>
            </div>
            <div className="search-box">
                <input type="text" className='search-input' placeholder='Describe What you want To see' />
            </div>
        </div>
    )
}

export default ImageGenerator