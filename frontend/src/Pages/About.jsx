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
import AboutMeSection from '../Components/AboutMeSection'

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const headerRef = useRef();
  const headingRef = useRef();

  // Initial animations
  useGSAP(() => {
    gsap.fromTo(headerRef.current, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 2
    });

    gsap.fromTo(headingRef.current, {
      y: 200,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1
    });

  
  }, []); // Empty dependency array for one-time initialization

 

  return (
    <div className="block relative box-border w-screen overflow-hidden px-5 sm:px-10 text-white">
      {/* Header Section */}
      <div ref={headerRef} className="block relative w-[95%] mx-auto h-120 overflow-hidden mt-35 rounded-4xl">
        <img
          src={image}
          alt="Banner"
          className="relative block h-full md:h-auto md:w-full object-cover top-0 md:-top-35"
        />
        <div className="block absolute w-full h-30 sm:h-90 -bottom-5 left-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className=" hidden sm:block absolute -left-40 -top-40 h-[80%] w-80 bg-black blur-[80px]"></div>
        <div className=" hidden sm:block absolute -right-40 -top-40 h-[80%] w-80 bg-black blur-[80px]"></div>
        <div className="block absolute bottom-5 left-0 w-full box-border">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-center mb-4 md:mb-6"
            style={{ fontFamily: `"Unbounded", sans-serif` }}
          >
            Meet Your Developer, <br className="hidden sm:block" />
            Muhammad <span className="text-[#b5d3f5]">Yaseen</span>
          </h1>
        </div>
      </div>

    

      


      

      {/* Other Components */}
      <AboutMeSection/>
      <Technologies />
      <MyProcess />
      <MySnaps />
      <FAQs />
      <Footer />
    </div>
  );
};

export default About;