import { useState, useEffect } from 'react'

const useResponsive = (screenWidth: number): { isBigScreen: boolean } => {
  const [isBigScreen, setIsBigScreen] = useState(() => {
    return window.innerWidth > screenWidth
  })

  useEffect(() => {
    addEventListener('resize', handleResize)

    return () => {
      removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = (event: Event): void => {
    const target = event.target as Window

    setIsBigScreen(target.innerWidth > screenWidth)
  }

  return ({ isBigScreen })
}

export default useResponsive
