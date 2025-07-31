import React, { useRef } from 'react'
import Snaps from './Snaps'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import image1 from '../assets/Snaps/Image1.png'
import image2 from  '../assets/Snaps/Image2.png'
import image3 from '../assets/Snaps/Image3.png'
import image4 from '../assets/Snaps/Image 4.png'
import image5 from '../assets/Snaps/Image5.png'
import image6 from '../assets/Snaps/Image6.png' 

const MySnaps = () => {

    
    const snaps = [
        {
            id: 1,
            imageAlpha: image5,
            imageBravo: image3,
        },
        {
            id: 2,
            imageAlpha: image4,
            imageBravo: image6,
        },
        {
            id: 3,
            imageAlpha: image2,
            imageBravo: image1,
        },

    ]

    const header = useRef()
    const header2 = useRef()
    useGSAP(() => {
        gsap.fromTo(header.current, {
            x: -100,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: header.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        }),
            gsap.fromTo(header2.current, {
                x: 100,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: header2.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            })
    })
    return (
        <div className='block relative pb-15 sm:pb-25 w-full box-border overflow-hidden'>
            {/* Header Section */}
            <div ref={header} className='flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-8 box-border w-full'>
                <h3
                    className='block relative text-[10px] sm:text-[12px] text-black bg-white font-bold px-4 py-1 rounded-3xl'
                    style={{ fontFamily: `"Poppins", sans-serif` }}
                >
                    GALLERY
                </h3>
                <h1
                    className='block relative text-2xl sm:text-4xl font-normal text-white w-full sm:w-[30%]'
                    style={{ fontFamily: `"Unbounded", sans-serif` }}
                >
                    My Some Snaps
                </h1>
            </div>

            {/* Description */}
            <div ref={header2} className='flex flex-row justify-start sm:justify-end mt-5'>
                <p className='block relative text-base sm:text-lg mt-5 sm:mt-10 text-left w-full sm:w-135 text-gray-300/60'>
                    From creative grinds to candid moments, these snaps capture the journey, the hustle, and the little joys that make freelancing worthwhile.
                </p>
            </div>

            <div className='block relative w-full box-border mt-10'>
                {
                    snaps.map((snap)=>{
                        return <Snaps snap={snap} ind={snap.id} />
                    })
                }
            </div>
        </div>
    )
}

export default MySnaps
