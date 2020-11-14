import React from 'react'
import cx from 'classnames'
import defaultAnimations from './modalDefaultAnimations.module.css'
import { Portal, Backdrop } from 'origami'
import { useShift } from 'hooks'
import { IClassNames } from 'hooks/useShift'
import { ModalBody, Props as ModalBodyProps } from './ModalBody'

export interface Props
  extends Omit<ModalBodyProps, 'classes'>,
    React.InputHTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  target?: HTMLElement
  backdrop?: boolean
  animations?: IClassNames
  children?: React.ReactNode
}

const Modal: React.FC<Props> = ({
  target,
  isOpen,
  animations,
  backdrop = false,
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
          {backdrop && <Backdrop className={classes} />}
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
