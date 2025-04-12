import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false); // Close the menu when a link is clicked

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/images/nav-logo.png" alt="Logo" className="nav-logo" />
      </div>


      <div className="language-btn">
        <LanguageSwitcher />
      </div>


      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link className='links' to="/src/pages/Features.tsx" onClick={closeMenu}>{'Features'}</Link></li>
          <li><Link className='links' to="/team" onClick={closeMenu}>{'Team'}</Link></li>
          <li><Link className='links' to="/howitworks" onClick={closeMenu}>{'How it works'}</Link></li>
          <li><Link className='links' to="/verify-now" onClick={closeMenu}>{'Verify Now'}</Link></li>
          <li><Link className='links' to="faq" onClick={closeMenu}>{'FAQ'}</Link></li>
        </ul>
      </div>

      <div className="nav-actions">
        <button className="signup">
          <Link to="/signup" className="signup-link">{'Sign Up'}</Link>
        </button>
        <button className="login">
          <Link to="/login" className="login-link">{'Login'}</Link>
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  )
}

export default Navbar
