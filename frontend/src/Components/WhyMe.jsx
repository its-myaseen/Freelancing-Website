import React from 'react'

const WhyCard = ({ icon, title, description }) => (
    <div className='flex flex-col justify-center items-center relative box-border py-4 sm:py-5 min-h-50 w-full sm:w-[340px] md:w-105 backdrop-blur-md border-[1px] border-gray-800 rounded-xl sm:rounded-2xl px-6 sm:px-10 hover:-translate-y-2 duration-300'>
        <div className='flex justify-center items-center h-12 w-12 sm:h-15 sm:w-15 border rounded-xl sm:rounded-2xl bg-black/10 border-[#b5d3f5]'>
            <i className={`${icon} text-3xl sm:text-4xl text-[#b5d3f5]`}></i>
        </div>
        <h1 
            style={{ fontFamily: `"Anta", sans-serif` }} 
            className='block relative text-xl sm:text-2xl mt-4 sm:mt-6 text-center'
        >
            {title}
        </h1>
        <p 
            className='block relative text-center text-xs sm:text-sm mt-2 text-gray-500' 
            style={{ fontFamily: `"Poppins", sans-serif` }}
        >
            {description}
        </p>
    </div>
)

const WhyMe = () => {
    const cards = [
        {
            icon: "ri-rocket-line",
            title: "Proven Track Record",
            description: "I have built a reputation as a trusted and reliable partner in achieving business success."
        },
        {
            icon: "ri-presentation-line",
            title: "Tailored Solutions",
            description: "I offer personalized solutions tailored to your specific goals, audience, and industry."
        },
        {
            icon: "ri-p2p-line",
            title: "Client-Centric Focus",
            description: "Your success is our priority. We prioritize understanding your business goals."
        },
        {
            icon: "ri-wechat-line",
            title: "Transparent Communication",
            description: "I believe in open and honest communication every step of the way."
        },
        {
            icon: "ri-hand-heart-line",
            title: "Dedicated Support",
            description: "Your success is my priority, and i am here to support you every step of the way."
        },
        {
            icon: "ri-sparkling-2-line",
            title: "Expertise Across Industries",
            description: "Me and my team has extensive experience working across various industries."
        }
    ]

    return (
        <div className='block relative pb-15 sm:pb-25 w-full box-border overflow-hidden'>
            <div className='flex flex-col justify-start items-center gap-4 sm:gap-5 box-border w-full pt-20 sm:pt-40'>
                <h3 
                    className='block relative text-[10px] sm:text-[12px] text-black bg-white font-bold px-4 py-1 rounded-3xl' 
                    style={{ fontFamily: `"Poppins", sans-serif` }}
                >
                    WHY ME
                </h3>
                <h1 
                    className='block relative text-3xl sm:text-5xl font-normal w-[90%] sm:w-[60%] md:w-[40%] mx-auto -top-2 text-white text-center px-4' 
                    style={{ fontFamily: `"Unbounded", sans-serif` }}
                >
                    Why I am Your Best Choice
                </h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-20 px-4 sm:px-0'>
                {cards.map((card, index) => (
                    <WhyCard 
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default WhyMe