import React, { useRef } from 'react'
import image1 from '/assets/Canvas1.jpg'
import image2 from '/assets/Canvas3.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Stats = () => {
    const headerRef = useRef()
    const textRef = useRef()
    const row1 = useRef()
    const row2 = useRef()

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
        gsap.fromTo(textRef.current, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expoScale(0.5,7,none)",
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })
        gsap.fromTo(row1.current, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expoScale(0.5,7,none)",
            scrollTrigger: {
                trigger: row1.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })
                
        gsap.fromTo(row2.current, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expoScale(0.5,7,none)",
            scrollTrigger: {
                trigger: row2.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        })
    })
    return (
        <div className='block relative min-h-screen w-full overflow-hidden bg-transparent px-4 sm:px-10 pt-20 sm:pt-35'>
            {/* Header Section */}
            <div ref={headerRef} className='flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-8 box-border w-full'>
                <h3
                    className='block relative text-[10px] sm:text-[12px] text-black bg-white font-bold px-4 py-1 rounded-3xl'
                    style={{ fontFamily: `"Poppins", sans-serif` }}
                >
                    WHY ME
                </h3>
                <h1
                    className='block relative text-2xl sm:text-4xl font-normal text-white w-full sm:w-[30%]'
                    style={{ fontFamily: `"Unbounded", sans-serif` }}
                >
                    Your Trusted Growth Partner
                </h1>
            </div>

            {/* Description */}
            <div ref={textRef} className='flex flex-row justify-start sm:justify-end mt-5'>
                <p className='block relative text-base sm:text-lg mt-5 sm:mt-10 text-left w-full sm:w-135 text-gray-300/60'>
                    Backed by 100% positive client reviews and Growstep certification, we deliver results that matter. Our work boosts brand visibility by 80%+, helping your business grow with confidence.
                </p>
            </div>

            {/* First Stats Row */}
            <div ref={row1} className='flex flex-col sm:flex-row justify-between items-stretch gap-5 w-full h-auto sm:h-115 mt-10 sm:mt-25 bg-transparent'>
                {/* Left Stats Card */}
                <div className='block relative h-[400px] sm:h-115 w-full sm:w-[65%] rounded-2xl sm:rounded-4xl overflow-hidden'>
                    <img
                        src={image1}
                        alt="Background for User Interface"
                        className='block relative h-full w-full object-top object-cover'
                    />
                    <div className='block absolute -bottom-20 -left-20 h-100 w-80 bg-gradient-to-tr from-[#0f0f0f] from-55% to-transparent to-80% blur-2xl'></div>

                    <div className='block absolute box-border w-full bottom-0 left-0 px-4 sm:px-8 pb-5'>
                        <div className="block relative box-border w-full">
                            <h1
                                className="block relative text-6xl sm:text-8xl font-normal"
                                style={{ fontFamily: `"Unbounded", sans-serif` }}
                            >
                                100%
                            </h1>
                            <p className="block relative text-base sm:text-lg text-white">
                                Certified Expertise
                            </p>
                            <p className='block py-4 sm:py-5 pr-5 backdrop-blur-sm relative text-sm sm:text-md mt-3 text-gray-300 rounded-xl overflow-hidden'>
                                Backed by certification from Growstep Technologies & PAFLA — ensuring top-tier professional standards.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Stats Card */}
                <div className='relative h-[300px] sm:h-full w-full sm:flex-1 bg-white/10 rounded-2xl sm:rounded-4xl p-4 sm:p-5'>
                    <div className="block relative box-border w-full">
                        <h1
                            className="block relative text-6xl sm:text-8xl font-normal"
                            style={{ fontFamily: `"Unbounded", sans-serif` }}
                        >
                            98%
                        </h1>
                        <p className="block relative text-base sm:text-lg text-white">
                            Client Retention Rate
                        </p>
                    </div>

                    <p className='block absolute bottom-5 left-5 text-sm sm:text-md mt-3 text-gray-300 rounded-xl overflow-hidden pr-5'>
                        Clients don't just come — they stay. That's the result of consistent value and trust.
                    </p>
                </div>
            </div>

            {/* Second Stats Row */}
            <div ref={row2} className='flex flex-col-reverse sm:flex-row justify-between items-stretch gap-5 w-full h-auto sm:h-105 mt-5 bg-transparent'>
                {/* Left Stats Card */}
                <div className='relative h-[300px] sm:h-full w-full sm:flex-1 bg-[#0F1929]/70 rounded-2xl sm:rounded-4xl p-4 sm:p-5'>
                    <div className="block relative box-border w-full">
                        <h1
                            className="block relative text-6xl sm:text-8xl font-normal text-right"
                            style={{ fontFamily: `"Unbounded", sans-serif` }}
                        >
                            3x
                        </h1>
                        <p className="block relative text-base sm:text-lg text-[#b5d3f5] text-right">
                            Faster Project Delivery
                        </p>
                    </div>

                    <p className='block absolute bottom-5 left-5 text-sm sm:text-md mt-3 text-gray-300 rounded-xl overflow-hidden'>
                        Rapid development cycles without compromising on design, performance, or quality.
                    </p>
                </div>

                {/* Right Image */}
                <div className='block relative h-[400px] sm:h-105 w-full sm:w-[60%] rounded-2xl sm:rounded-4xl overflow-hidden'>
                    <img
                        src={image2}
                        alt="Background for User Interface"
                        className='block relative h-full w-full object-top object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default Stats