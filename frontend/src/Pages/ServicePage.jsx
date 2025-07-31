import React, { useContext, useEffect, useRef, useState } from 'react'
import PagesHeader from '../Components/PagesHeader'
import image from '../assets/Blog Images/Blog2.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ServicePoints from '../Components/ServicePoints'
import FormattedText from '../Components/FormattedText'
import MyProcess from '../Components/MyProcess'
import PAFLA from '../assets/Certificates/PAFLA.jpg'
import FAQs from '../Components/FAQs'
import Footer from '../Components/Footer'
import { ServicesDataContext } from '../Contexts/ServicesContext'
import { useParams } from 'react-router-dom'
import SNF from '../Components/SNF'

const ServicePage = () => {
  const headerRef = useRef()
  const thumbnailRef = useRef()
  const whyMeRef = useRef()
  const whatIDoRef = useRef()
  const whatIDoTextRef = useRef()
  const CertificateHeadingRef1 = useRef()
  const CertificateHeadingRef2 = useRef()
  const PAFLARef = useRef()
  const GrowstepRef = useRef()
  const HeroRef = useRef()


  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useGSAP(() => {
    // Animation for header
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

    // Animation for thumbnail
    gsap.fromTo(thumbnailRef.current, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "expoScale(0.5,7,none)",
      scrollTrigger: {
        trigger: thumbnailRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })

    // Animation for why me section
    gsap.fromTo(whyMeRef.current, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "expoScale(0.5,7,none)",
      scrollTrigger: {
        trigger: whyMeRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })

    // Animation for what I do section
    gsap.fromTo(whatIDoRef.current, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "expoScale(0.5,7,none)",
      scrollTrigger: {
        trigger: whatIDoRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })

    // Animation for what I do text
    gsap.fromTo(whatIDoTextRef.current, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "expoScale(0.5,7,none)",
      scrollTrigger: {
        trigger: whatIDoTextRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })

    // Animation for certificate headings and images
    const certificateElements = [
      CertificateHeadingRef1,
      CertificateHeadingRef2,
      PAFLARef,
      GrowstepRef
    ]

    certificateElements.forEach(ref => {
      gsap.fromTo(ref.current, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "expoScale(0.5,7,none)",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      })
    })


  })

  const [data, setData] = useState({
    icon: ``,
    id: '',
    thumbnail: "",
    serviceName: "",
    serviceTitle: "",
    aboutService: "",
    whyNeeded: ``,
    servicePoints: [],
    serviceInfo: "",
    serviceDescription: "",
  })
  const [notFound, setNotFound] = useState(false)

  const { getService } = useContext(ServicesDataContext)
  const { id } = useParams()

  useEffect(() => {
    const object = getService(id)
    if (object === "Not Found!") {
      setNotFound(true)
    } else {
      setNotFound(false)
      setData(object)
    }
  }, [getService, id])

  if (notFound) {
    return <SNF />
  }

  return (
    <div className='block relative box-border min-h-screen w-screen overflow-hidden text-white px-5 sm:px-6 lg:px-10'>
      {/* Page Header */}
      <div ref={HeroRef} className='block relative w-full box-border '>
        <PagesHeader Heading={data.serviceTitle} />
        <div ref={headerRef} className='block w-full box-border'>
          <p className='block mt-3 relative text-center text-xs sm:text-sm text-white/80 w-full xs:w-3/4 sm:w-1/2 left-1/2 -translate-x-1/2'>
            {data.aboutService}
          </p>
          <button
            style={{ fontFamily: `"Anta", sans-serif` }}
            className='flex relative items-center left-1/2 -translate-x-1/2 justify-between mt-4 sm:mt-5 px-4 xs:px-5 sm:px-8 h-10 sm:h-12 w-36 xs:w-40 sm:w-50 text-white bg-[#0f1929] rounded-3xl cursor-none cursor-hover group hover:w-40 xs:hover:w-45 sm:hover:w-55 hover:scale-95 duration-500'
          >
            <p className='text-xs sm:text-sm whitespace-nowrap'>GET STARTED</p>
            <i className="ri-arrow-right-up-line font-extralight text-lg xs:text-xl sm:text-2xl group-hover:rotate-[49deg] group-hover:text-[#b5d3f5] duration-400"></i>
          </button>
        </div>
      </div>

      {/* Thumbnail */}
      <div ref={thumbnailRef} className="block relative w-[95%] mx-auto h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden mt-20 sm:mt-35 rounded-2xl sm:rounded-4xl">
        <img
          src={data.thumbnail}
          alt="Banner"
          className="relative block w-full h-full object-cover object-center"
        />
      </div>

      {/* Why You Need This Service */}
      <div ref={whyMeRef} className='block w-full box-border'>
        <div className='flex flex-col xs:flex-row justify-start items-start xs:items-center gap-2 xs:gap-4 sm:gap-8 box-border w-full mt-20 sm:mt-30'>
          <h3
            className='block relative text-[8px] xs:text-[10px] sm:text-[12px] text-black bg-white font-bold px-4 py-1 rounded-3xl'
            style={{ fontFamily: `"Poppins", sans-serif` }}
          >
            BENIFITS
          </h3>
          <h1
            className='block relative text-xl xs:text-2xl sm:text-4xl font-normal text-white w-full sm:w-[90%]'
            style={{ fontFamily: `"Unbounded", sans-serif` }}
          >
            Why you Need this Service
          </h1>
        </div>
        <p
          className="block text-lg xs:text-xl md:text-3xl mt-6 xs:mt-8 sm:mt-10 text-white/40 tracking-tight"
          style={{ fontFamily: 'Poppins' }}
        >
          {data.whyNeeded}
        </p>
      </div>

      {/* Services Points */}
      <ServicePoints points={data.servicePoints} />

      {/* About Service */}
      <>
        <div ref={whatIDoRef} className='block relative w-full box-border'>
          <div className="flex flex-col justify-start items-center gap-3 xs:gap-4 sm:gap-5 box-border w-full">
            <h3
              className="block relative text-[10px] xs:text-[11px] sm:text-[12px] text-black bg-white font-bold px-4 py-1 rounded-3xl"
              style={{ fontFamily: `"Poppins", sans-serif` }}
            >
              SERVICE DETAILS
            </h3>
            <h1
              className="block relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-center font-normal text-white"
              style={{ fontFamily: `"Unbounded", sans-serif` }}
            >
              What I Do?
            </h1>
          </div>
          {data.serviceInfo}
        </div>
        <div
          ref={whatIDoTextRef}
          className='block relative text-xs xs:text-sm sm:text-base md:text-lg mt-8 xs:mt-10 sm:mt-14 md:mt-16 lg:mt-20 w-[95%] xs:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] mx-auto text-gray-300 tracking-tight pb-8 xs:pb-10 sm:pb-14 md:pb-20 lg:pb-30'
          style={{ fontFamily: 'Poppins' }}
        >
          <FormattedText text={data.serviceDescription} />
        </div>
      </>

      {/* PAFLA Membership Certificate */}
      <>
        <div ref={CertificateHeadingRef1} className="flex flex-col justify-start items-center gap-3 xs:gap-4 sm:gap-5 box-border w-full">
          <h3
            className="block relative text-[10px] xs:text-[11px] sm:text-[12px] text-black bg-white font-bold px-4 py-1 rounded-3xl"
            style={{ fontFamily: `"Poppins", sans-serif` }}
          >
            CERTIFICATE
          </h3>
          <h1
            className="block relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-center font-normal text-white"
            style={{ fontFamily: `"Unbounded", sans-serif` }}
          >
            VERIFIED MEMBER OF PAFLA
          </h1>
        </div>
        <img
          ref={PAFLARef}
          src={PAFLA}
          alt="PAFLA Certificate"
          className='block relative w-[95%] xs:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-6 xs:mt-8 sm:mt-14 md:mt-16 lg:mt-20 rounded-xl sm:rounded-2xl shadow-lg mb-20'
        />
      </>

      {/* Growstep Certificate
      <>
        <div ref={CertificateHeadingRef2} className="flex flex-col justify-start items-center gap-3 xs:gap-4 sm:gap-5 box-border w-full mt-20 xs:mt-25 sm:mt-35">
          <h3
            className="block relative text-[10px] xs:text-[11px] sm:text-[12px] text-black bg-white font-bold px-4 py-1 rounded-3xl"
            style={{ fontFamily: `"Poppins", sans-serif` }}
          >
            CERTIFICATE
          </h3>
          <h1
            className="block relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-center font-normal text-white"
            style={{ fontFamily: `"Unbounded", sans-serif` }}
          >
            TRUSTED BY <br /> GROWSTEP TECHNOLOGIES
          </h1>
        </div>
        <img
          ref={GrowstepRef}
          src={PAFLA}
          alt="PAFLA Certificate"
          className='block relative mb-20 xs:mb-25 w-[95%] xs:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-6 xs:mt-8 sm:mt-14 md:mt-16 lg:mt-20 rounded-xl sm:rounded-2xl shadow-lg'
        />
      </> */}

      <FAQs />
      <Footer />
    </div>
  )
}

export default ServicePage