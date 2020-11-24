import React, { useRef } from 'react'
import cx from 'classnames'
import { Portal } from 'origami'
import {
  Animations,
  useClickOutside,
  useCombinedRefs,
  useKeyUp,
  useDropdownPosition,
  useShift,
} from 'hooks'
import defaultAnimations from './defaultAnimations.module.css'
import { useFloat } from 'origami/Float'
import defaultLayout from './defaultLayout.module.css'

export interface DropdownBodyProps {
  closeOnEscape?: boolean
  closeOnOutsideClick?: boolean
  root: React.RefObject<HTMLElement>
  layout?: 'right' | 'bottom'
  ignore?: Array<React.RefObject<HTMLElement>>
  style?: React.CSSProperties
  className?: string
  layoutClassName?: string
  children?: React.ReactNode
  onClose?: () => void
}

const DropdownBody = React.forwardRef<HTMLDivElement, DropdownBodyProps>(
  (
    {
      closeOnOutsideClick = true,
      closeOnEscape = true,
      onClose,
      className,
      children,
      root,
      style,
      layoutClassName,
      layout = 'bottom',
      ignore = [],
    },
    ref,
  ) => {
    const { ref: floatRef, isTopFloat } = useFloat()
    const layoutRef = useRef<HTMLDivElement>(null)
    const combinedRef = useCombinedRefs([floatRef, ref])
    const handleClose = () => {
      if (typeof onClose === 'function') {
        onClose()
      }
    }

    useClickOutside(
      [combinedRef, root, ...ignore],
      closeOnOutsideClick && isTopFloat() ? handleClose : null,
    )
    useKeyUp('Escape', closeOnEscape && isTopFloat() ? handleClose : null)
    const position = useDropdownPosition(root, layoutRef, layout)
    return (
      <div
        className={cx(defaultLayout.root, layoutClassName)}
        ref={layoutRef}
        style={{ top: position.y, left: position.x, width: position.width }}
      >
        <div ref={combinedRef} className={className}>
          {children}
        </div>
      </div>
    )
  },
)

interface Props extends DropdownBodyProps {
  isOpen: boolean
  target?: HTMLElement
  animations?: Animations
  children?: React.ReactNode
}

const Dropdown: React.FC<Props> = ({
  target,
  isOpen,
  animations,
  children,
  root,
  className,
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
          <DropdownBody
            ref={ref}
            root={root}
            className={cx(classes, className)}
            {...props}
          >
            {children}
          </DropdownBody>
        </Portal>
      )}
    </>
  )
}

export { Dropdown }
