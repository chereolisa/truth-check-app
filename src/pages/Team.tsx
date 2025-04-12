import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Team() {

    return (
        <>
        <div className='team-container'>
            <h2>Meet The TruthCheck <span style={{color: "rgba(58, 186, 180, 1)"}}>Team</span></h2>
            <p>At TruthCheck, we believe that access to trusted information can<br/>
             make a real difference. We're here to help make that happen.</p>
        </div>
            <div className='team-images'>
                <img src="/images/team1.png" alt="Team" className='team-pic' />
                <img src="/images/team2.png" alt="Team" className='team-pic' />
                <img src="/images/team3.png" alt="Team" className='team-pic' />
            </div>
        </>
    )
}

export default Team