import React from 'react'
import Text from '../../assets/BackgroundText.png'

const Background = () => {
    return (
        <div className="fixed top-0 left-0 bg-[#0a0a0a] h-screen w-screen overflow-hidden">
            {/* Masked image container */}
            <div
                className=" relative w-full h-[350px] overflow-hidden"
            >
                <img
                    src={Text}
                    alt="Text"
                    className="block h-300 md:h-200 object-cover"
                />
                <div className='block absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-[#0a0a0a58] to-[#0a0a0a]'></div>
                <div className='block absolute bottom-0 right-0 h-full w-[50%] bg-gradient-to-l from-[#0a0a0a] to-transparent'></div>
                <div className='block absolute bottom-0 left-0 h-full w-[50%] bg-gradient-to-r from-[#0a0a0a] to-transparent'></div>
            </div>
        </div>
    )
}

export default Background
