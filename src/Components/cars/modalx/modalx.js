import React from 'react'
import './modalx.css'


const Home = () => {
    
    return (
        // image container
        <div className='imageX'>
            <div className='image__title'>
                {/* title component */}
                <h1>Modal X</h1>
                <p>Order Online for Touchless Delivery</p>
            </div>
            {/* Button Component */}
            
                <div className='image__button'>
                    <button className='image__button__left'>costume order</button>
                    <button className='image__button__right'>existing inventonry</button>
                </div>
            
            {/* Bounshing annimation component */}
            <div className='arrow bounce'></div>
        </div>
    )
}

export default Home