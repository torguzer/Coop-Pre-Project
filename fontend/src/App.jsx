import { useState } from 'react'

import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Content from './component/Content'

import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}

export default App
