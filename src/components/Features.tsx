import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

function Features() {

    return (
        <div className='features-container'>
            <h2>Features to Help You Fight Misinformation</h2>

            <div className='feature-images'>
                <img src='/images/feature1.png' alt='Feature 1' className='feature-image'/>
                <img src='/images/feature2.png' alt='Feature 2' className='feature-image'/>
                <img src='/images/feature3.png' alt='Feature 3' className='feature-image'/>
                <img src='/images/feature4.png' alt='Feature 4' className='feature-image'/>
                </div>
        </div>
    )
}
export default Features