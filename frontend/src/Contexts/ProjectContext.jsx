import React, { createContext, useState } from 'react'
import DeepScan1 from '/assets/ProjectsScreenShot/AICodeReviewerLandingPage.png'
import DeepScan2 from '/assets/ProjectsScreenShot/AICodeReviewerPage2.png'
import DeepScan3 from '/assets/ProjectsScreenShot/AICodeReviewerPage3.png'


import Portfolio from '/assets/ProjectsScreenShot/Portfolio.png'
import Gojo from '/assets/ProjectsScreenShot/GojjoOnline.png'

import  Ridee1 from '/assets/ProjectsScreenShot/Ridee1.png'
import  Ridee2 from '/assets/ProjectsScreenShot/Ridee2.png'
import  Ridee3 from '/assets/ProjectsScreenShot/Ridee3.png'
import  Ridee4 from '/assets/ProjectsScreenShot/Ridee4.png'
import  Ridee5 from '/assets/ProjectsScreenShot/Ridee5.png'
import  Ridee6 from '/assets/ProjectsScreenShot/Ridee6.png'
import  Ridee7 from '/assets/ProjectsScreenShot/Ridee7.png'
import  Ridee8 from '/assets/ProjectsScreenShot/Ridee8.png'
import  Ridee9 from '/assets/ProjectsScreenShot/Ridee9.png'
import  Ridee10 from '/assets/ProjectsScreenShot/Ridee10.png'
import  Ridee11 from '/assets/ProjectsScreenShot/Ridee11.png'
import  Ridee12 from '/assets/ProjectsScreenShot/Ridee12.png'
import  Ridee13 from '/assets/ProjectsScreenShot/Ridee13.png'
import  Ridee14 from '/assets/ProjectsScreenShot/Ridee14.png'
import  Ridee15 from '/assets/ProjectsScreenShot/Ridee15.png'
import  Ridee16 from '/assets/ProjectsScreenShot/Ridee16.png'
import  Ridee17 from '/assets/ProjectsScreenShot/Ridee17.png'
import  Ridee18 from '/assets/ProjectsScreenShot/Ridee18.png'
import  Ridee19 from '/assets/ProjectsScreenShot/Ridee19.png'



import rideeThumbnail from '/assets/Project Thumbnail/5.png'
import portfolioThumbnail from '/assets/Project Thumbnail/3.png'
import codeReviewerThumbnail from '/assets/Project Thumbnail/2.png'
import gojoThumbnail from '/assets/Project Thumbnail/4.png'



import codeReviewerImage from '/assets/ProjectImages/2.png'
import portfolioImage from '/assets/ProjectImages/3.png'
import gojoImage from '/assets/ProjectImages/4.png'
import rideeImage from '/assets/ProjectImages/5.png'

export const ProjectDataContext = createContext()

const ProjectContext = ({ children }) => {

  const data = [
    {
        id: '37919393',
        thumbnail: codeReviewerThumbnail,
        image:codeReviewerImage,
        pageSS: [
          DeepScan1, DeepScan2, DeepScan3
        ],
        heading: 'Advance Artificial Intelligence Based Code Reviewer',
        header: 'The Advanced Artificial Intelligence Based Code Reviewer utilizes powerful APIs from Gemini and OpenAI to deliver intelligent, real-time code analysis. It supports multiple programming languages including JavaScript, Scratch, Python, C, C++, and more, making it a versatile tool for developers of all levels. The system detects bugs, enforces best practices, and suggests code optimizations with AI-driven precision. By integrating state-of-the-art language models, it enhances code quality, reduces manual review time, and streamlines the development workflow.',
        bio: 'Animated MERN stack portfolio with dark theme, smooth UI, and backend-integrated contact form.',
        link: '',
        isPWA: false
    },
    {
        id: '37913393',
        thumbnail: portfolioThumbnail,
        image: portfolioImage,
        pageSS: [
          Portfolio
        ],
        heading: 'Full-Stack Developer Portfolio – Modern, Animated, and Fully Custom-Built',
        header: 'I built a fully customized, animated developer portfolio using the MERN stack (MongoDB, Express.js, React.js, Node.js) to showcase my full-stack web development skills. Designed with a sleek dark theme and powered by Tailwind CSS, the site features smooth animations using GSAP and Framer Motion for a modern, immersive experience. It includes a responsive layout, dynamic contact form with backend integration, and a scalable structure ready for blog or content integration. This portfolio reflects my expertise in UI/UX, performance optimization, and component-based design.',
        bio: 'A fully customized, animated MERN stack portfolio with a dark theme, GSAP/Framer Motion animations, and backend-integrated contact form.',
        link: '',
        isPWA: false
    },
    {
        id: '989793292',
        thumbnail: gojoThumbnail,
        image: gojoImage,
        pageSS: [
          Gojo
        ],
        heading: 'MERN Stack E-Commerce Store for a Brand – Scalable, Fast & Fully Functional',
        header: 'I built a fully functional e-commerce store for a brand using the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to deliver seamless shopping experiences across devices. The store features a clean and modern UI with Tailwind CSS, integrated shopping cart, product management, secure checkout, and admin dashboard functionalities. With backend APIs for authentication, order processing, and product handling, it offers both scalability and performance. This project demonstrates my ability to develop real-world, production-ready full-stack applications for businesses.',
        bio: 'A scalable, full-stack e-commerce website built on the MERN stack with cart, checkout, admin panel, and responsive UI.',
        link: '',
        isPWA: false
    },
    {
        id: '77387482',
        thumbnail: rideeThumbnail,
        image:rideeImage,
        pageSS: [
          Ridee1, Ridee2, Ridee3, Ridee4, Ridee5, Ridee6, Ridee7, Ridee8, Ridee9, Ridee10, Ridee11, Ridee12, Ridee13, Ridee14, Ridee15, Ridee18, Ridee19
        ],
        heading: 'MERN-Based International Riding App – Real-Time PWA',
        bio: 'A real-time, MERN-based international riding PWA with Socket.io and Google Maps integration for live tracking and location services.',
        header: 'I built a Progressive Web App (PWA) riding platform using the MERN stack (MongoDB, Express.js, React.js, Node.js) designed for both local and international use. The app integrates real-time communication with Socket.io for live ride status and instant driver-passenger updates. It features Google Maps integration for accurate location tracking, route management, and ride requests. The UI is responsive, mobile-friendly, and optimized for cross-device access, ensuring a seamless experience anywhere in the world. This project reflects my ability to build scalable, real-time applications with advanced features.',
        link: '',
        isPWA: true
    }
  ]




  const getProject = (id)=>{
    const Project = data.find(b => b.id == id)
    return Project
  }

  const getProjects = (num)=>{
    const Projects = data.slice(0, num)
    return Projects
  }


  const features = {
    data,
    getProject,
    getProjects,
  }


  return (
    <ProjectDataContext.Provider value={features} >
      {children}
    </ProjectDataContext.Provider>
  )
}

export default ProjectContext
