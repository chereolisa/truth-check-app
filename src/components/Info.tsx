import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

function Info() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleCheckClick = () => {
    const isAuthenticated = localStorage.getItem('token') // or your auth logic

    if (!isAuthenticated) {
      navigate('/register') // redirect to login if not authenticated
    } else {
      // you can also set search state or store it globally if needed
      navigate('/processing') // go to processing page
    }
  }

  return (
    <>
      <div className='info-container'>
        <h1>Verify Before You Share-<br />
          Fight Misinformation in<br />
          Nigeria</h1>
        <p>TruthCheck helps you verify news, images, and claims circulating in Nigeria.<br />
          Stop misinformation before it spreads.</p>
      </div>

      <div className='verify-container'>
        <div className='verify'>
          <input
            className="verify-input"
            type="text"
            placeholder='Paste or type a URL, headline, or statement to fact check...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="verify-button"
            onClick={handleCheckClick}
            disabled={!searchQuery.trim()} // disable if input is empty
          >
            <i className="fas fa-file" style={{ fontSize: '18px', color: 'white' }}></i>&nbsp;Check Text
          </button>
        </div>
      </div>
    </>
  )
}

export default Info
