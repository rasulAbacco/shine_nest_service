import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} /> */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App