import React from 'react'
import image from '/assets/BlankDP.jpg'

const ReviewCard = ({name, review}) => {
    return (
        <div className='w-full box-border border border-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5'>
            <div className='flex justify-start text-[10px] sm:text-[12px] text-[#b5d3f5]'>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
            </div>

            <p className="block relative text-sm sm:text-md mt-6 sm:mt-10 text-gray-300">
                {review}
            </p>

            <div className='block h-[1px] w-full bg-white/10 mt-6 sm:mt-10'></div>
            
            <div className='flex justify-start items-center box-border w-full pt-4 sm:pt-5 gap-2 sm:gap-3'>
                <img 
                    src={image} 
                    alt="Avatar" 
                    className='block relative h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl'
                />
                <h1 className='block relative text-sm sm:text-md text-white font-normal'>
                    {name}
                </h1>
            </div>
        </div>
    )
}

export default ReviewCard