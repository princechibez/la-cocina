import React from 'react'
import './Categories.scss'
import breakfast from '../../assets/breakfast.png'
import beverages from '../../assets/beverages.png'
import dessert from '../../assets/dessert.png'
import dinner from '../../assets/dinner.png'
import holidays from '../../assets/holidays.png'
import lunch from '../../assets/lunch.png'
import regional from '../../assets/regional.png'
import snacks from '../../assets/snacks.png'
import special from '../../assets/special.png'
import qtimg from '../../assets/qtimg.png'
import { Link } from 'react-router-dom'

const Categories = () => {

    const portion = [
        {
            title : "Breakfast",
            image : breakfast
        },
        {
            title : "Lunch",
            image : lunch
        },
        {
            title : "Dinner",
            image : dinner
        },
        {
            title : "Dessert",
            image : dessert
        },
        {
            title : "Snacks",
            image : snacks
        },
        {
            title : "Beverages",
            image : beverages
        },
        {
            title : "Holidays",
            image : holidays
        },
        {
            title : "Regional Cusines",
            image : regional
        },
        {
            title : "Special Diets",
            image : special
        },
    ]

  return (
    <div className='categories'>
        <h1>Recipe Categories</h1>

        <div className="container">
            {portion.map((portion, items) => (
                <span>
                    <img src={portion.image} alt={portion.title} />
                    <p>{portion.title}</p>
                </span>
            ))}
        </div>

        <Link to='/recipes' className='link'>View all <i className='fa-solid fa-arrow-right'></i></Link>

        <div className="card">
            <div className="text">
                <h1>
                    15 Grab & Go
                    Breakfast For The 
                    Busiest Of Mornings
                </h1>
                <p>
                    No need to skip the most important meal of the day!
                </p>

                <h2>By Chef Jim</h2>
            </div>

            <img src={qtimg} alt="" />
        </div>
    </div>
  )
}

export default Categories