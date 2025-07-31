import React, {createContext, useState} from 'react'

export const SiteDataContext = createContext()

const SiteContext = ({children}) => {
    
  const [data, setData] = useState('Sameer')

  const [Cursoropacity, setCursorOpacity] = useState(1)
  const [HoverSize, setHoverSize] = useState('30px')
  const [hoverBg, setHoverBg] = useState('white/0')
   
  const hoverCursor = () => {
    setHoverSize('50px')
    setHoverBg('white/10')
  }
  const resetCursor = () => {
    setHoverSize('30px')
     setHoverBg('white/0')
  }

  const hideCursor = () => {
    setCursorOpacity(0)
  }

  const showCursor = () => {
    setCursorOpacity(1)
  }

    const features = {
        data,
        setData,
        Cursoropacity,
        HoverSize,
        hoverBg,
        hoverCursor,
        resetCursor,
        hideCursor,
        showCursor
    }
     
  
  return (
      <SiteDataContext.Provider value={features} >
        {children}
      </SiteDataContext.Provider>
  )
}

export default SiteContext
