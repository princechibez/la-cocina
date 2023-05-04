import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

    function handleClick() {
        setToggleMobileMenu(!toggleMobileMenu)
    }

  return (
    <header>
        <Link to='/'><img src={logo} alt="" /></Link>

        <label htmlFor="">
            <input type="search" name="search" id="search" placeholder='Search for Recipes'/>
            <button><i class='fa-solid fa-magnifying-glass'></i></button>
        </label>

        <nav className='desktop'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/' className='link'>Recipes</Link>
            <Link to='/' className='link'>Blog</Link>
            <Link to='/' className='link'>About Us</Link>
            <Link to='/' className='link'>Contact Us</Link>
        </nav>

        <menu>
            <button onClick={handleClick}>
                <i class={`fa-solid fa-${!toggleMobileMenu ? 'bars' : 'times'} fa-2x`}></i>
            </button>

            { toggleMobileMenu && (   
                <nav>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/' className='link'>Recipes</Link>
                    <Link to='/' className='link'>Blog</Link>
                    <Link to='/' className='link'>About Us</Link>
                    <Link to='/' className='link'>Contact Us</Link>
                </nav>
            )}
        </menu>
    </header>
  )
}

export default Navbar