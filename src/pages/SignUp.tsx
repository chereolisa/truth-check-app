import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' })
  const navigate = useNavigate()  // For redirecting after sign-up

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Example API URL for signup (replace with your actual API endpoint)
    const signupUrl = 'https://your-api-url.com/signup'

    try {
      const response = await fetch(signupUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send username, email, and password
      })

      if (!response.ok) {
        throw new Error('Sign up failed')
      }

      const data = await response.json()
      console.log('Signed up successfully:', data)

      // You can store user data or token here (e.g., in localStorage or global state)
      localStorage.setItem('userToken', data.token)

      // After successful sign-up, navigate to the VerifyNow page
      navigate('/verifynow')
    } catch (err) {
      alert('Sign up failed. Please try again.')
      console.error(err)
    }
  }

  return (
    <div className="signup-container">
      <h2 className="signup-text">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          className="signup-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="signup-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="signup-input"
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
