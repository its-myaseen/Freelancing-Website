import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const PagesHeader = (props) => {
  const pageHeader = useRef()
  useGSAP(()=>{
    gsap.fromTo(pageHeader.current, {
      y:100,
      opacity: 0
    },{
      y:0,
      opacity:1,
      duration: 1,
      ease: "expoScale(0.5,7,none)"
    })
  })
  return (
    <div ref={pageHeader} className='block relative box-border w-full bg-transparent overflow-hidden mt-[20%] sm:mt-[15%]'>
      <h1 
        className='block relative text-3xl mx-auto w-[300px] sm:w-full sm:text-4xl md:text-5xl py-2 mt-25 sm:mt-20 md:mt-0 font-normal text-center text-white' 
        style={{ fontFamily: `"Unbounded", sans-serif` }}
      >
        {props.Heading}
      </h1>
    </div>
  )
}

export default PagesHeader