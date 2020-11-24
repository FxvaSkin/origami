import { useEffect, useState } from 'react'

const useDropdownPosition = (
  rootRef: React.RefObject<HTMLElement>,
  dropdownRef: React.RefObject<HTMLElement>,
  defaultLayout: 'bottom' | 'right' = 'bottom',
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
        let layout = defaultLayout
        const windowTop = window.pageYOffset
        const windowBottom = window.pageYOffset + window.innerHeight
        const windowLeft = window.pageXOffset
        const windowRight = window.pageXOffset + window.innerWidth

        if (rootRect.top < windowTop) {
          y = windowTop
        } else if (rootRect.bottom + dropdownRect.height > windowBottom) {
          y = rootRect.top - dropdownRect.height
          // y = windowBottom - dropdownRect.height
          // layout =
        } else {
          y = rootRect.bottom
        }

        if (rootRect.left < windowLeft) {
          x = windowLeft
        } else if (rootRect.right > windowRight) {
          x = windowRight - rootRect.width
        } else {
          x = rootRect.left
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
