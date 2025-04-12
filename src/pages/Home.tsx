import React from 'react'
import { useTranslation } from 'react-i18next'
import Info from '../components/Info'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'

function Home() {
  const { t } = useTranslation()

  return (
    <div className="text-center">
      <Info />
      <Features />
      <HowItWorks /> 
    </div>
  )
}

export default Home
