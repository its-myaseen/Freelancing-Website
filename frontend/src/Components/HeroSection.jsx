import React, { useRef } from 'react';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
const HeroSection = () => {

  const container = useRef()
  useGSAP(()=>{
    gsap.fromTo(container.current, {
      yPercent: 50,
      opacity: '0%'
    }, {
      yPercent: 0,
      opacity: '100%',
      duration: 1.5,
      ease: `expoScale(0.5,7,none)`,
      

    })
  })
  return (
    <div className='relative h-[70vh] sm:h-[70vh] bg-transparent text-white sm:mt-[10vh] px-4 sm:px-8 md:px-15 flex flex-col justify-center sm:justify-end items-center'>
      <div ref={container} className='relative w-full max-w-4xl mx-auto text-center top-[10%] sm:top-0'>
        <h1 
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-4 md:mb-6' 
          style={{fontFamily: '"Zen Dots", sans-serif'}}
        >
          Build What <span className='text-[#b5d3f5]'>Matters</span> <br className='hidden sm:block'/> 
          Scale Without Limits
        </h1>
        
        <p 
          style={{fontFamily: '"Poppins", sans-serif'}} 
          className='text-sm sm:text-base md:text-lg mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] text-gray-300 mb-6 md:mb-8'
        >
          When technology aligns with vision, growth becomes inevitable — that's where focused development makes all the difference.
        </p>
        
        <a href='https://calendly.com/yaseendevelopments/introductory-meeting' target='_blank' 
          style={{fontFamily: '"Anta", sans-serif'}} 
          className='inline-flex items-center justify-center mx-auto px-6 sm:px-8 py-3 h-12 sm:h-13 text-sm sm:text-base bg-[#0f1929] rounded-3xl cursor-none cursor-hover group hover:scale-95 transition-all duration-300'
        >
          <span>SCHEDULE A CALL</span>
          <i className="ri-arrow-right-up-line ml-2 text-xl group-hover:rotate-45 group-hover:text-[#b5d3f5] transition-transform duration-300"></i>
        </a>
      </div>
    </div>
  )
}

export default HeroSection;