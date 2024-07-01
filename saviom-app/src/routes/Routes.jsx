import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactUs } from '../components/contactUs';
import { About } from '../components/about';

function BrowseRouter() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<ContactUs />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default BrowseRouter

