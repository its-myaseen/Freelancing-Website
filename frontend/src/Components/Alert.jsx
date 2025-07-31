import React, { useState, useEffect } from 'react'

const Alert = (props) => {
  const [color, setColor] = useState('gray')

  useEffect(() => {
    if (props.type === 'success') {
      setColor('green')
    } else if (props.type === 'error') {
      setColor('red')
    }
  }, [props.type])

  return (
    <div className='flex items-center fixed bottom-5 left-5 h-10 pl-4 pr-3 bg-gray-900 text-white rounded-lg overflow-hidden z-10'>
      <span className={`block absolute left-0 top-0 h-full w-1`} style={{ backgroundColor: color }}></span>
      <p className='text-white text-sm'>{props.message}</p>
      <i
        className="ri-close-fill text-white text-xl ml-5 hover:text-gray-300 active:text-gray-400 cursor-none cursor-hover"
        onClick={props.close}
      ></i>
    </div>
  )
}

export default Alert
