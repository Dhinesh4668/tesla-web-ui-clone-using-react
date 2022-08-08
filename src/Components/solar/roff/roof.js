import React from 'react'
import './roof.css'


const Home = () => {
    
    return (
        // image container
        <div className='imageR'>
            <div className='image__title'>
                {/* title component */}
                <h1>Solar Roof</h1>
                <p>Produce Clearn Energy From Your Roof</p>
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
