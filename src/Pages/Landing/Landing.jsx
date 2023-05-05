import React from 'react'
import './Landing.scss'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import Loading from '../Loading/Loading'
import Footer from '../../Components/Footer/Footer'
import Features from '../../Components/Features/Features'
import Categories from '../../Components/Categories/Categories'

const Landing = () => {
  return (
    <div className='landing'>
        {/* <Navbar /> */}
        <Hero />
        <Features />
        <Categories />
        {/* <Loading /> */}
        <Footer />
    </div>
  )
}

export default Landing