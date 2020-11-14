import React from 'react'
import cx from 'classnames'
import styles from './modal.module.css'
import { useFloat } from 'origami/Float'
import { useCombinedRefs, useClickOutside, useKeyUp } from 'hooks'

export interface Props {
  closeOnEscape?: boolean
  closeOnOutsideClick?: boolean
  className?: string
  layoutClassName?: string
  children?: React.ReactNode
  onClose?: () => void
}

const ModalBody = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      closeOnOutsideClick = true,
      closeOnEscape = true,
      className,
      layoutClassName,
      children,
      onClose,
      ...props
    },
    ref,
  ) => {
    const { ref: floatRef, isTopFloat } = useFloat()
    const combinedRef = useCombinedRefs([floatRef, ref])

    const handleClose = () => {
      if (typeof onClose === 'function') {
        onClose()
      }
    }
    useClickOutside(
      [combinedRef],
      closeOnOutsideClick && isTopFloat() ? handleClose : null,
    )
    useKeyUp('Escape', closeOnEscape && isTopFloat() ? handleClose : null)

    return (
      <div className={cx(styles.wrapper, layoutClassName)}>
        <div role="dialog" ref={combinedRef} className={className} {...props}>
          {children}
        </div>
      </div>
    )
  },
)

export { ModalBody }
