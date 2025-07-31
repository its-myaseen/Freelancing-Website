import React, { useRef, useState } from 'react'

const AboutPoints = (props) => {
    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { point, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        const newState = !state
        setState(newState)
        setAnswerH(`${answerElH + 20}px`)
        props.clickHandler(newState, point.id)
    }

    return (
        <div
            className={`mt-4 sm:mt-5 cursor-none cursor-hover w-full overflow-hidden bg-white/5 px-4 sm:px-5 pt-4 sm:pt-5 rounded-2xl sm:rounded-3xl group ${
                state ? '' : 'hover:bg-white/15'
            } duration-300`}
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-none pb-4 sm:pb-5 flex items-center justify-between text-base sm:text-lg text-gray-700 font-medium">
                <h1
                    className={`${
                        state ? `text-[#b5d3f5]` : `text-white`
                    } font-normal text-[15px] sm:text-[17px] pr-4 ${
                        state ? '' : 'group-hover:translate-x-5 sm:group-hover:translate-x-10'
                    } duration-300`}
                    style={{ fontFamily: `"Unbounded", sans-serif` }}
                >
                    {point.id}. {point.heading}
                </h1>
                {state ? (
                    <div className='flex-shrink-0 bg-[#0F1929] flex justify-center items-center h-7 w-7 sm:h-8 sm:w-8 rounded-lg'>
                        <i className="ri-arrow-up-s-line text-[#b5d3f5] text-[13px] sm:text-[15px]"></i>
                    </div>
                ) : (
                    <div className='flex-shrink-0 bg-[#0F1929] flex justify-center items-center h-7 w-7 sm:h-8 sm:w-8 rounded-lg'>
                        <i className="ri-arrow-down-s-line text-[#b5d3f5] text-[13px] sm:text-[15px]"></i>
                    </div>
                )}
            </h4>
            <div
                ref={answerElRef}
                className="duration-300"
                style={state ? { height: answerH } : { height: '0px' }}
            >
                <div className='flex w-full justify-end pb-4 sm:pb-5'>
                    <p className="text-gray-400 text-sm sm:text-base w-full sm:w-[90%]">
                        {point.content}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPoints