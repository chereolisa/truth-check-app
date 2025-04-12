import React from 'react'
import ReactDOM from 'react-dom/client' // ✅ Use from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'


const container = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
