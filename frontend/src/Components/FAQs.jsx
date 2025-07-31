import React, { useRef } from 'react'
import FAQCard from './FAQCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const FAQs = () => {
    const faqsList = [
        {
            q: "Do you design custom websites or use templates?",
            a: "I design fully custom websites and landing pages tailored to your brand and business goals — no pre-made templates."
        },
        {
            q: "Will my website be mobile and tablet responsive?",
            a: "Yes, I build all websites to be fully responsive across all devices — mobile, tablet, and desktop."
        },
        {
            q: "Can you help me set up my domain and hosting?",
            a: "Yes, I can guide you through or fully manage domain registration and hosting setup if needed.Yes, I can guide you through or fully manage domain registration and hosting setup if needed."
        },
        {
            q: "Is the website SEO-optimized?",
            a: "Definitely. I implement SEO best practices like clean code, meta tags, alt texts, fast load speed, and more."
        },
        {
            q: "Can I run Google Ads on the website you build?",
            a: "Yes! All websites are fully compatible with Google Ads, AdSense, and other ad platforms."
        },
        {
            q: "Do you offer content writing for landing pages?",
            a: "Yes, I can provide engaging and SEO-friendly content if you don't already have it ready."
        },
        {
            q: "Will I be able to update my website later?",
            a: "Yes. If needed, I can set it up so you can make updates yourself, or I can handle ongoing changes for you."
        },
        {
            q: "What makes your service different from others?",
            a: "I combine design, performance, SEO, and user experience into one package — plus 100% positive client reviews and Growstep certification back my work."
        }
    ]

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
        <div ref={PageRef} className='block relative min-h-screen w-full overflow-hidden bg-transparent pt-10 sm:pt-20 pb-10 sm:pb-20 px-4 sm:px-6 md:px-10'>
            <div className='flex flex-col justify-start items-center gap-3 sm:gap-5 box-border w-full'>
                <h3
                    className='block relative text-[10px] sm:text-[12px] text-black bg-white font-bold px-3 sm:px-4 py-1 rounded-3xl'
                    style={{ fontFamily: `"Poppins", sans-serif` }}
                >
                    FREQUENTLY ASKED QUESTIONS
                </h3>
                <h1
                    className='block relative text-2xl sm:text-4xl md:text-5xl font-normal -top-2 text-white text-center px-4'
                    style={{ fontFamily: `"Unbounded", sans-serif` }}
                >
                    Got Questions? <br /> I`ve Got Answers!
                </h1>
            </div>

            <div className="mt-8 sm:mt-14 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
                {faqsList.map((item, idx) => (
                    <FAQCard
                        key={idx}
                        idx={idx}
                        faqsList={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default FAQs