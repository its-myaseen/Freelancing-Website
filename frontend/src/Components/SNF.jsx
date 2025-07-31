import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const SNF = () => {
    const SNFHeader = useRef()
    const Navigate = useNavigate()
    useGSAP(() => {
        gsap.fromTo(SNFHeader.current, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expoScale(0.5,7,none)"
        })
    })
    return (
        <div ref={SNFHeader} className='block relative box-border w-full bg-transparent overflow-hidden mt-[20%] sm:mt-[15%] px-5 sm:10'>
            <h1
                className='block relative text-5xl mx-auto w-[300px] sm:w-full sm:text-6xl md:text-7xl py-2 mt-25 sm:mt-20 md:mt-0 font-normal text-center text-[#b5d3f5]'
                style={{ fontFamily: `"Unbounded", sans-serif` }}
            >
                Invalid Route
            </h1>
            <p style={{ fontFamily: 'Poppins' }} className='block relative sm:mx-auto w-full sm:w-[80%] md:w-[60%] text-sm sm:text-md md:text:lg text-center text-white/70 mt-2'>Error 404: Oops! The page you’re looking for doesn’t exist.
                It might have been moved, deleted, or the URL might be incorrect.
                But don’t worry — you can always go back to the homepage or explore other sections of the site.
            </p>

            <button
                onClick={() => Navigate('/')}
                style={{ fontFamily: '"Anta", sans-serif' }}
                className='flex items-center justify-center mx-auto mt-10 cursor-hover px-6 sm:px-8 py-3 h-12 sm:h-13 text-sm sm:text-base bg-[#0f1929] rounded-3xl cursor-none group hover:scale-95 transition-all duration-300'
            >
                <span className='text-white/90'>GO BACK TO HOME</span>
                <i className="ri-arrow-right-up-line ml-2 text-xl text-white/90 group-hover:rotate-45 group-hover:text-[#b5d3f5] transition-transform duration-300"></i>
            </button>

        </div>
    )
}

export default SNF