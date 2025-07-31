import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ProjectCard = ({ image, data }) => {
    const cursorRef = useRef()
    const card = useRef()
    const containerRef = useRef()

    const handleMouseMove = (e) => {
        // Get the mouse position relative to the viewport
        const mouseX = e.clientX
        const mouseY = e.clientY

        // Get the container's position relative to the viewport
        const containerBounds = containerRef.current.getBoundingClientRect()
        const containerX = containerBounds.left
        const containerY = containerBounds.top

        // Calculate the cursor position relative to the container
        const cursorX = mouseX - containerX
        const cursorY = mouseY - containerY

        // Update cursor position with immediate effect
        gsap.set(cursorRef.current, {
            x: cursorX,
            y: cursorY,
        })

        // Add smooth follow animation
        gsap.to(cursorRef.current, {
            x: cursorX,
            y: cursorY,
            duration: 0.2,
            ease: "power2.out"
        })
    }

    const showCursor = () => {
        gsap.to(cursorRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
        })
    }

    const hideCursor = () => {
        gsap.to(cursorRef.current, {
            opacity: 0,
            scale: 0,
            duration: 0.2,
            ease: "power2.out"
        })
    }

    useGSAP(() => {
        gsap.fromTo(card.current, {
            xPercent: -100,
            opacity: 0
        }, {
            xPercent: 0,
            opacity: 1,
            duration: 1.5,
            ease: "expoScale(0.5,7,none)",
            scrollTrigger: {
                trigger: card.current,
                start: "top bottom",
                end: "bottom center",
                toggleActions: "play none none reverse"
            }
        })
    })

    return (
        <div ref={card}>
            <Link 
                ref={containerRef}
                to={`/project/${data.id}`}
                onMouseMove={handleMouseMove}
                onMouseEnter={showCursor}
                onMouseLeave={hideCursor}
                className='flex flex-col cursor-hide cursor-none lg:flex-row gap-3 sm:gap-5 justify-start items-start lg:items-center bg-transparent relative box-border group min-h-[400px] lg:h-100 w-full'
            >
                {/* Project Image */}
                <div className="flex relative h-[250px] sm:h-[300px] lg:h-full w-full lg:w-100 rounded-2xl sm:rounded-4xl overflow-hidden">
                    <img
                        src={data.image}
                        alt="Project Mockup"
                        className="block relative w-full h-full object-cover group-hover:scale-105 duration-500"
                    />
                    <div className="block absolute top-0 left-0 h-full w-full bg-black/20"></div>
                </div>

                {/* Project Details */}
                <div className="block relative flex-1 h-full bg-white/5 rounded-2xl sm:rounded-4xl px-4 sm:px-5 py-4 sm:py-5 border border-white/0 group-hover:border-white/30 duration-300">
                    <div className="flex flex-col justify-start items-start gap-3 sm:gap-5 box-border w-full">
                        <h3
                            className="block relative text-[10px] sm:text-[12px] text-gray-900 bg-white tracking-wide font-bold px-3 sm:px-4 py-1 rounded-3xl"
                            style={{ fontFamily: `"Poppins", sans-serif` }}
                        >
                            PROJECT
                        </h3>
                        <h1
                            className="block relative text-lg sm:text-xl font-normal -top-2 text-[#b5d3f5]"
                            style={{ fontFamily: `"Unbounded", sans-serif` }}
                        >
                            {data.heading}
                        </h1>
                    </div>
                    <p className="block relative text-sm sm:text-md text-gray-400 mt-2">
                        {data.header}
                    </p>
                </div>

                {/* View Cursor */}
                <div
                    ref={cursorRef}
                    style={{
                        position: 'absolute',
                        pointerEvents: 'none',
                        transform: 'translate(-50%, -50%)',
                        top: 0,
                        left: 0,
                        zIndex: 50,
                        willChange: 'transform'
                    }}
                    className='flex opacity-0 justify-center items-center h-16 sm:h-20 w-16 sm:w-20 rounded-full bg-[#0f1929]'
                >
                    <h1
                        className='text-center text-white font-semibold text-xs sm:text-sm'
                        style={{ fontFamily: `"Unbounded", sans-serif` }}
                    >
                        VIEW
                    </h1>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard