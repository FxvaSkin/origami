import { useEffect, useRef, useState } from 'react'
import cx from 'classnames'

export interface IClassNames {
  enter: string
  enterActive?: string
  leave: string
  leaveActive?: string
}

const useShift = (
  shouldExist: boolean,
  classNames: IClassNames,
  mountOnEnter: boolean = false,
  unmountOnLeave: boolean = true,
) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isRender, setIsRender] = useState(mountOnEnter)
  const [classes, setClasses] = useState('')

  useEffect(() => {
    if (shouldExist) {
      setIsRender(true)
      setClasses(cx(classNames.enter))
    } else {
      setClasses(cx(classNames.leave))
    }
  }, [classNames, shouldExist])

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const handleAnimationEnd = (event: AnimationEvent) => {
      if (shouldExist) {
        setClasses(cx(classNames.enter, classNames.enterActive))
      } else {
        if (unmountOnLeave) {
          setIsRender(false)
        } else {
          setClasses(cx(classNames.leave, classNames.leaveActive))
        }
      }
    }
    element.addEventListener('animationend', handleAnimationEnd)
    return () => element.removeEventListener('animationend', handleAnimationEnd)
  }, [isRender, classNames, shouldExist, unmountOnLeave])

  return { isRender, classes, ref }
}
export { useShift }
