import React from 'react'
import './Landing.scss'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import Loading from '../Loading/Loading'
import Footer from '../../Components/Footer/Footer'

const Landing = () => {
  return (
    <div className='landing'>
        {/* <Navbar /> */}
        <Hero />
        {/* <Loading /> */}
        <Footer />
    </div>
  )
}

export default Landing