import React, { useState, useEffect, useRef } from 'react'
import image from '../assets/tem1.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Snaps = ({ ind, snap }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const setRef = useRef();
    const img1Ref = useRef();
    const img2Ref = useRef();

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    const isDesktop = screenWidth > 768;
    const isEven = ind % 2 === 0;

    const [img1, setImg1] = useState(isDesktop ? isEven : true);
    const [img2, setImg2] = useState(isDesktop ? !isEven : true);

    const handleMouseEnter = (id) => {
        if (!isDesktop) return;

        if (id === 1) {
            setImg1(true);
            setImg2(false);
        } else if (id === 2) {
            setImg1(false);
            setImg2(true);
        }
    };

    useGSAP(() => {
        // Initial animation for container
        gsap.fromTo(setRef.current,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: setRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Staggered animation for images
        gsap.fromTo(
            [img1Ref.current, img2Ref.current],
            {
                y:100,
                opacity: 0
            },
            {
                y:0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: setRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <div 
            ref={setRef} 
            className={`flex ${isDesktop ? 'flex-row' : 'flex-col'} justify-between items-center gap-5 mt-5 rounded-4xl overflow-hidden`}
        >
            <img
                ref={img1Ref}
                src={snap.imageAlpha}
                onMouseEnter={() => handleMouseEnter(1)}
                alt="Snap 1"
                className={`h-120 duration-700 ${
                    isDesktop 
                        ? (img1 ? 'w-[65%] grayscale-0' : 'w-[35%] grayscale') 
                        : 'w-full grayscale-0'
                } object-center object-cover rounded-4xl`}
            />
            <img
                ref={img2Ref}
                src={snap.imageBravo}
                onMouseEnter={() => handleMouseEnter(2)}
                alt="Snap 2"
                className={`h-120 duration-700 ${
                    isDesktop 
                        ? (img2 ? 'w-[65%] grayscale-0' 
                            : 'w-[35%] grayscale') 
                        : 'w-full grayscale-0'
                } object-center object-cover rounded-4xl`}
            />
        </div>
    );
};

export default Snaps;