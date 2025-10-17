import React, { useEffect, useRef, useState } from 'react';
import image from '/assets/HeaderBackground.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AboutPoints from '../Components/AboutPoints';
import Technologies from '../Components/Technologies';
import FAQs from '../Components/FAQs';
import Footer from '../Components/Footer';
import MyProcess from '../Components/MyProcess';
import MySnaps from '../Components/MySnaps';

const AboutMeSection = () => {
   const container = useRef();
   const scroller = useRef();
   const stick = useRef();
   const headerRef = useRef();
   const headingRef = useRef();
   const aboutMeHeaderRef = useRef();
   const aboutMeText = useRef();
 
   const [clickState, setClickState] = useState(true);
   const [clickVal, setClickVal] = useState();
   const [isScroll, setIsScroll] = useState(false);
   const [dDown1, setDDown1] = useState(false);
   const [dDown2, setDDown2] = useState(false);
   const [dDown3, setDDown3] = useState(false);
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
   
   const isDesktop = screenWidth > 768;
 
   useEffect(() => {
     const handleResize = () => setScreenWidth(window.innerWidth);
     window.addEventListener('resize', handleResize);
     
     return () => {
       window.removeEventListener('resize', handleResize);
       ScrollTrigger.getAll().forEach(st => st.kill());
     };
   }, []);
 
   const Points = [
     {
       id: '01',
       heading: 'About Me',
       content: `I'm Muhammad Yaseen, a professional MERN Stack Developer with a strong command of modern web technologies including MongoDB, Express.js, React.js, and Node.js. I specialize in building responsive, scalable, and high-performance web applications that help businesses establish and grow their digital presence.`,
     },
     {
       id: '02',
       heading: 'My Experience',
       content: `I worked as a MERN Stack Developer at Growstep Technologies, where I contributed to the development of full-stack web applications using MongoDB, Express.js, React.js, and Node.js.`,
     },
     {
       id: '03',
       heading: 'What Makes Me Unique',
       content: `What sets me apart as a MERN Stack Developer is my ability to blend technical precision with creative problem-solving. I don't just write code — I build digital solutions that are tailored to the unique goals of each client or business.`,
     },
   ];
 
   const clickHandler = (status, val) => {
     setClickVal(val.charAt(1));
     setClickState(status);
   };
 
   useEffect(() => {
     if (clickVal === '1') setDDown1(clickState);
     else if (clickVal === '2') setDDown2(clickState);
     else if (clickVal === '3') setDDown3(clickState);
   }, [clickVal, clickState]);
 
   // Modified useEffect for isScroll state with proper cleanup
   useEffect(() => {
     const anyDropdownOpen = dDown1 || dDown2 || dDown3;
     setIsScroll(anyDropdownOpen);
 
     // Kill ScrollTrigger when all dropdowns are closed
     if (!anyDropdownOpen) {
       const triggers = ScrollTrigger.getAll();
       triggers.forEach(trigger => {
         if (trigger.vars.trigger === container.current) {
           trigger.kill();
         }
       }
       
    );
       // Reset scroller position when all dropdowns are closed
       if (scroller.current) {
         gsap.set(scroller.current, { clearProps: "all" });
       }
     }
   }, [dDown1, dDown2, dDown3]);
 
   // Initial animations
   useGSAP(() => {
     gsap.fromTo([aboutMeHeaderRef.current, aboutMeText.current], {
       x: -100,
       opacity: 0
     }, {
       x: 0,
       opacity: 1,
       duration: 1,
       stagger: 0.2,
       scrollTrigger: {
         trigger: aboutMeHeaderRef.current,
         start: 'top 90%',
         toggleActions: 'play none none reverse'
       }
     });
   }, []); // Empty dependency array for one-time initialization
 

   // Scroll-dependent animation for points with pin feature and proper cleanup, section will be pinned until and unless right side of the section completely scrolled
//    useGSAP(() => {
//      let scrollTrigger;
     
//      if (isDesktop && isScroll) {
//        scrollTrigger = gsap.to(scroller.current, {
//          translateY: '-50%',
//          scrollTrigger: {
//            trigger: container.current,
//            scroller: 'body',
//            start: 'top 10%',
//            end: 'top -100%',
//            pin: true,
//            scrub: 1,
//          },
//        });
//      }
 
//      return () => {
//        if (scrollTrigger) {
//          scrollTrigger.scrollTrigger.kill();
//          gsap.set(scroller.current, { clearProps: "all" });
//        }
//      };
//    }, [isDesktop, isScroll]);


    return (
        <>
            <div ref={aboutMeHeaderRef} className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-8 box-border w-full mt-30 overflow-hidden">
                <h3
                    className="hidden sm:block relative text-[12px] text-black bg-white font-bold px-4 py-1 rounded-3xl"
                    style={{ fontFamily: `"Poppins", sans-serif` }}
                >
                    ABOUT ME
                </h3>
                <h1
                    className="block relative text-3xl md:text-4xl font-normal text-white"
                    style={{ fontFamily: `"Unbounded", sans-serif` }}
                >
                    What I am offering
                </h1>
            </div>

            <div
                ref={container}
                className="flex flex-col md:flex-row items-start relative box-border w-full mb-15"
            >
                <div className="block relative flex-1 pr-5" ref={stick}>
                    <p
                        ref={aboutMeText}
                        className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                        style={{ fontFamily: 'Poppins' }}
                    >
                        Hey there, I'm{' '}
                        <b className="font-normal text-[#b5d3f5]">Muhammad Yaseen!</b> I'm
                        not your typical developer - I'm a digital craftsman who{' '}
                        <b className="font-normal text-white">
                            transforms your web dreams into pixel-perfect reality
                        </b>{' '}
                        using the <b className="font-normal text-[#b5d3f5]">MERN stack!</b>{' '}
                        I don't just build websites - I craft experiences that make users
                        fall in love with your brand. From{' '}
                        <b className="font-normal text-white">buttery-smooth React interfaces</b>{' '}
                        to <b className="font-normal text-white">jaw-dropping animations</b>, I
                        deliver solutions that are both beautiful and blazingly fast. Ready
                        to make something awesome?
                    </p>
                </div>
                <div
                    className="block relative box-border mt-10 md:mt-0 md:pl-15 w-full md:w-[50%]"
                    ref={scroller}
                >
                    {Points.map((Point, ind) => (
                        <AboutPoints point={Point} key={ind} clickHandler={clickHandler} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default AboutMeSection
