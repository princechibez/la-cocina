import React, { useRef, useState, useEffect } from 'react'
import './Navbar.scss'
import 'animate.css/animate.min.css'
import logo from '../../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
    const menuRef = useRef(null)

    const location = useLocation();

  useEffect(() => {
    if (toggleMobileMenu) {
      menuRef.current.classList.add("animate__fadeInRight");
      menuRef.current.classList.remove("animate__fadeOutRight");
    } else {
      menuRef.current.classList.add("animate__fadeOutRight");
      menuRef.current.classList.remove("animate__fadeInRight");
    }
  }, [toggleMobileMenu]);

  function handleClick() {
    setToggleMobileMenu((prevToggleMobileMenu) => !prevToggleMobileMenu);
  }

  return (
    <header>
        <Link to='/' id='img'><img src={logo} alt="" /></Link>

      <label htmlFor="">
        <input type="search" name="search" id="search" placeholder="Search for Recipes" />
        <button>
          <i className="fa-solid fa-magnifying-glass fa-2x"></i>
        </button>
      </label>

        <nav className='desktop'>
            <Link to='/' className={`link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to='/recipes' className={`link ${location.pathname === '/recipes' ? 'active' : ''}`}>Recipes</Link>
            <Link to='/blog' className={`link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Link>
            <Link to='/about' className={`link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
            <Link to='/contact' className={`link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>

        </nav>

      <Link to="/signup" className="link sign">
        {" "}
        Sign Up
      </Link>

      <menu>
        <button onClick={handleClick}>
          <i className={`fa-solid fa-${!toggleMobileMenu ? "bars" : "times"} fa-3x`}></i>
        </button>

            <nav className="animate__animated" ref={menuRef}>                    <Link to='/' className='link'>Home</Link>
                <Link to='/recipes' className='link'>Recipes</Link>
                <Link to='/' className='link'>Blog</Link>
                <Link to='/' className='link'>About Us</Link>
                <Link to='/' className='link'>Contact Us</Link>
                <Link to='/signup' className='link'>Sign Up</Link>
            </nav>
        </menu>
    </header>
  );
};

export default Navbar;
