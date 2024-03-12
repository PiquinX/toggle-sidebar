import { describe, test, expect, beforeEach } from 'vitest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import SideBarContainer from '../components/SideBarContainer'
import SideBar from '../components/SideBar'
import CloseButton from '../components/CloseButton'
import { Link, MemoryRouter } from 'react-router-dom'

describe('SideBar', () => {
  beforeEach(() => {
    cleanup()

    render(
      <MemoryRouter>
          <SideBarContainer>
              <SideBar
                  buttonContent={'abrir'}
              >
                  <CloseButton>
                      cerrar
                  </CloseButton>
                  <div>Side Bar</div>
                  <div className='flex flex-col gap-10 pt-60'>
                    <Link to='/'>Home</Link>
                    <Link to='/info'>Info</Link>
                  </div>
              </SideBar>
          </SideBarContainer>
      </MemoryRouter>
    )

    screen.getByText('abrir').click()
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

  test('should close the sideBar when path changes', async () => {
    const link = screen.getByText('Info')

    fireEvent.click(link)

    await new Promise(resolve => setTimeout(resolve, 400))

    expect(screen.queryByText('Side Bar')).toBeNull()
  })
})
