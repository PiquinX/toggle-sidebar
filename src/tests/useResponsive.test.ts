import { describe, test, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import useResponsive from '../hooks/useResponsive'

describe('useResponsive', () => {
  test('should be true if its bigger than 1024', async () => {
    window.innerWidth = 1025

    const { result } = renderHook(() => useResponsive(1024))

    window.dispatchEvent(new Event('resize'))

    expect(result.current.isBigScreen).toBeTruthy()
  })

  test('should be false if its less than 1024', async () => {
    window.innerWidth = 1023

    const { result } = renderHook(() => useResponsive(1024))

    window.dispatchEvent(new Event('resize'))

    expect(result.current.isBigScreen).toBeFalsy()
  })
})
