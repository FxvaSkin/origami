import React from 'react'
import cx from 'classnames'
import styles from './backdrop.module.css'
import { useShift, Animations } from 'hooks'
import defaultAnimations from './defaultAnimations.module.css'
import { Portal } from 'origami/Portal'

interface Props {
  isOpen: boolean
  animations?: Animations
  className?: string
  target?: HTMLElement
}

const Backdrop: React.FC<Props> = ({
  isOpen,
  animations,
  className,
  target,
  ...props
}) => {
  const { isRender, classes, ref } = useShift(
    isOpen,
    animations || defaultAnimations,
  )
  return (
    <>
      {isRender && (
        <Portal to={target}>
          <div
            ref={ref}
            className={cx(styles.backdrop, className, classes)}
            {...props}
          />
        </Portal>
      )}
    </>
  )
}

export { Backdrop }
