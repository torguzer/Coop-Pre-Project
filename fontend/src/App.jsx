import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './component/Home'
import ShoppingPage from './component/Content/ShoppingPage'
import ProductCreate from './component/Content/ProductCreate'
import Product1Infor from './component/Content/Product1Infor'
import ProductApiTest from './component/Content/ProductApiTest'

import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shoppingPage' element={<ShoppingPage />} />
        <Route path='/productCreate' element={<ProductCreate />} />
        <Route path='/product1Infor' element={<Product1Infor />} />
        <Route path='/productApiTest' element={<ProductApiTest />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
