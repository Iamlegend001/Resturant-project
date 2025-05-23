import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Home from '../pages/Home'
import Create from '../pages/Create'

const MainRoutes = () => {
  return <Routes>
    <Route path="/"  element={<Home/>} />
    <Route path="/recipes"  element={<Recipes/>} />
    <Route path="/create"  element={<Create/>} />
    <Route path="/about"  element={<About/>} />
  </Routes>
}

export default MainRoutes
