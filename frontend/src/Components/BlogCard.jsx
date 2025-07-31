import React, { useRef, useState } from 'react'
import image from '../assets/Blog1.png'
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const BlogCard = (props) => {
    const data = props.data
    const id = data.id
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        setPosition({
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top,
        });
    };

    const cursorRef = useRef()

    const showCursor = () => {
        gsap.fromTo(cursorRef.current, { opacity: 0, scale: '0' }, { opacity: 1, scale: '1' })
    }

    const hideCursor = () => {
        gsap.fromTo(cursorRef.current, { opacity: 1, scale: '1' }, { opacity: 0, scale: '0' })
    }


    const cardRef = useRef()

    useGSAP(()=>{
        gsap.fromTo(cardRef.current, {
            y: 150,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expoScale(0.5,7,none)",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })
    })
    return (
        <Link to={`/blog/${id}`}
        ref={cardRef}
            onMouseMove={(e) => { handleMouseMove(e) }} 
            onMouseEnter={() => { showCursor() }} 
            onMouseLeave={() => { hideCursor() }}
            className='block cursor-hide relative box-border w-[100%] sm:w-[320px] md:w-100 h-[300px] sm:h-100 rounded-xl sm:rounded-2xl bg-[#0f0f0f] overflow-hidden group hover:-translate-y-5 duration-1000 cursor-none'
        >
            <img 
                src={data.image} 
                alt="Blog Thumbnail" 
                className='block h-[85%] w-full object-cover object-top group-hover:grayscale-100 duration-1000' 
            />
            <div className='block w-full h-8 sm:h-10 bg-gradient-to-b from-transparent to-[#0f0f0f] absolute bottom-[15%] left-0'></div>

            <div className='block absolute w-full bottom-0 left-0 box-border px-2 pb-2'>
                <div className='flex justify-start items-center box-border gap-1 sm:gap-2 w-full mb-2'>
                    <div className='flex justify-center items-center gap-1 sm:gap-2 h-5 sm:h-6 px-2 sm:px-3 backdrop-blur-md border border-white/10 bg-[#85858583] rounded-3xl text-white'>
                        <i className="ri-calendar-todo-fill text-[10px] sm:text-[12px] text-[#b5d3f5]"></i>
                        <p 
                            className='block relative font-semibold uppercase text-[8px] sm:text-[9px] top-1/2 -translate-y-[70%]' 
                            style={{ fontFamily: `"Poppins", sans-serif` }}
                        >
                            {data.date}
                        </p>
                    </div>

                    <div className='flex justify-center items-center gap-1 sm:gap-2 h-5 sm:h-6 px-2 sm:px-3 backdrop-blur-md border border-white/10 bg-[#85858583] rounded-3xl text-white'>
                        <i className="ri-news-fill text-[10px] sm:text-[12px] text-[#b5d3f5]"></i>
                        <p 
                            className='block relative font-semibold uppercase text-[8px] sm:text-[9px] top-1/2 -translate-y-[70%]' 
                            style={{ fontFamily: `"Poppins", sans-serif` }}
                        >
                            Blog
                        </p>
                    </div>
                </div>

                <div className='block relative w-full rounded-md box-border px-2 py-2 bg-[#181818]'>
                    <h1 
                        className='block relative text-base sm:text-lg font-semi-bold w-full text-white' 
                        style={{ fontFamily: `"Unbounded", sans-serif` }}
                    >
                        {data.heading}
                    </h1>
                </div>
            </div>

            <div
                ref={cursorRef}
                style={{
                    top: position.y,
                    left: position.x,
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                }}
                className='flex absolute opacity-0 justify-center items-center h-16 sm:h-20 w-16 sm:w-20 rounded-full bg-[#0f1929]'
            >
                <h1 
                    className='text-center text-white font-semibold text-xs sm:text-sm' 
                    style={{ fontFamily: `"Unbounded", sans-serif` }}
                >
                    VIEW
                </h1>
            </div>
        </Link>
    )
}

export default BlogCard