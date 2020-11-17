import React from 'react'
import cx from 'classnames'
import { Portal } from 'origami'
import { useShift, Animations } from 'hooks'
import { ModalBody, Props as ModalBodyProps } from './ModalBody'
import defaultAnimations from './defaultAnimations.module.css'

export interface Props
  extends Omit<ModalBodyProps, 'classes'>,
    React.InputHTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  target?: HTMLElement
  animations?: Animations
  children?: React.ReactNode
}

const Modal: React.FC<Props> = ({
  target,
  isOpen,
  animations,
  onClose,
  closeOnEscape,
  closeOnOutsideClick,
  className,
  layoutClassName,
  children,
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
          <ModalBody
            ref={ref}
            className={cx(className, classes)}
            layoutClassName={layoutClassName}
            onClose={onClose}
            closeOnEscape={closeOnEscape}
            closeOnOutsideClick={closeOnOutsideClick}
            {...props}
          >
            {children}
          </ModalBody>
        </Portal>
      )}
    </>
  )
}

export { Modal }
