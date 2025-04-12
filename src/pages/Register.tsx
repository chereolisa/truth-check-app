import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Register() {
    return (
        <div className='register-container'>
            <h1 style={{   fontFamily: 'Inter',
                        fontSize: '40px', 
                        color: 'rgba(46, 46, 46, 1)', 
                        padding: '10px', 
                        textAlign: 'center', 
                        marginBottom: '30px' }}>Register</h1>

            <p style={{ fontFamily: 'Inter', 
                        fontSize: '16px', 
                        color: 'rgba(46, 46, 46, 1)', 
                        textAlign: 'center' }}>New User? <Link to="/signup">Sign Up</Link></p>

            <h3 style={{fontFamily: 'Inter',
                        fontSize: '30px', 
                        color: 'rgba(46, 46, 46, 1)', 
                        padding: '10px', 
                        textAlign: 'center', 
                        marginBottom: '30px', 
                        marginTop: '30px' }}>OR</h3><br/>

            <p style={{ fontFamily: 'Inter', fontSize: '16px', color: 'rgba(46, 46, 46, 1)', textAlign: 'center' }}>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    )
}
export default Register