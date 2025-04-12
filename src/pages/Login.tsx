import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  
    // Your API login URL
    const loginUrl = 'https://your-api-url.com/login'
  
    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Sending email and password as JSON
      })
  
      if (!response.ok) {
        throw new Error('Login failed')
      }
  
      const data = await response.json()
      console.log('Logged in successfully:', data)
  
      // Example: Save user data or token (localStorage or state management)
      localStorage.setItem('userToken', data.token) // Or set in global state
  
      // Redirect to the VerifyNow page after successful login
      navigate('/verify-now')
    } catch (err) {
      alert('Login failed. Please try again.')
      console.error(err)
    }
  }

  return (
    <div className="login-container">
      <h2 className="login-text">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="login-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="login-input"
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  )
}

export default Login
