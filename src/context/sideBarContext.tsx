import React, { createContext, useEffect, useState } from 'react'
import { type SideBarType } from '../definitions'

const initialValue = false

export const SideBarContext = createContext<SideBarType>({
  show: initialValue,
  disapear: false,
  handleShow: () => {},
  handleClose: () => {}
})

interface Props {
  children: JSX.Element
  closeDependency: any[]
  openDependency: any[]
}

export const SideBarProvider: React.FC<Props> = ({
  children, closeDependency = [], openDependency = []
}) => {
  const [show, setShow] = useState<boolean>(false)
  const [disapear, setDisappear] = useState<boolean>(false)

  const handleShow = (): void => { setShow(true) }

  const handleClose = (): void => {
    setDisappear(true)

    setTimeout(() => {
      setShow(false)
      setDisappear(false)
    }, 360)
  }

  useEffect(() => {
    handleClose()
  }, closeDependency)

  useEffect(() => {
    handleShow()
  }, openDependency)

  return (
       <SideBarContext.Provider value={{
         show,
         disapear,
         handleShow,
         handleClose
       }}
       >
        {children}
       </SideBarContext.Provider>
  )
}
