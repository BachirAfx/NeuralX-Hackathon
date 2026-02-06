import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import Background from './components/Background/Background.jsx' 
import Box from './components/Box/Box.jsx'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import TempAnalytics from './Pages/TempAnalytics.jsx'
import Home from './Pages/Home.jsx'
function App() {
  return (     
      <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<TempAnalytics />} />
        </Routes>
      </Router> 
  )
}

export default App




