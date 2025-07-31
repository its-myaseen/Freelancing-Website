import React, { useRef } from 'react';
import image from '../assets/LaptopImage.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);




const Qualities = () => {
  const headerRef = useRef();
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const featuresContainerRef = useRef();
  const featureRefs = useRef([]);

  useGSAP(() => {
    
    // Header animation
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
    });

    // Cards animation
    cardRefs.forEach((ref) => {
      gsap.fromTo(ref.current,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'top center',
            toggleActions: "play none none reverse",
            scrub: 1
          },
        });
    });

    // Features animation
    featureRefs.current.forEach((feature, index) => {
      gsap.fromTo(feature,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: featuresContainerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  });

  const cardData = [
    {
      icon: "ri-rocket-line",
      title: "Proven Track Record",
      description: "I have built a reputation as a trusted and reliable partner in achieving business success."
    },
    {
      icon: "ri-rocket-line",
      title: "Tailored Solutions",
      description: "I offer personalized solutions tailored to your specific goals, audience, and industry."
    },
    {
      icon: "ri-bubble-chart-line",
      title: "Client-Centric Focus",
      description: "Your success is our priority. We prioritize understanding your business goals."
    }
  ];

  const featuresData = [
    { text: "Continuous Innovation" },
    { text: "Dedicated Support" },
    { text: "Positive Client Experiences" },
    { text: "Commitment to Excellence" }
  ];

  const SvgIcon = () => (
    <svg
      className='fill-[#b5d3f5] h-5 w-5'
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 511.893 511.893"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <g>
            <path d="M458.599,261.333c32.107-47.253,41.707-94.293,21.44-129.387c-19.947-34.453-64.213-49.6-119.787-46.187 C335.079,32.853,297.959,0,255.932,0s-79.147,32.96-104.427,85.867c-0.747,0-1.6-0.213-2.347-0.213 c-56.64-3.093-98.347,13.44-117.333,46.187c-20.267,35.2-10.667,82.133,21.44,129.387 c-32.107,47.253-41.707,94.293-21.44,129.387c18.133,31.36,56.213,46.827,104.747,46.827c6.613,0,13.44-0.32,20.373-0.853 c24.96,46.72,59.84,75.307,99.093,75.307s74.133-28.587,99.093-75.307c6.933,0.533,13.76,0.853,20.267,0.853 c48.427,0,86.613-15.467,104.747-46.827C500.306,355.627,490.706,308.587,458.599,261.333z M461.586,142.613 c14.933,25.813,7.147,62.08-16.96,99.947c-16.427-20.053-34.773-38.293-54.827-54.613c-3.84-27.627-10.667-54.613-20.373-80.747 C412.839,105.813,446.972,117.333,461.586,142.613z M393.212,219.733c13.867,12.8,26.667,26.667,38.293,41.6 c-11.84,15.253-25.067,29.44-39.36,42.453c1.493-15.467,2.347-31.467,2.347-47.787 C394.599,243.733,394.172,231.573,393.212,219.733z M373.266,256c0,22.933-1.813,45.867-5.333,68.587 c-17.173,13.547-35.307,25.813-54.293,36.8c-18.56,10.667-37.867,20.053-57.707,28.053c-19.84-8-39.147-17.387-57.707-28.053 c-18.987-10.987-37.12-23.253-54.293-36.8c-6.507-41.387-7.04-83.52-1.707-125.12c17.707-14.08,36.373-26.773,56-38.187 c18.667-10.773,37.973-20.16,57.92-28.16c19.84,8,39.04,17.493,57.6,28.16c19.52,11.307,38.293,24.107,55.893,38.187 C372.092,218.24,373.266,237.12,373.266,256z" />
            <path d="M255.932,224c-23.573,0-42.667,19.093-42.667,42.667s19.093,42.667,42.667,42.667c23.573,0,42.667-19.093,42.667-42.667 S279.506,224,255.932,224z" />
          </g>
        </g>
      </g>
    </svg>
  );

  return (
    <div className='block relative min-h-screen w-full overflow-hidden pb-20'>
      <img src={image} alt="Laptop Background" className='block absolute top-0 left-0 w-full h-full' />
      <div className='block absolute h-full w-full bg-black/85 top-0 left-0'></div>

      <h1
        ref={headerRef}
        className='block relative mx-auto text-center w-[90%] sm:w-[60%] text-3xl sm:text-6xl mt-20 sm:mt-30'
        style={{ fontFamily: `"Goldman", sans-serif` }}
      >
        Trusted for Results Chosen for Value
      </h1>

      <div className='flex justify-center items-center gap-x-2 gap-y-5 flex-wrap mt-10 sm:mt-20 px-4 sm:px-0'>
        {cardData.map((card, index) => (
          <div
            key={card.title}
            ref={cardRefs[index]}
            className='flex flex-col justify-center items-center relative box-border py-5 min-h-50 w-[90%] sm:w-105 backdrop-blur-md border-[1px] border-gray-800 rounded-2xl px-6 sm:px-10'
          >
            <div className='flex justify-center items-center h-15 w-15 border rounded-2xl bg-black/10 border-[#b5d3f5]'>
              <i className={`${card.icon} text-4xl text-[#b5d3f5]`}></i>
            </div>
            <h1
              style={{ fontFamily: `"Anta", sans-serif` }}
              className='block relative text-xl sm:text-2xl mt-6'
            >
              {card.title}
            </h1>
            <p
              className='block relative text-center text-sm mt-2 text-gray-500'
              style={{ fontFamily: `"Poppins", sans-serif` }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <div
        ref={featuresContainerRef}
        className='flex justify-center items-center gap-3 mt-10 sm:mt-15 relative box-border flex-wrap px-4 sm:px-0'
      >
        {featuresData.map((feature, index) => (
          <div
            key={index}
            ref={el => featureRefs.current[index] = el}
            className='flex justify-center items-center gap-2 h-10 px-4 sm:px-6 bg-white/10 rounded-3xl text-white'
          >
            <SvgIcon />
            <p
              className='block relative text-xs sm:text-sm'
              style={{ fontFamily: `"Poppins", sans-serif` }}
            >
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualities;