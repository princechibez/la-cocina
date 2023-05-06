import React from 'react'
import './About.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const About = () => {
  return (
    <div className='about'>
        <Navbar />
        
        <div className="container">
            <div className="box">
                <h1>OUR MISSION</h1>
                <p>
                    At , <i>La Cocina</i> our mission is to 
                    inspire and empower home cooks to create 
                    delicious and nutritious meals for their 
                    families and loved ones. We believe that 
                    cooking should be accessible, fun, and 
                    rewarding, and we strive to make that a 
                    reality for our visitors.
                </p>
            </div>
            <div className="box">
                <h1>OUR STORY</h1>
                <p>
                    "Founded in 2023 by a team 11, <i>La Cocina</i> &nbsp;
                    started as a humble blog with a few simple recipes. 
                    Over time, it grew into a trusted resource for home 
                    cooks, with a vast collection of recipes, cooking tips, 
                    and food-related content. Today, we are proud to be one 
                    of the leading food recipe websites on the internet, with 
                    a dedicated community of loyal readers and contributors.
                </p>
            </div>
            <div className="box">
                <h1>OUR PHILOSOPHY</h1>
                <p>
                    At ,<i>La Cocina</i> , we believe that cooking should be fun, 
                    creative, and accessible to everyone. That's why we strive to 
                    create recipes that are easy to follow, nutritious, and above 
                    all, delicious. We also believe in the importance of using fresh, 
                    seasonal ingredients, and in supporting local farmers and producers whenever possible.
                </p>
            </div>
            <div className="box">
                <h1>OUR TEAM</h1>
                <p>
                    Our team is made up of experienced food writers, recipe developers, 
                    and chefs who are passionate about sharing their love of food with others. 
                    With years of experience in the culinary world, we are committed to providing 
                    the highest quality recipes, cooking tips, and food-related content to our visitors.
                </p>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default About