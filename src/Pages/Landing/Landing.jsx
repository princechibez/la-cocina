import React from 'react'
import './Landing.scss'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import Loading from '../Loading/Loading'
import Footer from '../../Components/Footer/Footer'
import Features from '../../Components/Features/Features'

const Landing = () => {
  return (
    <div className='landing'>
        {/* <Navbar /> */}
        <Hero />
        <Features />
        {/* <Loading /> */}
        <Footer />
    </div>
  )
}

export default Landing