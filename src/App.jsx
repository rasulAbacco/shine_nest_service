import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './pages/AboutPage.jsx';
import ServicePage from './pages/ServicePage.jsx';
import Footer from './components/Footer.jsx';
const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} /> */}
      <Route path="/" element={<About />} />
       <Route path="/services" element={<ServicePage />} />
       <Route path="/footer" element={<Footer />} />
    </Routes>
  )
}

export default App