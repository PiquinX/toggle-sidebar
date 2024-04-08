import { useState, useEffect } from 'react'

const useResponsive = (screenWidth: number = 1024): { isBigScreen: boolean } => {
  const [isBigScreen, setIsBigScreen] = useState(
    () => window.innerWidth > screenWidth
  )

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
