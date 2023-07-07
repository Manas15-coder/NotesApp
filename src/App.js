import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Notes from './components/Notes'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/Notes" element={<Notes/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
