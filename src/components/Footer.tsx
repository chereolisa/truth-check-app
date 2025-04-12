import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import SocialBar from './SocialBar'

function Footer() {

    return (
        <div className='footer-container'>
            <footer className='footer'>
            <div className='footer-logo'>
                <img src="/images/Footer-logo.png" alt="Logo" className='footer-pic' />
                <p>Fighting misinformation in Nigeria <br/>
                through education and technology</p>
                <SocialBar />
            </div>


            <div className='footer-links'>
                <h3>Quick Links</h3>
                <ul className='footer-list'>
                    <li><Link to="/">{'Home'}</Link></li>
                    <li><Link to="/src/pages/AboutUs.tsx">{'About Us'}</Link></li>
                    <li><Link to="/faq">{'Our FAQs'}</Link></li>
                    <li><Link to="/src/pages/Contact.tsx">{'Contact'}</Link></li>
                </ul>
            </div>

            <div className='team'>
                <h3>Team</h3>
                <ul className='team-list'>
                    <li><Link to="/team">{'Meet the Team'}</Link></li>
                    <li><a href="google.com">Our Mission</a></li>
                    <li><a href="google.com">Contact Us</a></li>
                </ul>
            </div>

            <div className='FAQ-links'>
                <h3>For Professionals</h3>
                <ul className='FAQ-list'>
                    <li><a href="google.com">Getting Strarted</a></li>
                    <li><a href="google.com">Privacy and Security</a></li>
                    <li><a href="google.com">Technical support</a></li>
                </ul>
            </div>

            </footer>  

            
            <div className="copyright">
                <hr/>
                <p>©2025 TruthCheck. All Rights Reserved</p>
            </div>
         
        </div>
    )
}


export default Footer

