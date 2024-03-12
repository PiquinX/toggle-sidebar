import { useSideBar } from '../hooks/useSideBar'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const CloseButton: React.FC<Props> = ({ children, ...props }) => {
  const { handleClose } = useSideBar()

  const handleClick = (): void => { handleClose() }

  return (
      <button onClick={handleClick} {...props}>
        {children}
      </button>
  )
}

export default CloseButton
