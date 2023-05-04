import React from 'react'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <header>
        <img src={logo} alt="" />

        <label htmlFor="">
            <input type="search" name="search" id="search" />
            <button><i class='fa-solid fa-magnifying-glass'></i></button>
        </label>
    </header>
  )
}

export default Navbar