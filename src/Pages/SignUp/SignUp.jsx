import React, { useState } from 'react'
import './SignUp.scss'
import logo from '../../assets/logo-a.svg'
import signup from '../../assets/signup.svg'
import deco from '../../assets/deco.svg'
import google from '../../assets/google-icon.svg'
import facebook from '../../assets/facebook-icon.svg'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [formstate, setFormState] = useState({
        email: '',
        password: '',
    })

    const [toggleVisibility, setToggleVisibility] = useState(false)

    const handleInputChange = e => {
        const {name, value} = e.target
        setFormState(prevState => ({ ...prevState, [name] : value}))
    }

    function handleClick(){
        setToggleVisibility(!toggleVisibility)
    }

  return (
    <div className='signup'>
        <Link to='/'><img src={logo} alt="" id='logo'/></Link>
        <div className="container">
            <img src={deco} alt="" id='one'/>
            <img src={deco} alt="" id='two'/>
        </div>

        <form action="">
                <h1>Create an account</h1>

                <div className="socials">
                    <button type='button'>
                        <img src={google} alt="" />
                        Google
                    </button>
                    <button type='button'>
                        <img src={facebook} alt="" />
                        Facebook
                    </button>
                </div>

                <span>OR</span>

                <label htmlFor="">
                    <input type="email" name="email" id="email" placeholder='Your Email' value={formstate.email} onChange={handleInputChange}/>
                    <i class='fa-solid fa-envelope fa-2x'></i>
                </label>

                <label htmlFor="">
                    <input type={toggleVisibility ? 'text' : 'password'} name="password" id="password" placeholder='Your password' value={formstate.password} onChange={handleInputChange}/>
                    <i class='fa-solid fa-lock fa-2x'></i>
                    <button type='button' onClick={handleClick}>
                        <i class={`fa-solid fa-${ toggleVisibility ? 'eye' : 'eye-slash'}`}></i>
                    </button>
                </label>

                <input type="submit" value="SignUp"  id='submit'/>

                <p>Already Have an account? <Link to='/login' id='link'>Sign In</Link></p>
            </form>

        <img src={signup} alt="" id='bg'/>

    </div>
  )
}

export default SignUp