import { useSideBar } from '../hooks/useSideBar'

interface Props {
  children: React.ReactNode
  navClass?: string
  buttonContent: string | JSX.Element
  buttonClass?: string
  side?: 'right' | 'left'
}

const SideBar: React.FC<Props> = ({
  children, navClass = 'bg-white min-w-[400px]', buttonContent, buttonClass, side = 'right'
}) => {
  // This customs hook allows us to make a side navBar but we must use the attribute data-side-bar.
  const { show, handleShow, sideBarData, disapear } = useSideBar()

  // To handle the show state on click.
  const handleClick = (): void => { handleShow() }

  const disappearAnimation = side === 'left' ? 'animate-navBar-disappear-left' : 'animate-navBar-disappear-right'

  const appearAnimation = side === 'left' ? 'animate-navBar-appear-left' : 'animate-navBar-appear-right'

  return (
    <>
      <button onClick={handleClick} className={`${buttonClass} z-50 cursor-pointer`}>
        {buttonContent}
      </button>
      {
        show &&
        <section
          className='flex justify-end top-0 bg-[#0005] right-0 fixed z-[500] backdrop-blur-sm h-full w-full'
        >
          <div
            data-side-bar={`${sideBarData}`}
            className='z-[1000] flex-grow'
            data-testid='close-side-bar'
          />

          <div
            className={`
              ${navClass} 
              ${disapear ? disappearAnimation : appearAnimation} 
              ${side === 'left' ? 'order-first' : ''}
              z-[500] flex flex-col h-full overflow-hidden`
            }
          >
            {children}
          </div>
        </section>
      }
    </>
  )
}

export default SideBar
