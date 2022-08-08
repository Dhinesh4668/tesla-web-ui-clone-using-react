import React from 'react'
import './Item.css'


const Home = () => {
    
    return (
        // image container
        <div className='imageA'>
            <div className='image__title'>
                {/* title component */}
                <h1>Accessories</h1>
            </div>
            {/* Button Component */}
            
                <div className='image__button'>
                    <button className='imageA__button__left'>Shop now</button>
                </div>
        </div>
    )
}

export default Home
