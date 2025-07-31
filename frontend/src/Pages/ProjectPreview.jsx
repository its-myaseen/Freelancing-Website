import React, { useContext, useEffect, useRef, useState } from 'react'
import image from '../assets/Blog1.png'
import FormattedText from '../Components/FormattedText'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer'

import image1 from '../assets/ProjectsScreenShot/AICodeReviewerLandingPage.png'
import image2 from '../assets/ProjectsScreenShot/AICodeReviewerPage2.png'
import { ProjectDataContext } from '../Contexts/ProjectContext'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const ProjectPreview = () => {

    const { getProject } = useContext(ProjectDataContext)

    const { id } = useParams()
    console.log(id)

    const [data, setData] = useState({
        id: '',
        thumbnail: '',
        pageSS: [],
        heading: '',
        header: '',
        link: ''
    })

    useEffect(() => {
        const object = getProject(id)
        setData(object)
        console.log(object)
    }, [getProject, id])



    const headerRef = useRef()
    const headingRef = useRef()
    const aboutBlogRef = useRef()
    useGSAP(() => {
        gsap.fromTo(headerRef.current, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1
        });

        gsap.fromTo(headingRef.current, {
            y: 200,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: headingRef.current,
                start: 'top bottom',
                toggleActions: 'play none none reverse'
            }
        });

        gsap.fromTo(aboutBlogRef.current, {
            y: 200,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: aboutBlogRef.current,
                start: 'top bottom',
                toggleActions: 'play none none reverse'
            }
        });
    })
    return (
        <div className='block relative box-border min-h-screen w-full overflow-x-hidden text-white px-4 sm:px-6 md:px-8 lg:px-10'>
            {/* Header of Blog */}
            <div ref={headerRef} className='block relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden mt-20 sm:mt-28 md:mt-32 lg:mt-40'>
                <img
                    src={data.thumbnail}
                    alt="Blog Thumbnail"
                    className="block h-full object-fill"
                />


                <div className='block absolute bottom-0 left-0 w-full h-40 sm:h-48 md:h-52 lg:h-60 bg-gradient-to-b from-transparent to-black'></div>

                <div className='flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 w-full box-border justify-center items-center'>
                    <div className='flex justify-center items-center box-border gap-2 w-full mb-2'>

                        <div className='flex justify-center items-center gap-1 sm:gap-2 h-5 sm:h-6 px-2 sm:px-3 border border-white/10 bg-white rounded-3xl text-white'>
                            <i className="ri-news-fill text-[10px] sm:text-[12px] text-black"></i>
                            <p className='block relative font-semibold uppercase text-[8px] sm:text-[9px] top-1/2 -translate-y-[70%] text-black' style={{ fontFamily: `"Poppins", sans-serif` }}>
                                PROJECT
                            </p>
                        </div>
                    </div>

                    <h1 className='block relative text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-3 sm:mt-4 md:mt-5 px-2 sm:px-4 md:px-6 lg:px-8' style={{ fontFamily: `"Unbounded", sans-serif` }}>
                        {data.heading}
                    </h1>
                </div>
            </div>

            <div ref={aboutBlogRef} className='flex justify-center items-center w-full box-border px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-14 md:py-16 lg:py-20 bg-white/10 rounded-2xl sm:rounded-3xl lg:rounded-4xl mt-5'>
                <h1 className='block relative text-lg sm:text-xl md:text-2xl w-full md:w-[80%] lg:w-[70%] text-center text-white font-light tracking-tight' style={{ fontFamily: 'Poppins' }}>
                    {data.header}
                </h1>
            </div>

            <div className='flex flex-col items-center gap-5 relative text-sm sm:text-[14px] md:text-[15px] mt-10 sm:mt-14 md:mt-16 lg:mt-20 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] mx-auto text-gray-300 tracking-tight pb-10 sm:pb-14 md:pb-20 lg:pb-30' style={{ fontFamily: 'Poppins' }}>
                {
                    data.pageSS.map((path, ind) => {
                        return <img src={path} key={ind} className={`block relative ${data.isPWA ? `w-full md:w-[70%] lg:w-[40%]` : `w-[false]`}`} />
                    })
                }
            </div>

            <Footer />

        </div>
    )
}

export default ProjectPreview
