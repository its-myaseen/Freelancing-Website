import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceCard = (props) => {
    const data = props.data
    
    const cardRef = useRef()
    useGSAP(()=>{
        gsap.fromTo(cardRef.current, {
            y:100,
            opacity: 0
        },
    {
        y:0,
        opacity:1,
        duration: 0.5,
        ease: "expoScale(0.5,7,none)",
        scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    })
    })

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/service/${data.id}`)
       
    }

    return (
        <div onClick={()=>{handleClick()}} ref={cardRef} className="w-[100%] md:w-[49%] bg-[#0f1929] hover:bg-[#1f2b3d] hover:scale-95 duration-500 cursor-hover rounded-4xl shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
            <div className="text-[#b5d3f5] text-5xl mb-7">
                {data.icon}
            </div>
            <h1 className="font-normal text-2xl" style={{ fontFamily: `"Lexend", sans-serif` }}>{data.serviceName}</h1>
            <p className="text-sm text-zinc-500 leading-6">
                {data.aboutService}
            </p>

           <button className='block relative text-sm mt-20 cursor-none hover:scale-105 hover:text-[#b5d3f5] duration-300' style={{ fontFamily: `"Goldman", sans-serif` }}>LEARN MORE</button>
        </div>
    )
}

export default ServiceCard
