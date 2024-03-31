import SideBar from './components/SideBar'
import barsIcon from './assets/menu-bars-svgrepo-com.svg'
import SideBarContainer from './components/SideBarContainer'
import CloseButton from './components/CloseButton'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import useResponsive from './hooks/useResponsive'

function Root (): JSX.Element {
  const location = useLocation()
  const [counter, setCounter] = useState<number>(0)
  const { isBigScreen } = useResponsive(1024)

  return (
    <div className='flex gap-10 p-10'>
      {/* This dependency arrays allows you to add any dependency that when it changes the SideBar will be opened or closed. In this case I used location to close the SideBar each time the path changes. */}
      {
        !isBigScreen &&
        <SideBarContainer
          openDependency={[counter]}
          closeDependency={[location]}
        >
          {/* The button is the element that will be displayed in your app by default and the one that will open the SideBar. The rest are style only props */}
          <SideBar
            buttonClass='w-8 h-8'
            buttonContent={<img className='w-max h-max' src={barsIcon} />}
            navClass='bg-green-500 w-1/3'
            side='left'
          >
            {/* The CloseButton will close the SideBar. */}
            <CloseButton className='absolute text-4xl top-5 left-5'>
              x
            </CloseButton>
            <div className='flex flex-col gap-10 pt-60'>
              <Link to='/'>Home</Link>
              <Link to='/info'>Info</Link>
            </div>
          </SideBar>
        </SideBarContainer>
      }

      <div>{counter}</div>

      <div
        className='text-2xl'
        onClick={() => { setCounter(counter + 1) }}
      >
        +
      </div>
  </div>
  )
}

export default Root
