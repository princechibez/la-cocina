import React from 'react'
import './Hero.scss'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import { Slide } from 'react-awesome-reveal'

const Hero = () => {
  return (
    <div className='hero'>
        <Navbar />

        <Slide delay={0.2} triggerOnce={true} damping={2}>
            <span>
                <h1>
                Ultimate Destination For Mouthwatering Recipes.
                </h1>

                <p>
                    Your go-to source for delicious recipes and cooking inspiration!
                    Take your cooking to the next level. Start cooking and enjoy.
                </p>

                <Link to='/' className='link'>View Recipe <i class='fa-solid fa-arrow-right'></i></Link>

            </span>
        </Slide>

    </div>
  )
}

export default Hero