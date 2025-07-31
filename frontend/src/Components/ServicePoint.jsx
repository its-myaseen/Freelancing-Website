import React, { useRef, useState } from 'react'

const ServicePoint = (props) => {
  const answerElRef = useRef()
  const [state, setState] = useState(false)
  const [answerH, setAnswerH] = useState('0px')
  const { point, idx } = props

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight
    setState(!state)
    setAnswerH(`${answerElH + 20}px`)
  }

  return (
    <div
      className={` w-full md:w-[49%] cursor-none cursor-hover overflow-hidden 
        bg-white/5 px-3 xs:px-4 sm:px-5 pt-3 xs:pt-4 sm:pt-5 rounded-xl xs:rounded-2xl sm:rounded-3xl group 
        ${state ? '' : 'hover:bg-white/15'} duration-300`}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-none pb-3 xs:pb-4 sm:pb-5 flex items-center justify-between">
        <h1 
          className={`text-white font-normal text-[15px] xs:text-[15px] sm:text-[17px] pr-3 xs:pr-4 
            ${state ? '' : 'group-hover:translate-x-3 xs:group-hover:translate-x-5 sm:group-hover:translate-x-10'} 
            duration-300`} 
          style={{ fontFamily: `"Unbounded", sans-serif` }}
        >
          {point.q}
        </h1>
        <div className='flex-shrink-0 bg-[#0F1929] flex justify-center items-center h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 rounded-lg'>
          <i className={`ri-arrow-${state ? 'up' : 'down'}-s-line text-[#b5d3f5] text-[11px] xs:text-[13px] sm:text-[15px]`}></i>
        </div>
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: '0px' }}
      >
        <div className='flex w-full justify-end pb-3 xs:pb-4 sm:pb-5'>
          <p className="text-gray-400 text-sm sm:text-base w-full sm:w-[90%]">
            {point.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicePoint