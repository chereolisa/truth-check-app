import React from 'react'

const SocialBar = () => {
  return (
    <div className="socials" style={{}}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook" style={{ fontSize: '24px', color: 'white'}}></i>
      </a>&nbsp;&nbsp;
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin" style={{ fontSize: '24px', color: 'white'}}></i>
      </a>&nbsp;&nbsp;
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram" style={{ fontSize: '24px', color: 'white'}}></i>
      </a>&nbsp;&nbsp;
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter" style={{ fontSize: '24px', color: 'white'}}></i>
      </a>&nbsp;&nbsp;
    </div>
  )
}

export default SocialBar
