import { useState } from 'react'
import './App.css'
import NavBar from './Layout/Nav/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import LogIn from './Auth/LogIn'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth/login" element={<LogIn/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
