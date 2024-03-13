import { describe, test, expect, beforeEach } from 'vitest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import SideBarContainer from '../components/SideBarContainer'
import SideBar from '../components/SideBar'
import CloseButton from '../components/CloseButton'

describe('SideBar', () => {
  const openDependency = [1, 4, 5]
  const closeDependency = [1, 4, 5]
  beforeEach(() => {
    cleanup()

    render(
      <SideBarContainer
        openDependency={openDependency}
        closeDependency={closeDependency}
      >
          <SideBar
              buttonContent={'abrir'}
          >
              <CloseButton>
                  cerrar
              </CloseButton>
              <div>Side Bar</div>
          </SideBar>
      </SideBarContainer>
    )

    const openButton = screen.getByText('abrir')

    fireEvent.click(openButton)
  })

  test('should render the sideBar', () => {
    expect(screen.getByText('Side Bar')).toBeDefined()
  })

  test('should close the sideBar by clicking outside of it', async () => {
    const closeButton = screen.getByTestId('close-side-bar')

    fireEvent.click(closeButton)

    await new Promise(resolve => setTimeout(resolve, 400))

    expect(screen.queryByText('Side Bar')).toBeNull()
  })

  test('should close the sideBar by clicking the CloseButton', async () => {
    const closeButton = screen.getByRole('button', { name: 'cerrar' })

    fireEvent.click(closeButton)

    await new Promise(resolve => setTimeout(resolve, 400))

    expect(screen.queryByText('Side Bar')).toBeNull()
  })

  // test('should close the sideBar when dependency changes', async () => {
  //   closeDependency[0] = 3

  //   await new Promise(resolve => setTimeout(resolve, 400))

  //   expect(screen.queryByText('Side Bar')).toBeNull()
  // })
})
