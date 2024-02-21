import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MyHeader from './components/Header';
import MyFooter from './components/Footer'
import { Contact, Custom404, Home, ProjectGallery, ProjectDetails, Resume } from './components/Pages';
import './App.css'

function App() {

  return (
    <Router >
      <MyHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='portfolio' element={<ProjectGallery />} />
        <Route path='contact' element={<Contact />} />
        <Route path='404' element={<Custom404 />} />
        {/* <Route path='resume' element={<Resume />} /> */}
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <MyFooter />
    </Router>
  )
}

export default App
