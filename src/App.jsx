import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Landing from './Pages/Landing/Landing'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
