import React from 'react'
import './profile.css'
export default function Profile() {
    return (
        <div className='flex'>
            <img src='./logo.jpg' />
            <div>
                <div className='flex'>
                    <p><strong>7</strong> posts </p>
                    <p><strong>295</strong> followers </p>
                    <p><strong>5</strong> following </p>
                </div>
                <div>
                    <p>
                        <strong>React Dev</strong>
                        <span className='pad'>he</span>
                    </p>
                    <p>
                        <span>Video creator</span>
                    </p>
                    <p>
                        I create educational videos
                    </p>
                    <p className='hashtags'>
                        #reactjs #html #htmlcss 
                        #css #javascript
                    </p>
                </div>
            </div>
        </div>
    )
}
