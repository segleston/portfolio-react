import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './components/Navbar'
import { Contact, Home, ProjectGallery } from './components/Pages';
import './App.css'


function App() {
  return (
    <Router basename={'./portfolio-react'}>
      <MyNav />
      <Routes>
        <Route path='/portfolio' element={<ProjectGallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
