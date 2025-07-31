import { useRef } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavigationBar from './Components/NavigationBar'
import Background from './Components/Ui/Background'
import Footer from './Components/Footer'
import FAQs from './Components/FAQs'
import Services from './Pages/Services'
import Blogs from './Pages/Blogs'
import Projects from './Pages/Projects'
import BlogPage from './Pages/DetailedBlog'
import AnimatedCursor from './Components/Ui/AnimatedCursor'
import Cursor from './Components/Ui/Cursor'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ScrollToTop from './Components/ScrollToTop'
import ProjectPreview from './Pages/ProjectPreview'
import ServicePage from './Pages/ServicePage'
import PageNotFound from './Pages/PageNotFound'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (!gsap.plugins.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}


import { inject } from '@vercel/analytics';

inject();


function App() {
  const positionRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    positionRef.current = {
      x: e.clientX,
      y: e.clientY
    };
  };

  return (
    <div className='box-border' onMouseMove={handleMouseMove}>
      <BrowserRouter>
        <ScrollToTop />
        <Background />
        <NavigationBar />
        <AnimatedCursor />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog/:id' element={<BlogPage />} />
          <Route path='/project/:id' element={<ProjectPreview />} />
          <Route path='/service/:id' element={<ServicePage />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
