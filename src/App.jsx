import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './pages/AboutPage.jsx';
import Contact from './pages/contact.jsx';
const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} /> */}
      <Route path="/" element={<About />} />
      <Route path="/Contact" element={<Contact/>} />

    </Routes>
  )
}

export default App