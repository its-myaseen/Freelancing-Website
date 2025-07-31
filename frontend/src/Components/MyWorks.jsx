import React, { useContext, useEffect, useRef, useState } from 'react'
import ShowcaseCard from './ShowcaseCard'
import image from '../assets/TemporaryProject Image.png'
import { ProjectDataContext } from '../Contexts/ProjectContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useNavigate } from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger)

const MyWorks = () => {
    const { getProjects } = useContext(ProjectDataContext)
    const [data, setData] = useState([])
    

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const array = getProjects(4)
        setData(array)
    }, [getProjects])

    const headerRef = useRef()
    const works = useRef()
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
        });

        if (width > 640 && works.current) {
            gsap.fromTo(works.current,{
                marginTop: 100
            }, {
                marginTop: -420,
                scrollTrigger: {
                    trigger: works.current,
                    start: 'top 105%',
                    end: 'top -50%',
                    toggleActions: 'play none none reverse',
                    scrub: 1,
                    
                },
                onComplete: ()=>{
                    ScrollTrigger.refresh();
                },
                onRepeat:()=>{
                    ScrollTrigger.refresh();
                },
                onStart: ()=>{
                    ScrollTrigger.refresh();
                }
                    
            })
        }
    })

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/projects`)

    }
    return (
        <div className='block relative min-h-screen min-w-full box-border overflow-hidden bg-transparent pt-20 sm:pt-30 pb-15 sm:pb-25'>
            <div ref={headerRef} className='flex flex-col justify-start items-center gap-5 box-border w-full sm:mb-40'>
                <h3
                    className='block relative text-[10px] sm:text-[12px] text-black bg-white font-bold px-4 py-1 rounded-3xl'
                    style={{ fontFamily: `"Poppins", sans-serif` }}
                >
                    WORKS
                </h3>
                <h1
                    className='block relative text-3xl sm:text-5xl font-normal -top-2 text-white text-center px-4'
                    style={{ fontFamily: `"Unbounded", sans-serif` }}
                >
                    Showcase
                </h1>
            </div>

            <div ref={works} className='flex relative flex-wrap gap-5 box-border items-start w-full px-4 sm:px-15 mt-15 sm:mt-45'>
                {
                    data.map((data, ind) => {
                        return <ShowcaseCard image={image} data={data} index={ind} />
                    })
                }
            </div>

            <div className='flex justify-center w-full mt-5 relative'>
                <button
                    onClick={() => { handleClick() }}
                    style={{ fontFamily: `"Anta", sans-serif` }}
                    className='flex items-center justify-between mt-5 px-6 sm:px-8 h-10 sm:h-12 w-52 sm:w-62 text-white bg-[#0f1929] rounded-3xl cursor-none cursor-hover group hover:w-54 sm:hover:w-65 hover:scale-95 duration-500'
                >
                    <p className='text-xs sm:text-sm'>VIEW ALL PROJECTS</p>
                    <i className="ri-arrow-right-up-line font-extralight text-xl sm:text-2xl group-hover:rotate-[49deg] group-hover:text-[#b5d3f5] duration-400"></i>
                </button>
            </div>
        </div>
    )
}

export default MyWorks