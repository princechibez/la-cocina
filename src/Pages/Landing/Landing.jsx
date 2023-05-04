import React from 'react'
import './Landing.scss'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import Loading from '../Loading/Loading'

const Landing = () => {
  return (
    <div className='landing'>
        {/* <Navbar /> */}
        <Hero />
        {/* <Loading /> */}
    </div>
  )
}

export default Landing