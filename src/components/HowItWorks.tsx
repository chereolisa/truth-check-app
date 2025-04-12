import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

function Features() {

    return (
        <div className='howitworks-container'>
            <h2>How TruthCheck Works</h2>

            <div className='howitworks-images'>
                <img src='/images/howitworks1.png' alt='How it works' className='howitworks-image'/>
                <img src='/images/howitworks2.png' alt='How it works' className='howitworks-image'/>
                <img src='/images/howitworks3.png' alt='How it works' className='howitworks-image'/>
                <img src='/images/howitworks4.png' alt='How it works' className='howitworks-image'/>
                </div>
        </div>
    )
}
export default Features