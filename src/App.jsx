import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './pages/AboutPage.jsx';

import Contact from './pages/Contact.jsx';

import HomePage from './pages/HomePage.jsx';
import ServicePage from './pages/ServicePage.jsx';
<<<<<<< HEAD
import SoftService from './pages/SoftService.jsx';
import PestControlServices from './pages/PestControlServices.jsx';
import Contract from './pages/ContractStaffingServices.jsx'
=======

>>>>>>> a62de27f1eb8acdd0503b4eba032965b03985d36

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} /> */}
<<<<<<< HEAD

      <Route path="/Contact" element={<Contact/>} />
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicePage />} />
    
      <Route path="/about" element={<About />} />
      <Route path="/sofrservices" element={<SoftService />} />
      <Route path="/pestcontrol" element={<PestControlServices />} />
      <Route path="/contract" element={<Contract />} />
=======
      
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<ServicePage />} />
      
>>>>>>> a62de27f1eb8acdd0503b4eba032965b03985d36

    </Routes>
  )
}

export default App
