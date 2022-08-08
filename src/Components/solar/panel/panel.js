import React from 'react'
import './panel.css'


const Home = () => {
    
    return (
        // image container
        <div className='imageP'>
            <div className='image__title'>
                {/* title component */}
                <h1>Solar Pnels</h1>
                <p>Lowest Cost Solar Panels in America</p>
            </div>
            {/* Button Component */}
            
                <div className='image__button'>
                    <button className='image__button__left'>order now</button>
                    <button className='image__button__right'>learn more</button>
                </div>
            
            {/* Bounshing annimation component */}
            <div className='arrow bounce'></div>
        </div>
    )
}

export default Home
