import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'  
import About from './components/About.jsx'
import Ordres from './components/Ordres.jsx'
import { CakeProvider } from './context/cakeContext.jsx'
import Protectedroute from './components/Protectedroute.jsx'

function App() {
  

  return (
    <CakeProvider>
      <Router>
      <div className='w-full min-h-screen  bg-[linear-gradient(to_left,#fdd5ff,#fff5ff,#ffffff)]'>
        <Header />
          <Routes>
              <Route  path='/' element={<Home />} />
              <Route  path='/Home' element={<Home />} />
              <Route  path='/About' element={<About />} />
              {/* <Route  path='/contact' element={Contact} /> */}
              <Route  path='/Orders' element={<Protectedroute>
                            <Ordres />
                        </Protectedroute>} />
              <Route  path='/Register' element={<Register />} />
              <Route  path='/Login' element={<Login />} />
          </Routes>
        <Footer />
      </div>
      </Router>
    </CakeProvider>
  )
}

export default App
