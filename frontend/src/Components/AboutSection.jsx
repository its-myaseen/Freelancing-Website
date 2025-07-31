import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from '../assets/AboutImage.png';

const AboutSection = () => {
    const scrollerRef = useRef();
    const scrollerTrack = useRef();
    const imageRef = useRef();
    useGSAP(() => {
        gsap.to(scrollerTrack.current, {
            xPercent: -50,
            repeat: -1,
            duration: 20,
            ease: "none",
        });

        gsap.fromTo(imageRef.current,
            { y: 500},
            { y: 0, duration: 1, ease: "expoScale(0.5,7,none)",
                scrollTrigger:{
                    trigger: imageRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                }
             }
        );
    });

    return (
        <div className='relative w-full b min-h-[50vh] sm:h-screen bg-gradient-to-b from-transparent to-[#0f1929] sm:to-100% overflow-hidden pt-5'>
            {/* Scrolling Text - Preserving your exact layout */}
            <div
                ref={scrollerRef}
                className="w-full py-5 absolute overflow-hidden whitespace-nowrap top-[25%]"
            >
                <div ref={scrollerTrack} className="inline-block whitespace-nowrap">
                    <span className="text-white text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-normal px-4" style={{fontFamily: '"Zen Dots", sans-serif'}}>
                        Your Brand Deserves More Than Just Code.&nbsp;
                    </span>
                    <span className="text-white text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-normal px-4" style={{fontFamily: '"Zen Dots", sans-serif'}}>
                        Your Brand Deserves More Than Just Code.&nbsp;
                    </span>
                </div>
            </div>

            {/* Image - Preserving your exact layout */}
            <img 
            ref={imageRef}
                src={Image} 
                alt='About Section' 
                className='absolute bottom-0 left-0 w-full h-80 sm:h-auto object-cover'
            />
            
            {/* Gradient overlay - Preserving your exact layout */}
            <div className='absolute bottom-0 left-0 z-90 h-30 w-full bg-gradient-to-b from-transparent to-[#0a0a0a]'></div>
        </div>
    )
}

export default AboutSection;