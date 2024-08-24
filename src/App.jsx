import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Index'
import Favourite from './Pages/Favourite'
import Detail from './Pages/detail'
import Navbar from './Components/Navbar/Index'

function App() {
  

  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favourite" element={<Favourite/>}/>
          <Route path="/recipe-item/:id" element={<Detail/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
