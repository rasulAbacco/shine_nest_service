import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './pages/AboutPage.jsx';
import Contact from './pages/Contact.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicePage from './pages/ServicePage.jsx';
import TestimonialsSection from './pages/Testimonials.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";



const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>

        {/* <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} /> */}

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/terms-and-privacy" element={<PrivacyPolicy />} />

      </Routes>
    </>
  )
}

export default App