import React, { useContext, useEffect, useId } from 'react'
import { SideBarContext } from '../context/sideBarContext'
import { type SideBarType } from '../definitions'

interface useSideBarReturnType extends SideBarType {
  sideBarData: string
}

export function useSideBar (): useSideBarReturnType {
  const { show, handleShow, handleClose, disapear } = useContext(SideBarContext)
  const sideBarData = useId()

  // This Effect allows the SideBar to detect if we click outside its range, closing it when that happens.
  useEffect(() => {
    addEventListener('click', (event: MouseEvent) => {
      const clickedAttribute = event.target.getAttribute('data-side-bar')
      if (clickedAttribute === sideBarData) handleClose()
    })
  }, [])

  return ({ handleShow, show, sideBarData, handleClose, disapear })
}
