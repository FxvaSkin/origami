import { useEffect, useState } from 'react'

type Layout = 'top' | 'center' | 'bottom'

const useDropdownPosition = (
  rootRef: React.RefObject<HTMLElement>,
  dropdownRef: React.RefObject<HTMLElement>,
  defaultLayout: Layout = 'bottom',
) => {
  const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 })
  useEffect(() => {
    const recalcPosition = () => {
      if (rootRef && rootRef.current && dropdownRef && dropdownRef.current) {
        const inputElement = rootRef.current
        const rootRect = inputElement.getBoundingClientRect()

        const dropdownElement = dropdownRef.current
        const dropdownRect = dropdownElement.getBoundingClientRect()

        let x = 0
        let y = 0
        const windowTop = window.pageYOffset
        const windowBottom = window.pageYOffset + window.innerHeight
        const windowLeft = window.pageXOffset
        const windowRight = window.pageXOffset + window.innerWidth

        const getVerticalLayout = (): // defaultLayout: Layout = 'bottom',
        Layout => {
          if (
            rootRect.bottom + windowTop + dropdownRect.height <
            windowBottom
          ) {
            return 'bottom'
          } else if (rootRect.top - dropdownRect.height > windowTop) {
            return 'top'
          } else {
            return 'center'
          }
        }
        const verticalLayout = getVerticalLayout()
        console.log(verticalLayout)

        if (rootRect.left < windowLeft) {
          x = windowLeft
        } else if (rootRect.right > windowRight) {
          x = windowRight - rootRect.width
        } else {
          x = rootRect.left
        }

        switch (verticalLayout) {
          case 'bottom': {
            y = rootRect.bottom + windowTop
            break
          }
          case 'top': {
            y = rootRect.top - dropdownRect.height + windowTop
            break
          }
          case 'center': {
            y = windowBottom - dropdownRect.height
            break
          }
        }
        setPosition({ x, y, width: rootRect.width, height: rootRect.height })
      }
    }
    recalcPosition()
    window.addEventListener('resize', recalcPosition)
    return () => window.removeEventListener('resize', recalcPosition)
  }, [])
  return position
}

export { useDropdownPosition }
