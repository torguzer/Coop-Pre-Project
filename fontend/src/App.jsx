import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './component/Home'
import ShoppingPage from './component/Content/ShoppingPage'
import Cart from './component/Cart/Cart'
import ProductCreate from './component/ProductCreate/ProductCreate'

import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shoppingPage' element={<ShoppingPage />} />
        <Route path='/productCreate' element={<ProductCreate />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
