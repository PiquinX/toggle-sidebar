import { SideBarProvider } from '../context/sideBarContext'
import './index.css'

interface Props {
  children: JSX.Element
  closeDependency?: any[]
  openDependency?: any[]
}

const SideBarContainer: React.FC<Props> = ({ children, openDependency = [], closeDependency = [] }) => {
  return (
        <SideBarProvider
          closeDependency={closeDependency}
          openDependency={openDependency}
        >
            {children}
        </SideBarProvider>
  )
}

export default SideBarContainer
