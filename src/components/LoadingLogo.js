import React from 'react';
import image from './assets/btsloading.png';
import './bts.css';

const LoadingLogo = () => {

    return (

        <div className='loading-logo'>
            <img src={image} alt="logo" />
        </div>
    );
};

export default LoadingLogo;