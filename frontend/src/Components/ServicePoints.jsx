import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ServicePoint from './ServicePoint'
gsap.registerPlugin(ScrollTrigger)

const ServicePoints = ({points}) => {
  const PageRef = useRef()
  
  useGSAP(()=>{
    gsap.fromTo(PageRef.current, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "expoScale(0.5,7,none)",
      scrollTrigger: {
        trigger: PageRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
  })

  return (
    <div ref={PageRef} className='block bg-transparent relative w-full overflow-hidden pb-20 sm:pb-35 md:pb-50'>
      <div className="flex flex-wrap gap-3 xs:gap-4 sm:gap-5 justify-center items-start mt-4 sm:mt-8 w-full mx-auto">
        {points.map((item, idx) => (
          <ServicePoint
            key={idx}
            idx={idx}
            point={item}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicePoints