import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './components/Navbar';
import MyFooter from './components/Footer'
import { Contact, Custom404, Home, ProjectGallery, ProjectDetails } from './components/Pages';
import './App.css'

function App() {

  return (
    <Router >
      <MyNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='portfolio' element={<ProjectGallery />} />
        <Route path='contact' element={<Contact />} />
        <Route path='404' element={<Custom404 />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <MyFooter />
    </Router>
  )
}

export default App
