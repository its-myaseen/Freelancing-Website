import React, { useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ServiceCard from './ServiceCard'
import { ServicesDataContext } from '../Contexts/ServicesContext';
import { useNavigate } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/all';

const ServicesSection = () => {
    useEffect(() => {
        ScrollTrigger.refresh();
    }, []);


    const [Services, setServices] = useState([
        {
            id: 1,
            icon: <></>,
            heading: "",
            aboutService: ""
        }
    ])


    const { getServices } = useContext(ServicesDataContext);

    const scrollerRef = useRef();
    const scrollerTrack = useRef();
    const headerRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
        const array = getServices(4);
        console.log('Returned from getService:', array);
        setServices(array);
    }, [getServices]);

    useGSAP(() => {
        gsap.to(scrollerTrack.current, {
            xPercent: -50,
            repeat: -1,
            duration: 20,
            ease: "linear",
        });
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
    });

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/services`)

    }
    return (
        <div className='block relative box-border w-full overflow-x-hidden pt-40 pb-30 px-5 md:px-10'>
            <div ref={headerRef} className='flex flex-col sm:flex-row justify-start items-start sm:items-center gap-8 box-border w-full'>
                <h3 className='hidden sm:block relative text-[12px] text-black bg-white font-bold px-4 py-1 rounded-3xl' style={{ fontFamily: `"Poppins", sans-serif` }}>SERVICES</h3>
                <h1 className='block relative text-4xl font-normal text-white ' style={{ fontFamily: `"Unbounded", sans-serif` }}>What i am offering</h1>
            </div>

            <div ref={buttonRef} className='flex justify-start sm:justify-end w-full'>
                <button onClick={() => { handleClick() }} style={{ fontFamily: `"Anta", sans-serif` }} className='flex items-center justify-between mt-5 px-5 sm:px-8 h-10 sm:h-12 w-45 sm:w-62 text-white bg-[#0f1929] rounded-3xl cursor-none cursor-hover group hover:w-65 hover:scale-95 duration-500'><p className=' text-[12px] sm:text-sm'>VIEW ALL SERVICES</p><i className="ri-arrow-right-up-line font-extralight text-lg sm:text-2xl group-hover:rotate-[49deg] group-hover:text-[#b5d3f5] duration-400"></i></button>
            </div>

            <div className='flex flex-wrap justify-center gap-5 mt-20'>
                {
                    Services.map((data, ind) => {
                        return <ServiceCard data={data} id={ind} />
                    })
                }
            </div>
        </div>
    )
}

export default ServicesSection
