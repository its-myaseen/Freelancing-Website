import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Js from '/assets/Technologies/JavsScript.png';
import Python from '/assets/Technologies/Python.png';
import react from '/assets/Technologies/React.png';
import redux from '/assets/Technologies/Redux.png';
import node from '/assets/Technologies/Node.png';
import express from '/assets/Technologies/Express.png';
import mongo from '/assets/Technologies/Mongodb.png';
import docker from '/assets/Technologies/Docker.png';
import tailwind from '/assets/Technologies/Tailwind.png';
import openai from '/assets/Technologies/Openai.png';
import gemini from '/assets/Technologies/Gemini.png';
import numpy from '/assets/Technologies/Numpy.png';

const Technologies = () => {
  const scrollerRef = useRef();
  const scrollerTrack = useRef();
  const headerRef = useRef()


  useGSAP(() => {
    gsap.to(scrollerTrack.current, {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: 'linear',
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
    gsap.fromTo(scrollerRef.current, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "expoScale(0.5,7,none)",
      scrollTrigger: {
        trigger: scrollerRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })
    
  });

  return (
    <div className="block relative box-border px-5 md:px-15 pt-20 pb-20 w-full">
      <div ref={headerRef} className="flex flex-col justify-start items-center gap-5 box-border w-full">
        <h3
          className="block relative text-[12px] text-black bg-white font-bold px-4 py-1 rounded-3xl"
          style={{ fontFamily: `"Poppins", sans-serif` }}
        >
          SOME TECHNOLOGIES
        </h3>
        <h1
          className="block relative text-3xl sm:text-4xl md:text-5xl text-center font-normal text-white"
          style={{ fontFamily: `"Unbounded", sans-serif` }}
        >
          Behind the Build
        </h1>
      </div>

      <div ref={scrollerRef} className="block relative w-full h-28 rounded-[40px] border border-[#3a3a3a] mt-10 overflow-x-hidden">
        <div
          ref={scrollerTrack}
          className="flex h-full w-max flex-row items-center gap-5"
        >
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={Js} alt='Technology Logo' className='block relative h-[60%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={Python} alt='Technology Logo' className='block relative h-[100%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={node} alt='Technology Logo' className='block relative h-[100%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={express} alt='Technology Logo' className='block relative h-[100%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={mongo} alt='Technology Logo' className='block relative h-[100%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={react} alt='Technology Logo' className='block relative h-[60%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={redux} alt='Technology Logo' className='block relative h-[50%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={tailwind} alt='Technology Logo' className='block relative h-[130%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={docker} alt='Technology Logo' className='block relative h-[100%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={openai} alt='Technology Logo' className='block relative h-[55%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={gemini} alt='Technology Logo' className='block relative h-[80%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={numpy} alt='Technology Logo' className='block relative h-[80%]' />
          </div>












          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={Js} alt='Technology Logo' className='block relative h-[60%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={Python} alt='Technology Logo' className='block relative h-[100%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={node} alt='Technology Logo' className='block relative h-[100%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={express} alt='Technology Logo' className='block relative h-[100%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={mongo} alt='Technology Logo' className='block relative h-[100%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={react} alt='Technology Logo' className='block relative h-[60%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={redux} alt='Technology Logo' className='block relative h-[50%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={tailwind} alt='Technology Logo' className='block relative h-[130%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={docker} alt='Technology Logo' className='block relative h-[100%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={openai} alt='Technology Logo' className='block relative h-[55%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={gemini} alt='Technology Logo' className='block relative h-[80%]' />
          </div>
          <div className='flex justify-center items-center relative h-full w-50 rounded-[40px] bg-gray-400/8 overflow-hidden'>
            <img src={numpy} alt='Technology Logo' className='block relative h-[80%]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;