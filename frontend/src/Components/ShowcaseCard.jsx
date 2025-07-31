import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const ShowcaseCard = ({ image, index, data }) => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const cursorRef = useRef(null)
  const cardRef = useRef(null)

  // Show & hide cursor animations using GSAP
  const showCursor = () => {
    if (!cursorRef.current) return
    gsap.to(cursorRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const hideCursor = () => {
    if (!cursorRef.current) return
    gsap.to(cursorRef.current, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
      ease: 'power2.in'
    })
  }

  // Update cursor position smoothly using gsap.to on every mouse move
  const handleMouseMove = (e) => {
    if (!cursorRef.current) return
    const bounds = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - bounds.left
    const y = e.clientY - bounds.top

    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.15,
      ease: 'power3.out'
    })
  }




  return (
    <Link
      to={`/project/${data.id}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={showCursor}
      onMouseLeave={hideCursor}
      ref={cardRef}
      className={`flex cursor-hide cursor-none flex-col group 
          overflow-visible justify-start items-center bg-transparent 
          relative box-border w-full xs:w-[85%] sm:w-[80%] md:w-[49%] 
          mx-auto transition-all duration-300 hover:transform hover:-translate-y-2
          ${index % 2 === 1 ? 'md:mt-20' : ''}`}
    >
      {/* Project Image Container */}
      <div className="block relative w-full rounded-xl xs:rounded-2xl sm:rounded-3xl md:rounded-4xl 
          overflow-hidden shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
        <img
          src={data.image}
          alt={data.heading}
          className="block relative w-full h-auto group-hover:scale-105 
              transition-transform duration-500 ease-out"
        />
        <div className="block absolute inset-0 bg-black/20 
            group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      {/* Project Info Card */}
      <div className="block relative w-full bg-white/5 
          rounded-xl xs:rounded-2xl sm:rounded-3xl md:rounded-4xl 
          mt-2 xs:mt-3 sm:mt-4 
          px-3 xs:px-4 sm:px-5 
          py-3 xs:py-4 sm:py-5 
          border border-white/0 group-hover:border-white/30 
          transition-all duration-300 backdrop-blur-sm">
        <div className="flex flex-col justify-start items-start 
            gap-2 xs:gap-3 sm:gap-4 md:gap-5 box-border w-full">
          {/* Project Tag */}
          <h3
            className="block relative text-[8px] xs:text-[10px] sm:text-[12px] 
                text-gray-900 bg-white tracking-wide font-bold 
                px-2 xs:px-3 sm:px-4 
                py-0.5 xs:py-1 
                rounded-2xl xs:rounded-3xl
                transform transition-transform duration-300 
                group-hover:scale-105"
            style={{ fontFamily: `"Poppins", sans-serif` }}
          >
            PROJECT
          </h3>

          {/* Project Title */}
          <h1
            className="block relative text-base xs:text-lg sm:text-xl 
                font-normal -top-1 xs:-top-2 
                text-[#b5d3f5] group-hover:text-white 
                transition-colors duration-300"
            style={{ fontFamily: `"Unbounded", sans-serif` }}
          >
            {data.heading}
          </h1>
        </div>

        {/* Project Description */}
        <p className="block relative 
            text-xs xs:text-sm sm:text-base 
            text-gray-400 group-hover:text-gray-300
            mt-2 leading-relaxed
            transition-colors duration-300">
          {data.bio}
        </p>
      </div>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
        }}
        className='flex justify-center items-center 
          h-12 xs:h-14 sm:h-16 md:h-20 
          w-12 xs:w-14 sm:w-16 md:w-20 
          rounded-full bg-[#0f1929] 
          shadow-lg opacity-0 scale-0'
      >
        <h1
          className='text-center text-white font-semibold 
              text-[10px] xs:text-xs sm:text-sm
              tracking-wider'
          style={{ fontFamily: `"Unbounded", sans-serif` }}
        >
          VIEW
        </h1>
      </div>
    </Link>
  )
}

export default ShowcaseCard
