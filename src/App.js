import React from 'react'
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Main from './components/Pages/Main'
import Navbar from './components/Navbar/Navbar'
 const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={ <Main /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App