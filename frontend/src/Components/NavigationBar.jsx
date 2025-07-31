import React, { useContext, useEffect, useState } from 'react'
import TextMark from '../assets/TextMark White.png'
import { Link, useLocation } from 'react-router-dom'
import { SiteDataContext } from '../Contexts/SiteContext';

const NavigationBar = () => {

    const location = useLocation()
    useEffect(() => {
        console.log(location.pathname)
    }, [location])

    const [isOpen, setIsOpen] = useState(false)


    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className='block fixed'></div>
            <div className='flex fixed top-0 left-0 justify-between items-center px-5 md:px-10 w-full h-15 sm:h-20 z-100 backdrop-blur-md'>
                <img src={TextMark} alt='Logo of Website' className='block relative h-22 lg:h-27' />
                
                <div className='hidden sm:flex justify-between relative box-border px-2 py-2 rounded-4xl border bg-[#0d0d0d] border-[#1d1d1d]'>


                    {
                        location.pathname == '/' ? <Link to='/'> <button className='cursor-hover text-[#131313] lg:text-sm px-3 lg:px-6 text-[12px] rounded-3xl py-[5px] lg:py-[10px] font-light bg-[#b5d3f5] hover:scale-90 duration-500 cursor-none' style={{ fontFamily: `"Goldman", sans-serif` }}>HOME</button></Link> : <Link to='/'> <button className='block cursor-hover relative text-white px-3 lg:px-6 lg:text-sm text-[12px] overflow-hidden rounded-3xl py-[5px] lg:py-[10px] font-light bg-transparent cursor-none hover:scale-90 duration-500 group' style={{ fontFamily: `"Goldman", sans-serif` }}><div className='block absolute h-0 w-0 top-1/2 left-1/2 rounded-full -translate-1/2 group-hover:bg-[#141414] group-hover:h-full group-hover:w-full group-hover:rounded-none duration-500 z-0 '></div> <p className='z-10 relative'>Home</p></button> </Link>
                    }

                    {
                        location.pathname.startsWith('/about') ? <Link to='/about'> <button className='cursor-hover text-[#131313] lg:text-sm px-3 lg:px-6 text-[12px] rounded-3xl py-[5px] lg:py-[10px] font-light bg-[#b5d3f5] hover:scale-90 duration-500 cursor-none' style={{ fontFamily: `"Goldman", sans-serif` }}>ABOUT</button></Link> : <Link to='/about'> <button className='block cursor-hover relative text-white px-3 lg:px-6 lg:text-sm text-[12px] overflow-hidden rounded-3xl py-[5px] lg:py-[10px] font-light bg-transparent cursor-none hover:scale-90 duration-500 group' style={{ fontFamily: `"Goldman", sans-serif` }}><div className='block absolute h-0 w-0 top-1/2 left-1/2 rounded-full -translate-1/2 group-hover:bg-[#141414] group-hover:h-full group-hover:w-full group-hover:rounded-none duration-500 z-0 '></div> <p className='z-10 relative'>About</p></button> </Link>
                    }
                    {
                        location.pathname.startsWith('/service') ? <Link to='/services'> <button className='cursor-hover text-[#131313] lg:text-sm px-3 lg:px-6 text-[12px] rounded-3xl py-[5px] lg:py-[10px] font-light bg-[#b5d3f5] hover:scale-90 duration-500 cursor-none' style={{ fontFamily: `"Goldman", sans-serif` }}>SERVICES</button></Link> : <Link to='/services'> <button className='block cursor-hover relative text-white px-3 lg:px-6 lg:text-sm text-[12px] overflow-hidden rounded-3xl py-[5px] lg:py-[10px] font-light bg-transparent cursor-none hover:scale-90 duration-500 group' style={{ fontFamily: `"Goldman", sans-serif` }}><div className='block absolute h-0 w-0 top-1/2 left-1/2 rounded-full -translate-1/2 group-hover:bg-[#141414] group-hover:h-full group-hover:w-full group-hover:rounded-none duration-500 z-0 '></div> <p className='z-10 relative'>Services</p></button> </Link>
                    }
                    {
                        location.pathname.startsWith('/project') ? <Link to='/projects'> <button className='cursor-hover text-[#131313] lg:text-sm px-3 lg:px-6 text-[12px] rounded-3xl py-[5px] lg:py-[10px] font-light bg-[#b5d3f5] hover:scale-90 duration-500 cursor-none' style={{ fontFamily: `"Goldman", sans-serif` }}>PROJECTS</button></Link> : <Link to='/projects'> <button className='block cursor-hover relative text-white px-3 lg:px-6 lg:text-sm text-[12px] overflow-hidden rounded-3xl py-[5px] lg:py-[10px] font-light bg-transparent cursor-none hover:scale-90 duration-500 group' style={{ fontFamily: `"Goldman", sans-serif` }}><div className='block absolute h-0 w-0 top-1/2 left-1/2 rounded-full -translate-1/2 group-hover:bg-[#141414] group-hover:h-full group-hover:w-full group-hover:rounded-none duration-500 z-0 '></div> <p className='z-10 relative'>Projects</p></button> </Link>
                    }
                    {
                        location.pathname.startsWith('/blog') ? <Link to='/blogs'> <button className='cursor-hover text-[#131313] lg:text-sm px-3 lg:px-6 text-[12px] rounded-3xl py-[5px] lg:py-[10px] font-light bg-[#b5d3f5] hover:scale-90 duration-500 cursor-none' style={{ fontFamily: `"Goldman", sans-serif` }}>BLOGS</button></Link> : <Link to='/blogs'> <button className='block cursor-hover relative text-white px-3 lg:px-6 lg:text-sm text-[12px] overflow-hidden rounded-3xl py-[5px] lg:py-[10px] font-light bg-transparent cursor-none hover:scale-90 duration-500 group' style={{ fontFamily: `"Goldman", sans-serif` }}><div className='block absolute h-0 w-0 top-1/2 left-1/2 rounded-full -translate-1/2 group-hover:bg-[#141414] group-hover:h-full group-hover:w-full group-hover:rounded-none duration-500 z-0 '></div> <p className='z-10 relative'>Blogs</p></button> </Link>
                    }
                    {
                        location.pathname.startsWith('/contact') ? <Link to='/contact'> <button className='cursor-hover text-[#131313] lg:text-sm px-3 lg:px-6 text-[12px] rounded-3xl py-[5px] lg:py-[10px] font-light bg-[#b5d3f5] hover:scale-90 duration-500 cursor-none' style={{ fontFamily: `"Goldman", sans-serif` }}>CONTACT</button></Link> : <Link to='/contact'> <button className='block cursor-hover relative text-white px-3 lg:px-6 lg:text-sm text-[12px] overflow-hidden rounded-3xl py-[5px] lg:py-[10px] font-light bg-transparent cursor-none hover:scale-90 duration-500 group' style={{ fontFamily: `"Goldman", sans-serif` }}><div className='block absolute h-0 w-0 top-1/2 left-1/2 rounded-full -translate-1/2 group-hover:bg-[#141414] group-hover:h-full group-hover:w-full group-hover:rounded-none duration-500 z-0 '></div> <p className='z-10 relative'>Contact</p></button> </Link>
                    }
                </div>

                <a href='https://calendly.com/yaseendevelopments/introductory-meeting' target='_blank' className=' hidden lg:block relative cursor-hover px-6 py-[11px] rounded-3xl text-[15px] text-white bg-[#0F1929] duration-300 cursor-none hover:bg-[#161b22] hover:scale-95' style={{ fontFamily: `"Goldman", sans-serif` }}>GET STARTED</a>
                {
                    width<=640? <i onClick={() => { setIsOpen(true) }} className="ri-menu-line flex justify-center items-center bg-[#1d1d1d] hover:bg-white/60 active:bg-[#242424] hover:text-black duration-300 cursor-hover text-white/80 h-9 w-9 rounded-xl"></i> : null
                }
            </div>

            <div className={`block fixed h-screen w-screen bg-black/80 z-101 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>


            <div className='block fixed top-0 right-0 h-screen w-80 bg-[#141414] py-5 z-102 duration-300' style={{
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)'
            }}>
                <div className='flex relative w-full justify-end px-5'>
                    <i onClick={() => { setIsOpen(false) }} className="ri-close-fill flex justify-center items-center bg-[#1d1d1d] hover:bg-white/60 active:bg-[#242424] hover:text-black duration-300 cursor-hover text-white/80 h-9 w-9 rounded-xl"></i>
                </div>

                <div className='flex flex-col w-full box-border mt-10 gap-1'>
                    <Link to='/' onClick={()=>{setIsOpen(false)}} className={`flex px-5 justify-start items-center relative h-12 w-full bg-${location.pathname == '/' ? `[#181818]` : `[#141414]`  } hover:bg-[#181818] duration-300 cursor-hover border-b border-white/5`}>
                        <h1 className={`block relative text-md text-white/80`}>Home</h1>
                    </Link>

                    <Link to='/about' onClick={()=>{setIsOpen(false)}} className={`flex px-5 justify-start items-center relative h-12 w-full  bg-${location.pathname.startsWith('/about') ? `[#181818]` : `[#141414]`  } hover:bg-[#181818] duration-300 cursor-hover border-b border-white/5`}>
                        <h1 className={`block relative text-md text-white/80`}>About</h1>
                    </Link>

                    <Link to='/services' onClick={()=>{setIsOpen(false)}} className={`flex px-5 justify-start items-center relative h-12 w-full bg-${location.pathname.startsWith('/services') ? `[#181818]` : `[#141414]`  } hover:bg-[#181818] duration-300 cursor-hover border-b border-white/5`}>
                        <h1 className={`block relative text-md text-white/80`}>Services</h1>
                    </Link>

                    <Link to='/projects' onClick={()=>{setIsOpen(false)}} className={`flex px-5 justify-start items-center relative h-12 w-full bg-${location.pathname.startsWith('/projects') ? `[#181818]` : `[#141414]`  } hover:bg-[#181818] duration-300 cursor-hover border-b border-white/5`}>
                        <h1 className={`block relative text-md text-white/80`}>Projects</h1>
                    </Link>

                    <Link to='/blogs' onClick={()=>{setIsOpen(false)}} className={`flex px-5 justify-start items-center relative h-12 w-full bg-${location.pathname.startsWith('/blogs') ? `[#181818]` : `[#141414]`  } hover:bg-[#181818] duration-300 cursor-hover border-b border-white/5`}>
                        <h1 className={`block relative text-md text-white/80`}>Blogs</h1>
                    </Link>

                    <Link to='/contact' onClick={()=>{setIsOpen(false)}} className={`flex px-5 justify-start items-center relative h-12 w-full bg-${location.pathname.startsWith('/contact') ? `[#181818]` : `[#141414]`  } hover:bg-[#181818] duration-300 cursor-hover border-b border-white/5`}>
                        <h1 className={`block relative text-md text-white/80`}>Contact</h1>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavigationBar
