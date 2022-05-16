import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages'
import Login from '../pages/login'
import Register from '../pages/register'

export default function RouterLink() {
  return (
     <Router>
        <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/home" element={<Home/>}/>
      </Routes>
     </Router>
  )
}
