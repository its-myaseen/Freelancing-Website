import React, { useContext, useEffect, useRef, useState } from 'react'
import BlogCard from './BlogCard'
import { BlogDataContext } from '../Contexts/BlogContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useNavigate } from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger)

const FeatureBlogs = () => {

    const { getBlogs } = useContext(BlogDataContext)
    const [data, setData] = useState([])

    useEffect(() => {
        const array = getBlogs(3)
        setData(array)
    }, [getBlogs])

    const headerRef = useRef()
    const buttonRef = useRef()

    useGSAP(() => {
        gsap.fromTo(headerRef.current, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expoScale(0.5,7,none)",
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })
        gsap.fromTo(buttonRef.current, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expoScale(0.5,7,none)",
            scrollTrigger: {
                trigger: buttonRef.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })
    })

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/blogs`)
       
    }
    return (
        <div className='block relative min-h-screen w-full bg-transparent pb-10 sm:pb-20 px-4 sm:px-10 mt-20 sm:mt-35'>
            {/* Header Section */}
            <div ref={headerRef} className='flex flex-col justify-start items-start gap-3 sm:gap-4 box-border w-full'>
                <h3
                    className='block relative text-[10px] sm:text-[12px] text-black bg-white font-bold px-3 sm:px-4 py-1 rounded-3xl'
                    style={{ fontFamily: `"Poppins", sans-serif` }}
                >
                    BLOGS
                </h3>
                <h1
                    className='block relative text-2xl sm:text-4xl font-semi-bold w-full sm:w-[60%] md:w-[38%] text-white leading-tight'
                    style={{ fontFamily: `"Unbounded", sans-serif` }}
                >
                    Dive into my collection of engaging blog posts
                </h1>
            </div>

            {/* View All Button */}
            <div className='flex justify-end w-full'>
                <button
                onClick={()=>{handleClick()}}
                    ref={buttonRef}
                    style={{ fontFamily: `"Anta", sans-serif` }}
                    className='flex items-center justify-between mt-4 sm:mt-5 px-5 sm:px-8 h-10 sm:h-12 w-48 sm:w-62 text-white bg-[#0f1929] rounded-3xl cursor-none cursor-hover group hover:w-50 sm:hover:w-65 hover:scale-95 duration-500'
                >
                    <p className='text-xs sm:text-sm whitespace-nowrap'>VIEW ALL BLOGS</p>
                    <i className="ri-arrow-right-up-line font-extralight text-xl sm:text-2xl group-hover:rotate-[49deg] group-hover:text-[#b5d3f5] duration-400"></i>
                </button>
            </div>

            {/* Blog Cards Container */}
            <div className='flex flex-wrap justify-center sm:justify-start items-start gap-6 sm:gap-8 mt-10 sm:mt-15'>
                {
                    data.map((data, ind) => {
                        return <div className='w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]'>
                            <BlogCard data={data} ind={ind} key={ind} />
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default FeatureBlogs