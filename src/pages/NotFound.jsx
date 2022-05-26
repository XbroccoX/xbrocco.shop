import React from 'react';

import imageNotFound from '../assets/images/notFound.jpg';
import '../styles/NotFound.scss'

export const NotFound = () => {
    return (
        <div className='notFound-container'>
            <img className='notFound-img' src={imageNotFound} alt="" />
        </div>
    )
}
