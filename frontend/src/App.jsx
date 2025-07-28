import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticleView from './pages/ArticleView';
import Navbar from './components/Navbar';
import UploadNews from './pages/UploadNews';
import About from './pages/About';
import Contact from './pages/Contact';

import {useRef, useLayoutEffect, useState } from 'react';

function App() {

  return (
    <Router>
      <div className = "app-navbar">
        <Navbar />
      </div>
      <div className = "app-content" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<ArticleView />} />
            {/** Protected by Navbar logic */}
            <Route path="/upload" element={<UploadNews/>} /> 
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
