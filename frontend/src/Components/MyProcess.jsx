import React, { useRef } from 'react'
import { Timeline } from "../Components/Ui/timeline";
import img1 from '/assets/Requirement Gathering.png'
import img2 from '/assets/Planning.png'
import img3 from '/assets/development.png'
import img4 from '/assets/deployment and support.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const MyProcess = () => {
    const headerRef = useRef()
    useGSAP(()=>{
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
    })
    const data = [
        {
            title: "Requirement Gathering",
            content: (
                <div>
                    <p className="mb-8 text-sm font-normal text-neutral-800 md:text-[17px] dark:text-neutral-200">
                        The process starts with understanding your business needs, goals, and the specific functionality you require. This phase ensures a clear vision and sets the foundation for the entire project.
                    </p>

                    <img
                        src={img1}
                        alt="startup template"
                        className="h-50 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-74 lg:h-90"
                    />
                </div>
            ),
        },
        {
            title: " Planning & Architecture",
            content: (
                <div>
                    <p className="mb-8 text-sm font-normal text-neutral-800 md:text-[17px] dark:text-neutral-200">
                        Based on the requirements, I outline the system architecture, database structure, and tech stack. This ensures a scalable and efficient foundation before development begins.
                    </p>

                    <img
                        src={img2}
                        alt="startup template"
                        className="h-50 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-74 lg:h-90"
                    />
                </div>
            ),
        },
        {
            title: "Development & Implementation",
            content: (
                <div>
                    <p className="mb-4 text-sm font-normal text-neutral-800 md:text-[17px] dark:text-neutral-200">
                        This is where the core work happens — I write clean, efficient, and scalable code to build the application. All features and integrations are developed according to the plan, with regular progress updates.
                    </p>

                    <img
                        src={img3}
                        alt="startup template"
                        className="h-50 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-74 lg:h-90"
                    />
                </div>
            ),
        },
        {
            title: " Testing, Deployment & Support",
            content: (
                <div>
                    <p className="mb-4 text-sm font-normal text-neutral-800 md:text-[17px] dark:text-neutral-200">
                        After development, the project is tested thoroughly to ensure functionality, speed, and reliability. Once approved, it's deployed live. Ongoing support is available to ensure everything runs smoothly post-launch.
                    </p>

                    <img
                        src={img4}
                        alt="startup template"
                        className="h-50 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-74 lg:h-90"
                    />
                </div>
            ),
        },
    ];

    return (
        <>
            <div className='mt-30 px-5 md:px-10'>
                <div ref={headerRef} className='flex  flex-col justify-start items-start gap-4 mb-15 box-border w-full'>
                    <h3 className='block relative text-[12px] text-black bg-white font-bold px-4 py-1 rounded-3xl' style={{ fontFamily: `"Poppins", sans-serif` }}>PROCESS</h3>
                    <h1 className='block relative text-3xl md:text-4xl font-semi-bold w-full md:w-[45%] text-white ' style={{ fontFamily: `"Unbounded", sans-serif` }}>Take a look at how I plan, build, and deliver seamless digital solutions</h1>
                </div>
            </div>



            <div className="relative max-w-6xl top-0 md:-top-20 overflow-clip pb-20">
                <Timeline data={data} />

            </div>

        </>
    )
}

export default MyProcess
