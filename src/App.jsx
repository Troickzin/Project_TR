import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Auth from './Pages/Auth'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Auth' element={<Auth />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App