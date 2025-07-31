import React, { useRef } from 'react'
import ReviewCard from './ReviewCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const Reviews = () => {
    const scrollingContainer = useRef()
    const animationRef = useRef()
    const reviews = [
        {
            name: 'Sarah Malik',
            review: 'Working with Yaseen was a fantastic experience. He delivered our website ahead of schedule and it looks stunning! Truly professional and responsive throughout.'
        },
        {
            name: 'Ahmed Khan',
            review: "I'm really impressed by the quality of code and the smooth user experience. My eCommerce store runs fast and looks great on all devices. Highly recommended!"
        },
        {
            name: 'Fatima Noor',
            review: 'The custom dashboard Yaseen built for our team has saved us hours of work every week. Excellent understanding of requirements and clean execution.'
        },
        {
            name: 'Daniel Roberts',
            review: 'Yaseen turned our ideas into a fully functional progressive web app. Communication was on point, and the results exceeded expectations.'
        },
        {
            name: 'Muhammad Ali',
            review: 'He created a beautiful landing page for our startup. It’s modern, fast, and perfectly aligned with our brand. I’ll definitely work with him again.'
        },
        {
            name: 'Imran Qureshi',
            review: 'Yaseen integrated an AI chatbot on our site, which improved customer engagement drastically. He really knows his tech. 10/10 experience!'
        }
    ]

    useGSAP(() => {
        animationRef.current = gsap.to(scrollingContainer.current, {
            yPercent: -50,
            duration: 20,
            repeat: -1,
            ease: "none"
        })
    })

    const slowAnim = () => {
        animationRef.current?.timeScale(0.30)
    }

    const normalAnim = () => {
        animationRef.current?.timeScale(1)
    }

    return (
        <div className='block relative h-[100vh] w-full overflow-hidden'>
            <h1
                className='block absolute text-5xl sm:text-7xl md:text-9xl text-center top-0 left-1/2 -translate-x-1/2 text-white/15'
                style={{ fontFamily: `"Zen Dots", sans-serif` }}
            >
                TESTIMONIAL
            </h1>

            <div className='block absolute -top-25 left-1/2 -translate-x-1/2 h-35 w-[80%] sm:w-[60%] md:w-[45%] blur-2xl bg-[#0f1929]'></div>

            <div
                className='block relative h-full w-[90%] sm:w-[70%] md:w-[40%] mx-auto bg-transparent overflow-hidden'
                onMouseEnter={slowAnim}
                onMouseLeave={normalAnim}
            >
                <div
                    ref={scrollingContainer}
                    className='flex flex-col gap-4 sm:gap-5 justify-start overflow-y-visible min-h-full w-full box-border'
                >
                    {
                        reviews.map((review, index) => (
                            <ReviewCard key={index} name={review.name} review={review.review} />
                        ))

                    }
                    {
                        reviews.map((review, index) => (
                            <ReviewCard key={index} name={review.name} review={review.review} />
                        ))

                    }

                </div>
            </div>
            <div className='block absolute bottom-0 w-full h-20 sm:h-30 bg-gradient-to-b from-transparent to-[#0a0a0a]'></div>
        </div>
    )
}

export default Reviews